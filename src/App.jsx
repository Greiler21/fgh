import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Immobiliensuche from './pages/Immobiliensuche';
import FGHAngebote from './pages/FGHAngebote';
import VerkaufteImmobilien from './pages/VerkaufteImmobilien';
import FloridaInfo from './pages/FloridaInfo';
import UnserTeam from './pages/UnserTeam';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Real Estate Categories */}
        <Route path="immobiliensuche" element={<Immobiliensuche />} />
        <Route path="fgh-angebote" element={<FGHAngebote />} />
        <Route path="verkaufte-immobilien" element={<VerkaufteImmobilien />} />

        {/* Dynamic Property Route */}
        <Route path="property/:id" element={<PropertyDetails />} />

        {/* Info Pages */}
        <Route path="florida-info" element={<FloridaInfo />} />
        <Route path="unser-team" element={<UnserTeam />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Route>
    </Routes>
  );
}

export default App;
