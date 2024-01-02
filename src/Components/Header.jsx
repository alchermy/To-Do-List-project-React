import React from "react";
import "./Header.css";
import { MdLightMode , MdDarkMode} from "react-icons/md";
function Header({ theme, setTheme }) {
  function ToggleTheme() {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  }
  return (
    <header>
      <div className="logo">
        <a>Todo List App</a>
      </div>
      <div className="theme-container" onClick={ToggleTheme}>
        <span className="icon">{theme ==="Light"?<MdLightMode/>:<MdDarkMode/>}</span>
      </div>
    </header>
  );
}
export default Header;
