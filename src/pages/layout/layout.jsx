import { Header } from '@/widgest/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default Layout;