import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <div>
      <h1>Layout Component</h1>
    </div>
      <Outlet />
    </>
  );
};

export default Layout;