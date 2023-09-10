import { Routes, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home';
import pages from '../src/components/utils/pages';

function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
          <Route index element={<Home />} />
          <Route path={pages.get('home').path} element={<Home />} />
      </Routes>
      </main>
      <Footer />
      </>
  
  );
}

export default App;
