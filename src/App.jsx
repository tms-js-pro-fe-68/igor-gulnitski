
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';


export default function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/' element={<HomePage />} exact />
        </Routes>
      </Router>
    </QueryClientProvider>

  )
}



