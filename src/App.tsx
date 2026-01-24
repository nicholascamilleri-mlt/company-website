import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { loadBranding, type BrandingConfig } from './config/branding';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import Training from './pages/Training';
import styles from './App.module.css';

const App = () => {
  const [branding, setBranding] = useState<BrandingConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBranding = async () => {
      try {
        const config = await loadBranding();
        setBranding(config);
        const root = document.documentElement;
        root.style.setProperty('--primary-color', config.primaryColor);
        root.style.setProperty('--secondary-color', config.secondaryColor);
        root.style.setProperty('--background-color', config.backgroundColor);
        root.style.setProperty('--text-color', config.textColor);
        root.style.setProperty('--accent-color', config.accentColor);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load branding configuration.');
      }
    };

    fetchBranding();
  }, []);

  if (error) {
    return <div className={styles.status}>{error}</div>;
  }

  if (!branding) {
    return <div className={styles.status}>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <Header companyName={branding.companyName} logoText={branding.logoText} />
      <Routes>
        <Route path="/" element={<Home companyName={branding.companyName} tagline={branding.tagline} />} />
        <Route path="/training" element={<Training />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact companyName={branding.companyName} />} />
      </Routes>
      <Footer companyName={branding.companyName} tagline={branding.tagline} />
    </div>
  );
};

export default App;
