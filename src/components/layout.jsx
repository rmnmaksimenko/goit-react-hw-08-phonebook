import { Outlet } from 'react-router-dom';
import { Appbar } from './Appbar';

export const Layout = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};
