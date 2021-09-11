import { useDarkMode } from "../hooks/userDarkMode";
import { FaMoon, FaRegMoon } from "react-icons/fa";
const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className='flex items-center gap-2 md:text-base text-xs'
    >
      {isDark ? <FaMoon /> : <FaRegMoon />}
      Dark Mode
    </button>
  );
};
export default Toggle;
