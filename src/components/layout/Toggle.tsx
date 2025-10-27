import { useMode } from "../../context/Mode";

const ModeToggle = () => {
  const { mode, toggleMode } = useMode();
  const isCLI = mode === 'cli';

  return (
    <div className="fixed top-6 right-6 z-60">
      <div className="flex items-center bg-slate-800/90 rounded-full p-1 border border-slate-700">
        <button
          onClick={() => !isCLI && toggleMode()}
          className={`px-2 py-1.5 rounded-full text-sm font-medium transition-colors ${!isCLI ? 'bg-white text-black' : 'text-slate-400 hover:text-white'
            }`}
        >
          GUI
        </button>

        <button
          onClick={() => isCLI && toggleMode()}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isCLI ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
        >
          CLI
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;
