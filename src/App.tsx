import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkDetail from "./pages/WorkDetail";
import WorkDetailTest from "./pages/WorkDetailTest";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/website" element={<Index />} />
          <Route path="/make-n8n" element={<Index />} />
          <Route path="/python" element={<Index />} />
          <Route path="/all" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/work/:id" element={<WorkDetail />} /> */}
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/test/:slug" element={<WorkDetailTest />} />
          <Route path="/portfolio" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
