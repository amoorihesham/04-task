import Header from '@/components/ui/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
