import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashBoardRoutes from './pages/Dashboard/DashBoardRoutes';
import LoginPage from './pages/AuthPages/LoginPage';
import RegisterPage from './pages/AuthPages/RegisterPage';
import { useAuth } from './contexts/AuthProvider';
import { ActivityProvider } from './contexts/ActivityProvider';
export default function App(){const {user,loading}=useAuth();if(loading)return <div className="loading">Loading BloodConnect…</div>;return <ActivityProvider><Routes><Route path="/login" element={user?<Navigate to="/" replace/>:<LoginPage/>}/><Route path="/register" element={user?<Navigate to="/" replace/>:<RegisterPage/>}/><Route path="/*" element={user?<DashBoardRoutes/>:<LandingPage/>}/></Routes></ActivityProvider>}
