import PropTypes from "prop-types";

const Dropdown = () => {
    return (
      <div
        className={`categories bg-green-400 gap-2 p-2 z-20 `} 
      >
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black">Rose</p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black">Melon</p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black">Perfume</p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black">Aerosol</p>
      </div>
    );
  };


Dropdown.propTypes={
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
}
export default Dropdown;  