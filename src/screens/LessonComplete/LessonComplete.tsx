import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingElements = () => {
  const elements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 10 + Math.random() * 80,
    top: 20 + Math.random() * 60,
    animationDelay: Math.random() * 2,
    size: Math.random() * 20 + 15,
    shape: Math.random() > 0.5 ? 'diamond' : 'circle',
    color: '#ffd700',
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute animate-bounce-gentle ${element.shape === 'circle' ? 'rounded-full' : 'rotate-45'}`}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.animationDelay}s`,
            backgroundColor: element.color,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default function LessonComplete(): JSX.Element {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Play celebration sound
    const celebrationSound = new Audio("https://raw.githubusercontent.com/cjeon94/duolingo-sound-assets/main/Voicy_Correct%20answer%20sound%20effect.mp3");
    celebrationSound.play().catch(() => {
      console.log("Could not play celebration sound");
    });

    // Auto-navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Main Canvas */}
      <div className="relative w-[390px] h-[844px] bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-3 h-[54px] relative z-10">
          <div className="text-[17px] font-semibold text-[#454a53]">12:37</div>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#454a53] rounded-full"></div>
              <div className="w-1 h-1 bg-[#454a53] rounded-full"></div>
              <div className="w-1 h-1 bg-[#454a53] rounded-full"></div>
              <div className="w-1 h-1 bg-[#454a53] rounded-full"></div>
            </div>
            <svg width="18" height="12" viewBox="0 0 18 12" className="ml-1">
              <path d="M2 2L8 8L16 2" stroke="#454a53" strokeWidth="2" fill="none"/>
            </svg>
            <div className="w-6 h-3 border border-[#454a53] rounded-sm bg-green-500"></div>
          </div>
        </div>

        {/* Green Background with Flowing Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7dd55c] via-[#58cc02] to-[#4fb802] overflow-hidden">
          {/* Flowing green shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-[200px] left-[-100px] w-[300px] h-[200px] bg-[#6bd946] rounded-full opacity-60 animate-sway"></div>
            <div className="absolute top-[300px] right-[-150px] w-[400px] h-[300px] bg-[#4fb802] rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-[500px] left-[-50px] w-[250px] h-[150px] bg-[#7dd55c] rounded-full opacity-50 animate-bounce-gentle"></div>
            <div className="absolute top-[100px] right-[-80px] w-[200px] h-[180px] bg-[#6bd946] rounded-full opacity-30 animate-sway"></div>
          </div>

          {/* Floating decorative elements */}
          <FloatingElements />

          {/* Flying Duo Owl */}
          <div className="absolute top-[180px] left-[50px] w-[290px] h-[270px] animate-sway">
            <img
              className="w-full h-full object-contain"
              alt="Flying Duo celebrating"
              src="/cheer-owl.gif"
            />
          </div>

          {/* Lesson Complete Text */}
          <div className="absolute bottom-[200px] left-0 right-0 text-center px-6">
            <h1 className="text-5xl font-black text-[#ffd700] mb-2 animate-bounce-gentle font-['Nunito',Helvetica]">
              Lesson
            </h1>
            <h1 className="text-5xl font-black text-[#ffd700] animate-bounce-gentle font-['Nunito',Helvetica]" style={{ animationDelay: '0.2s' }}>
              complete!
            </h1>
            
            {/* Decorative elements around text */}
            <div className="absolute top-0 left-[20%] w-6 h-6 bg-[#ffd700] rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-8 right-[25%] w-4 h-4 bg-[#ffd700] rotate-45 animate-bounce-gentle" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute bottom-4 left-[15%] w-5 h-5 bg-[#ffd700] rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 right-[20%] w-3 h-3 bg-[#ffd700] rotate-45 animate-bounce-gentle" style={{ animationDelay: '0.3s' }}></div>
          </div>

          {/* Continue Button */}
          <div className="absolute bottom-[80px] left-6 right-6">
            <button
              onClick={() => navigate("/")}
              className="w-full h-14 rounded-2xl bg-white text-[#58cc02] font-bold text-lg shadow-lg hover:bg-gray-50 transition-all active:scale-95"
            >
              Continue
            </button>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-[134px] h-[5px] bg-black rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LessonComplete };