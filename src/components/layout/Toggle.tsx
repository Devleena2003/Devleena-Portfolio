// src/components/ModeToggle.tsx
import { Switch } from "../../components/ui/switch";
import { useMode } from "../../context/Mode";

 const ModeToggle = () => {
  const { mode, toggleMode } = useMode();

  return (
    <div className="fixed top-6 right-6 z-60 flex space-x-3">
      <span
        className={`font-mono text-lg font-bold transition-colors ${
          mode === 'gui' ? 'text-white' : 'text-slate-500'
        }`}
      >
        GUI
      </span>
      <Switch
        checked={mode === 'cli'}
        onCheckedChange={toggleMode}
        aria-label="Toggle between GUI and CLI mode"
      />
      <span
        className={`font-mono text-lg font-bold transition-colors ${
          mode === 'cli' ? 'text-white' : 'text-slate-500'
        }`}
      >
        CLI
      </span>
    </div>
  );
};
export default ModeToggle;
