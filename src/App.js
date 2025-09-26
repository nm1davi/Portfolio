import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContenedorApp from './components/contenedorApp';
import NotFound from './components/notFound';
import CotizadorOnline from './components/proyects/cotizadorOnline';
import AppHerrajes from './components/proyects/appHerrajes';
import AppVinitec from './components/proyects/appVinitec';
import AppBarberia from './components/proyects/appBarberia';
import ConsultorDePrecios from './components/proyects/consultorDePrecios';
import Portfolio from './components/proyects/portfolio';
import PageLoader from './components/pageLoader';
import { useGlobalLoader } from "./hooks/useGlobalLoader";

function App() {

  const loading = useGlobalLoader({
    initialMs: 2000,
    routeMinMs: 800,
    externalClickMs: 700
  });

  return (
    <>
    {loading && <PageLoader />}
      <Routes>
        <Route path='/' element={<ContenedorApp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cotizadorOnline" element={<CotizadorOnline />} />
        <Route path="/appHerrajes" element={<AppHerrajes />} />
        <Route path="/appVinitec" element={<AppVinitec />} />
        <Route path="/appBarberia" element={<AppBarberia />} />
        <Route path="/consultorDePrecios" element={<ConsultorDePrecios />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
