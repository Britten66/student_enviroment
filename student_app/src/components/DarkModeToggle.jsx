// writing a funciton for export

import { useState } from "react";

import Lottie from "lottie-react";

import lightAnimation from "../assets/animations/lighton.json";
import darkAnimation from "../assets/animations/nighton.json";

export default function DarkMode() {
  // if dark mode is on

  
  const [isDark, setIsDark] = useState(false);



  // function here
  const toggleDark = () => {
    setIsDark(!isDark);
    // is not dark ^
    document.documentElement.classList.toggle("dark");
    // above will add or removve the dark class depending on the condition
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
// moving to impoprt above into the header
