import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAddOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false); // State to manage hover effect
  const navigate = useNavigate();
  const handleHamburger = () => setIsHamburger((prev) => !prev);
  const onClickUserLogo = ()=>{
    navigate("/user")
  }
  return (
    <>
      <nav className="border-b-2 border-neutral-400 relative flex justify-between items-center py-2 px-2 sm:px-4 gap-2 ">
        {/* Logo Section */}
        <div className="flex items-center cursor-default">
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-black">
            logo
          </p>
        </div>

        {/* Search Section with Category Dropdown */}
        <div className="flex w-[65%] sm:w-[50%] md:w-[40%] gap-1 sm:gap-2 items-center ">
          {/* Dropdown Container */}
          <div className="w-[20%] md:w-[15%] space-y-2 all relative">
            {/* All Button with hover effect */}
            <div className="flex items-center justify-center gap-1 text-xs sm:text-sm md:text-lg text-black bg-orange-300 text-center py-2 px-1 cursor-pointer">
              All
              <FaAngleUp className="w-3 h-3 sm:w-6 sm:h-6" />
            </div>

            {/* Dropdown Menu */}
            <div className="">
              <Dropdown />
            </div>
          </div>

          {/* Search Input */}
          <div className="w-[70%] sm:w-[80%] ">
            <input
              type="text"
              placeholder="Search Brands..."
              className="w-full bg-[#eceaea] rounded-md py-1 px-2 sm:py-2 sm:px-4 outline-none text-xs sm:text-sm md:text-base "
            />
          </div>

          {/* Search Icon */}
          <CiSearch className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />
        </div>

        {/* Large Screen Menu */}
        <div className="hidden md:flex gap-4 lg:gap-8 w-[40%] justify-end items-center">
          <p className="text-base lg:text-lg text-black">Region</p>
          <p className="text-base lg:text-lg text-black flex items-center gap-1">
            Address <IoAddOutline className="w-5 h-5 lg:w-6 lg:h-6" />
          </p>
          <p className="text-base lg:text-lg text-black flex items-center gap-2 cursor-pointer" onClick={onClickUserLogo}>
            <FaUser className="w-5 h-5 lg:w-6 lg:h-6" /> User
          </p>
          <p className="text-base lg:text-lg text-black flex items-center gap-2">
            <BsCart3 className="w-5 h-5 lg:w-6 lg:h-6" /> Cart
          </p>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4 w-[25%]">
          <p className="text-xs sm:text-base text-black flex items-center gap-1">
            <BsCart3 className="w-4 sm:w-5 lg:w-6" /> Cart
          </p>
          <div
            className="flex flex-col justify-center gap-1 cursor-pointer w-full"
            onClick={handleHamburger}
          >
            {isHamburger ?  <RxCross1 /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>

      {/* Hamburger Menu Content */}
      {isHamburger && (
        <div className="absolute border-2 border-neutral-400 w-[30%] flex flex-col gap-2 justify-start z-10">
          <p className="text-base text-black hover:bg-green-300 w-full px-2">
            Region
          </p>
          <p className="text-base text-black flex items-center w-full hover:bg-green-300 px-2">
            Address <IoAddOutline className="w-4 h-4" />
          </p>
          <p className="text-base text-black flex w-full items-center gap-1 hover:bg-green-300 px-2" onClick={onClickUserLogo}>
            <FaUser className="w-4 h-4" /> User
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
