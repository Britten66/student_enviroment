import { useState } from "react";
import Lottie from "lottie-react";
import lightAnimation from "../assets/animations/lighton.json";
import darkAnimation from "../assets/animations/nighton.json";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDark} style={{ width: 60 }}>
      <Lottie
        animationData={isDark ? lightAnimation : darkAnimation}
        loop={false}
        style={{ width: 50, height: 50 }}
      />
    </button>
  );
}
