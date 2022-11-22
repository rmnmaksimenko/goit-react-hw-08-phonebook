import 'index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage } from '../pages/ContactsPage';
import { Layout } from './layout';
import { AboutPage } from 'pages/AboutPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';
export const STORAGE = 'contactList';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutPage />} end />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to={'/About'} />} />
      </Route>
    </Routes>
  );
}
