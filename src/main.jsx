import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Features from './Layout/Features.jsx';
import Footer from './Layout/Footer.jsx';
import AgnesSection from './Components/AgnesSection.jsx';
import CoreTeam from './Components/CoreTeam.jsx';
import Header from './Layout/Header.jsx';
import Hero from './Layout/Hero.jsx';

createRoot(document.getElementById('root')).render(
  // Demo
  <StrictMode>
    <BrowserRouter>
      <Hero />
      {/* <Header /> */}
      <Features />
      <AgnesSection />
      <CoreTeam />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
