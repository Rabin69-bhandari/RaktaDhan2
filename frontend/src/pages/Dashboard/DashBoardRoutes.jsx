import {Route,Routes,Navigate} from 'react-router-dom';
import DashBoard from './DashBoard';
import DashBoardLayout from './DashBoardLayout';
import BloodForm from './BloodForm';
import History from './History';
import {useAuth} from '../../contexts/AuthProvider';
function Profile(){const {user}=useAuth();return <section className="panel"><h1>Your profile</h1><p>{user?.name}</p><p>{user?.email}</p><p>Donation contact details are provided with each submission.</p></section>}
export default function DashBoardRoutes(){return <Routes><Route element={<DashBoardLayout/>}><Route index element={<DashBoard/>}/><Route path="donate" element={<BloodForm key="donation" kind="donation"/>}/><Route path="request" element={<BloodForm key="request" kind="request"/>}/><Route path="history" element={<History/>}/><Route path="profile" element={<Profile/>}/><Route path="settings" element={<section className="panel"><h1>Project settings</h1><p>Demo submissions are saved on this browser; registered accounts use PostgreSQL. Use History to cancel them. Demo sign-in lasts until you sign out or close this browser session.</p></section>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>}
