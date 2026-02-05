import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AIChatWidget from './components/AIChatWidget/AIChatWidget'
import CustomCursor from './components/CustomCursor/CustomCursor'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import PageTransition from './components/PageTransition/PageTransition'
import BackToTop from './components/BackToTop/BackToTop'
import CookieBanner from './components/CookieBanner/CookieBanner'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Utilities from './pages/Utilities/Utilities'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Calculators from './pages/Calculators/Calculators'
import Blog from './pages/Blog/Blog'
import Portfolio from './pages/Portfolio/Portfolio'
import Pricing from './pages/Pricing/Pricing'
import Terms from './pages/Terms/Terms'
import Privacy from './pages/Privacy/Privacy'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
      <AIChatWidget />
      <CookieBanner />
    </>
  )
}

export default App
