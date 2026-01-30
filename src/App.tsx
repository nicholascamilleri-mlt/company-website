import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { loadBranding, type BrandingConfig } from './config/branding';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import Training from './pages/Training';
import WhoWeAre from './pages/WhoWeAre';
import BusinessTechnologyRoadmap from './pages/BusinessTechnologyRoadmap';
import styles from './App.module.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (previousPathRef.current && previousPathRef.current !== pathname) {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('previousPath', previousPathRef.current);
      }
    }
    previousPathRef.current = pathname;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

type AppProps = {
  initialBranding?: BrandingConfig | null;
};

const App = ({ initialBranding = null }: AppProps) => {
  const [branding, setBranding] = useState<BrandingConfig | null>(initialBranding);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (branding) {
      return;
    }

    const fetchBranding = async () => {
      try {
        const config = await loadBranding();
        setBranding(config);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load branding configuration.');
      }
    };

    fetchBranding();
  }, [branding]);

  useEffect(() => {
    if (!branding) {
      return;
    }

    const root = document.documentElement;
    root.style.setProperty('--primary-color', branding.primaryColor);
    root.style.setProperty('--secondary-color', branding.secondaryColor);
    root.style.setProperty('--background-color', branding.backgroundColor);
    root.style.setProperty('--text-color', branding.textColor);
    root.style.setProperty('--accent-color', branding.accentColor);
  }, [branding]);

  if (error) {
    return <div className={styles.status}>{error}</div>;
  }

  if (!branding) {
    return <div className={styles.status}>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header companyName={branding.companyName} logoImage={branding.logoImage} />
      <Routes>
        <Route path="/" element={<Home companyName={branding.companyName} tagline={branding.tagline} />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/training" element={<Training />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/business-technology-roadmap" element={<BusinessTechnologyRoadmap />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact companyName={branding.companyName} />} />
      </Routes>
      <Footer companyName={branding.companyName} tagline={branding.tagline} />
    </div>
  );
};

export default App;
