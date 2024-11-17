export type FormType = {
  billing_address: { address: string; city: string; country: string; nr: string; postalCode: string };
  contact_email: string;
  contact_name: string;
  contact_number: string;
  login_number: string;
  monthly_sessions: number;
  payment: { method: string; cardNumber: string; cardHolder: string };
};
