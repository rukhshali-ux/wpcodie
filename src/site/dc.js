// The small runtime the page logic and markup were written against, reimplemented on
// Preact with the same semantics as the design tool's runtime (dc-runtime).
import { Component, createRef, h } from 'preact';

// `React.createRef()` is what the page logic calls.
export const React = { createRef };

// Base class for ./logic.js. State updates merge immediately into `this.state` (the page
// logic reads it straight back) and then re-render the host component.
export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.__host = null;
  }
  setState(update, cb) {
    const prev = this.state;
    const patch = typeof update === 'function' ? update(prev) : update;
    this.state = { ...prev, ...patch };
    if (this.__host) this.__host.setState((s) => ({ v: (s.v || 0) + 1 }), cb);
  }
  forceUpdate() {
    if (this.__host) this.__host.forceUpdate();
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderVals() {
    return {};
  }
}

// Wraps a DCLogic subclass and a template function into a Preact component.
export function dcComponent(Logic, template) {
  return class DCHost extends Component {
    constructor(props) {
      super(props);
      this.state = { v: 0 };
      this.logic = new Logic(props);
      this.logic.__host = this;
    }
    componentDidMount() {
      this.logic.componentDidMount();
    }
    componentDidUpdate(prevProps) {
      this.logic.props = this.props;
      this.logic.componentDidUpdate(prevProps);
    }
    componentWillUnmount() {
      this.logic.componentWillUnmount();
    }
    render() {
      this.logic.props = this.props;
      return template({ ...this.props, ...this.logic.renderVals() });
    }
  };
}

// Inline style string -> style object, split exactly as the design runtime did.
const styleCache = new Map();
export function css(text) {
  let o = styleCache.get(text);
  if (o) return o;
  o = {};
  for (const decl of text.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    o[prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = decl.slice(i + 1).trim();
  }
  if (styleCache.size < 5000) styleCache.set(text, o);
  return o;
}

// A `{{ value }}` inside text: rendered in its own span, nothing for null/undefined/booleans.
export function txt(value) {
  if (value === undefined || value === null || typeof value === 'boolean') return null;
  return h('span', { class: 'sc-interp' }, String(value));
}

// `sc-for` over anything that is not an array renders nothing.
export function each(value) {
  return Array.isArray(value) ? value : [];
}
