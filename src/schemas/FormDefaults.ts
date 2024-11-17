const formDefaults = {
  login_number: '',
  contact_email: '',
  contact_number: '',
  contact_name: '',
  billing_address: {
    address: '',
    city: '',
    country: '',
    nr: '',
    postalCode: '',
  },
  monthly_sessions: 8,

  payment: {
    method: 'visa',
    cardNumber: '',
    cardHolder: '',
  },
};

export default formDefaults;
