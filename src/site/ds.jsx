// Button and Input from the design system bundle (assets/js/ds-bundle.js in the export),
// ported to Preact unchanged in behaviour and styling.

export function Button({ children, variant = 'primary', size = 'md', disabled = false, ...props }) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-4)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--font-weight-ui-medium)',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: disabled ? 0.5 : 1,
    ...props.style,
  };
  const sizeStyles = {
    sm: { fontSize: 'var(--font-size-ui-sm)', padding: 'var(--space-2) var(--space-4)' },
    md: { fontSize: 'var(--font-size-ui-md)', padding: 'var(--space-3) var(--space-6)' },
    lg: { fontSize: 'var(--font-size-ui-lg)', padding: 'var(--space-4) var(--space-8)' },
  };
  const variantStyles = {
    primary: { backgroundColor: 'var(--color-accent)', color: 'var(--color-midnight)' },
    secondary: { backgroundColor: 'transparent', color: 'var(--color-midnight)', border: '1px solid var(--color-midnight)' },
    ghost: { backgroundColor: 'transparent', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' },
    tertiary: { backgroundColor: 'transparent', color: 'var(--color-accent)', border: 'none' },
  };
  return (
    <button style={{ ...baseStyles, ...sizeStyles[size], ...variantStyles[variant] }} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export function Input({ label, placeholder, disabled = false, error, value, onChange, ...props }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && (
        <label style={{ fontSize: 'var(--font-size-ui-md)', fontWeight: 'var(--font-weight-ui-medium)', color: 'var(--color-text-primary)' }}>
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onInput={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          fontSize: 'var(--font-size-ui-md)',
          padding: 'var(--space-3) var(--space-4)',
          border: error ? '1px solid var(--color-error)' : '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          fontFamily: 'var(--font-body)',
          backgroundColor: 'var(--color-bg-light)',
          color: 'var(--color-text-primary)',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? 'not-allowed' : 'text',
          ...props.style,
        }}
        {...props}
      />
      {error && <span style={{ fontSize: 'var(--font-size-ui-sm)', color: 'var(--color-error)' }}>{error}</span>}
    </div>
  );
}
