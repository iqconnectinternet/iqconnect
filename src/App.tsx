import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Internet from "./pages/Internet";
import Bundles from "./pages/Bundles";
import Coverage from "./pages/Coverage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SpeedTest from "./pages/SpeedTest";
import { PrivacyPolicy, Terms, AdvertisingDisclosure, DoNotSell, Disclaimer, CookiePolicy } from "./pages/LegalPages";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import StickyCallButton from "./components/StickyCallButton";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/speed-test" element={<SpeedTest />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/advertising-disclosure" element={<AdvertisingDisclosure />} />
          <Route path="/do-not-sell" element={<DoNotSell />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <StickyCallButton />
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
