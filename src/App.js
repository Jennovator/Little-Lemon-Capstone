import { Routes, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home';
import pages from '../src/components/utils/pages';
import About from "./components/pages/Home/About";
import Reservation from "./components/pages/Reservations/Reservation";
import ConfirmedReservation from './components/pages/Reservations/ConfirmedReservation';

function App() {
  return (
    <>
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
        </Routes>
      </main>
      <Footer />
    </>

  );
}

export default App;
