import { useMode } from "../../context/Mode";

const ModeToggle = () => {
  const { mode, toggleMode } = useMode();
  const isCLI = mode === 'cli';

  return (

    <div className="fixed top-6 z-60">
      {/* <div className="flex items-center bg-slate-800/90 rounded-full p-1 border border-slate-700">
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
      </div> */}
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[100] flex items-center gap-2 md:gap-3">
      <span className={`font-mono text-sm md:text-lg font-bold transition-colors duration-300 ${
        mode === "gui" ? "text-white" : "text-slate-400"
      }`}>
        GUI
      </span>

      <button
        onClick={toggleMode}
        className={`
          mode-toggle relative w-14 h-7 md:w-16 md:h-8 flex items-center rounded-full
          transition-all duration-300 ease-in-out
          border-0 outline-none focus:outline-none focus:ring-2 focus:ring-white/20
          ${mode === "cli" ? "bg-fuchsia-600 hover:bg-fuchsia-500" : "bg-purple-600 hover:bg-purple-500"}
        `}
        style={{
          padding: '2px',
          backgroundColor: mode === "cli" ? '#c026d3' : '#9333ea',
          border: 'none',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }}
      >
        <div
          className={`
            h-5 w-5 md:h-6 md:w-6 rounded-full bg-white shadow-lg 
            transform transition-transform duration-300 ease-in-out
            ${mode === "cli" ? "translate-x-6 md:translate-x-7" : "translate-x-0"}
          `}
        />
      </button>

      <span className={`font-mono text-sm md:text-lg font-bold transition-colors duration-300 ${
        mode === "cli" ? "text-white" : "text-slate-400"
      }`}>
        CLI
      </span>

      </div>
      </div>
  );
};

export default ModeToggle;
