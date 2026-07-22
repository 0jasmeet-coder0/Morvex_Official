import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";
import MouseGlow from "./components/MouseGlow";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll.tsx";

import Home from "./pages/Home";
import Games from "./pages/Games";
import VeilGame from "./pages/VeilGame";
import AboutPage from "./pages/AboutPage";
import News from "./pages/News";
import Press from "./pages/Press";
import Blog from "./pages/Blog";
import Studios from "./pages/Studios";
import NexarisStudio from "./pages/NexarisStudio";
import KaironGames from "./pages/KaironGames";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
  window.scrollTo(0,0);
  }, [pathname]);

  return null;
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>

      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/games"
          element={
            <PageTransition>
              <Games />
            </PageTransition>
          }
        />

        <Route
          path="/games/veil"
          element={
            <PageTransition>
              <VeilGame />
            </PageTransition>
          }
        />

        <Route
          path="/studios"
          element={
            <PageTransition>
              <Studios />
            </PageTransition>
          }
        />

        <Route
          path="/studios/nexaris"
          element={
            <PageTransition>
              <NexarisStudio />
            </PageTransition>
          }
        />

        <Route
          path="/studios/kairon"
          element={
            <PageTransition>
              <KaironGames />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />

        <Route
          path="/news"
          element={
            <PageTransition>
              <News />
            </PageTransition>
          }
        />

        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />

        <Route
          path="/press"
          element={
            <PageTransition>
              <Press />
            </PageTransition>
          }
        />

        <Route
          path="/reach-out"
          element={
            <PageTransition>
              <Careers />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
         <ClickSpark
        sparkColor="#ffffff"
        sparkSize={12}
        sparkRadius={25}
        sparkCount={8}
        duration={500}
      >
     <SmoothScroll />
     <MouseGlow />
     <CustomCursor />
      <ScrollToTop />
        <div className="bg-black text-white min-h-screen">
          <Navigation />
          <AnimatedRoutes />
          <Footer />
        </div>
      </ClickSpark>
    </Router>
  );
}

export default App;