import React, { useState, useEffect } from 'react';
import { Star, X, Loader2 } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import techData from '../data/technologies.json'; // লোকাল JSON ফাইল इम्পোর্ট

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export const TechStackSection: React.FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stack, setStack] = useState<Technology[]>([]);

  // useEffect দিয়ে ডেটা লোড করার সময় লোডিং স্টেট হ্যান্ডেল করা
  useEffect(() => {
    const fetchTechnologies = async () => {
      setLoading(true);
      try {
        // যেহেতু লোকাল ফাইল, সামান্য ডিলে দিয়ে লোডিং ফিল আনা হয়েছে যাতে দৃশ্যমান হয়
        setTimeout(() => {
          setTechnologies(techData);
          setLoading(false);
        }, 400);
      } catch (error) {
        toast.error('Failed to load technologies!');
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  // স্ট্যাকে যোগ করার ফাংশন
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
      });
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: 'bottom-right',
    });
  };

  // একটি আইটেম রিমুভ করার ফাংশন
  const handleRemoveFromStack = (id: string, name: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack.`, {
      position: 'bottom-right',
    });
  };

  // সব রিমুভ করার ফাংশন
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies cleared from stack!', {
      position: 'bottom-right',
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-white">
        <Loader2 className="w-10 h-10 text-pink-500 animate-spin mb-3" />
        <p className="text-gray-600 font-medium">Loading technologies...</p>
      </div>
    );
  }

  return (
    <section id="technologies" className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Grid & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* ================= TECHNOLOGY CARDS GRID (3 Columns on Desktop) ================= */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
                        {tech.badge}
                      </span>
                    </div>

                    {/* Name & Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                    {/* Chips & Rating Row */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-2 border-t border-gray-50">
                      <span className="bg-gray-100 px-2.5 py-1 rounded-md font-medium text-gray-700">
                        {tech.category}
                      </span>
                      <span className="font-medium text-gray-600">
                        {tech.difficulty}
                      </span>
                      <div className="flex items-center gap-1 font-semibold text-gray-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{tech.rating}</span>
                      </div>
                    </div>

                    {/* Add to Stack Button */}
                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isAdded}
                      className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                        isAdded
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                          : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm'
                      }`}
                    >
                      {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= YOUR STACK SIDEBAR ================= */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-28">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
            <p className="text-sm text-gray-500 mb-6">
              {stack.length} Technology Selected
            </p>

            {/* Empty State or Selected Items List */}
            {stack.length === 0 ? (
              <div className="text-center py-10 px-4 border-2 border-dashed border-gray-100 rounded-xl mb-6">
                <p className="text-sm text-gray-400">No technologies added to your stack yet. Click "Add to Stack" on any card.</p>
              </div>
            ) : (
              <div className="space-y-3 mb-6 max-h-[380px] overflow-y-auto pr-1">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                        <span className="text-[11px] font-medium text-gray-500">{item.category}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromStack(item.id, item.name)}
                      className="text-gray-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Remove All Button */}
            {stack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 transition-colors"
              >
                Remove All
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Toast Container for React-Toastify */}
      <ToastContainer autoClose={2000} hideProgressBar={false} />
    </section>
  );
};

export default TechStackSection;