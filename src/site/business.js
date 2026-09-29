// The business's offices, shown in the footer and Contact, and in the structured data and
// llms.txt. Each must match its Google Business Profile exactly: local search compares them.
// The first office is the main one (PHONE / ADDRESS below are kept for the places that show one).
export const OFFICES = [
  {
    key: 'kalispell',
    label: 'US office',
    phone: '+1-214-898-9754',
    phoneDisplay: '+1 (214) 898-9754',
    address: { street: '1001 S Main St, Ste 500', locality: 'Kalispell', region: 'MT', postalCode: '59901', country: 'US' },
    lines: ['1001 S Main St, Ste 500', 'Kalispell, MT 59901, USA'],
  },
  {
    key: 'manchester',
    label: 'UK office',
    phone: '+44-7857-215085',
    phoneDisplay: '+44 7857 215085',
    address: { street: '32 Kenyon Street', locality: 'Manchester', region: '', postalCode: 'M18 8SF', country: 'GB' },
    lines: ['32 Kenyon Street', 'Manchester M18 8SF, United Kingdom'],
  },
];
export const telHref = (phone) => 'tel:' + phone.replace(/-/g, '');

export const PHONE = OFFICES[0].phone;
export const PHONE_DISPLAY = OFFICES[0].phoneDisplay;
export const ADDRESS = OFFICES[0].address;
export const ADDRESS_LINES = OFFICES[0].lines;
