import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Features from './Layout/Features.jsx';
import Hero from './Layout/Hero.jsx';
import Roadmap from './Layout/Roadmap.jsx';
import BottomMenu from './Layout/BottomMenu.jsx';
import AgnesSection from './Components/AgnesSection.jsx';
import CoreTeam from './Components/CoreTeam.jsx';
import Footer from './Layout/Footer.jsx';

createRoot(document.getElementById('root')).render(
  // Demo
  <StrictMode>
    <BrowserRouter>
      <Hero />
      <Roadmap />
      <Features />
      <BottomMenu />
      <AgnesSection />
      <CoreTeam />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
