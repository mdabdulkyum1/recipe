import { FaRegUserCircle } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <div className="flex justify-between place-items-center">
      <div>
        {" "}
        <a className="text-[#150B2B] font-bold text-[32px]" href="">
          Recipe Calories
        </a>{" "}
      </div>
      <div>
        <nav>
          <ul className="flex gap-x-6">
            <li>
              <a href="" className="text-[16px]">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-[16px]">
                Recipes
              </a>
            </li>
            <li>
              <a href="" className="text-[16px]">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-[16px]">
                Search
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="text-[24px] rounded-full p-2 bg-[#0BE58A]">
          <FaRegUserCircle />
        </button>
      </div>
    </div>
  );
};

export default Header;
