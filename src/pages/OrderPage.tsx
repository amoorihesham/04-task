import RegistrationBookingFrom from '@/components/ui/RegistrationBookingFrom';
import { useState } from 'react';
const OrderPage = () => {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  return (
    <div className=' px-20 py-10 flex justify-center'>
      <RegistrationBookingFrom dir={dir} />
    </div>
  );
};

export default OrderPage;
