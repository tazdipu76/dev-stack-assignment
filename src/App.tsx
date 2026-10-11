import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackSection from './components/TechStackSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <TechStackSection />
    </div>
  );
}

export default App;