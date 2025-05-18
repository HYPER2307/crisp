import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import { Home } from './pages/Home/Home';
import { Plants } from './pages/Plants/Plants';
import { PhonesProvider } from './storage/phonesContext';
import {
  ProductDetailsPage,
} from './pages/ProductsDetailPage/ProductDetailsPage';
import { Tablets } from './pages/Tablets/Tablets';
import { Accessories } from './pages/Accessories/Accessories';
import { Favorites } from './pages/Favorites/Favorites';
import { Cart } from './pages/Cart/Cart';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Checkout } from './components/Checkout/Checkout';
import { PATHNAMES } from './constants/routes';

export const Root: React.FC = () => (
  <PhonesProvider>
    <Router>
      <Routes>
        <Route path={PATHNAMES.HOME} element={<App />}>
          <Route index element={<Home />} />
          <Route path={PATHNAMES.PLANTS} element={<Plants />} />
          <Route path={PATHNAMES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
          <Route path={PATHNAMES.FLOWERS} element={<Tablets />} />
          <Route path={PATHNAMES.FERTILIZERS} element={<Accessories />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path={PATHNAMES.CART} element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  </PhonesProvider>
);
