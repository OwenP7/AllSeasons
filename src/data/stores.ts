export type Store = {
  name: string;
  address: string;
  city: string;
  phone: string;
  directions: string;
};

export const stores: Store[] = [
  {
    name: "All Seasons DTLA",
    address: "1234 Flower St, Los Angeles, CA 90013",
    city: "Los Angeles",
    phone: "(213) 555-0123",
    directions: "https://maps.google.com/?q=1234+Flower+St+Los+Angeles+CA+90013",
  },
  {
    name: "Westside Collective",
    address: "2400 Lincoln Blvd, Venice, CA 90291",
    city: "Venice",
    phone: "(310) 555-0145",
    directions: "https://maps.google.com/?q=2400+Lincoln+Blvd+Venice+CA+90291",
  },
  {
    name: "Highland Studio",
    address: "821 Highland Ave, Hollywood, CA 90038",
    city: "Hollywood",
    phone: "(323) 555-0177",
    directions: "https://maps.google.com/?q=821+Highland+Ave+Hollywood+CA+90038",
  },
];
