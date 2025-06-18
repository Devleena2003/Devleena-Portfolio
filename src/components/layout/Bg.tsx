// src/components/layout/BackgroundAnimation.tsx

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

const BackgroundAnimation = () => {
  // This memoized function will be passed to the Particles component
  const particlesInit = useCallback(async (engine: Engine) => {
    // The loadStarsPreset function is what sets up the starry background
    await loadStarsPreset(engine);
  }, []);

  // Memoize the options object to prevent unnecessary re-renders
  const particlesOptions = useMemo(() => {
    return {
      preset: "stars",
      background: {
        // This will be the background color of the canvas
        color: {
          value: "#fff", // A dark color similar to slate-900
        },
      },
      // This is crucial for placing the animation behind all other content
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default BackgroundAnimation;