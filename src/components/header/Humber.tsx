const HamburgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <div>
      <button
        className="relative w-8 h-8 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-6 bg-primary_color transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-primary_color transform transition-all duration-200 ease-in-out ${
              isOpen ? "w-0 opacity-50" : "w-6 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-primary_color transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
