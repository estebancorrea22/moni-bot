import { Route, Routes } from 'react-router-dom';
import { DataTableDemo } from './pages/tabla';
import { Login } from './pages/login';
import { Home } from './pages/home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data-table" element={<DataTableDemo />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}