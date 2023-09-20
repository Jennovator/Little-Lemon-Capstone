import { Routes, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home';
import pages from '../src/components/utils/pages';
import About from "./components/pages/Home/About";
import Reservation from "./components/pages/Reservations/Reservation";
import ConfirmedReservation from './components/pages/Reservations/ConfirmedReservation';
import Menu from './components/pages/Orders/Menu';
import OrderOnline from './components/pages/Orders/OrderOnline';
import Login from './components/pages/Login';
import { OrderProvider } from './provider/OrderContext';

function App() {
  return (
    <OrderProvider>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={pages.get('home').path}
            element={<Home />}
          />
          <Route
            path={pages.get('about').path}
            element={<About />}
          />
          <Route
            path={pages.get('reservation').path}
            element={<Reservation />}
          />
          <Route
            path={pages.get('confirmedReservation').path}
            element={<ConfirmedReservation />}
          />
          <Route
            path={pages.get('menu').path}
            element={<Menu />}
          />
          <Route
            path={pages.get('orderOnline').path}
            element={<OrderOnline />}
          />
          <Route
            path={pages.get('login').path}
            element={<Login />}
          />
        </Routes>
      </main>
      <Footer />
    </OrderProvider>

  );
}

export default App;
