import {
  BrowserRouter,
  Navigate,
  replace,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import NewUsers from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* main element */}
          <Route index element={<Navigate replace to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<NewUsers />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
