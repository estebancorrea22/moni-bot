import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './pages/header';
import { AppRoutes } from './routes';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;