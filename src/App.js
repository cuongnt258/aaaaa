import { BrowserRouter } from 'react-router-dom';

import Router from './routes.js';
import NewRouter from './newRoutes.js';

import ThemeProvider from 'theme/index.js';
import { ProviderToken } from './context/authenToken/AuthenToken.jsx';
import DashboardSidebar from 'components/Layout/DashboardSidebar.js';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ProviderToken>
          {/* <Router /> */}
          <NewRouter />
        </ProviderToken>
      </ThemeProvider>
    </BrowserRouter>
  );
}
