const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto p-10">
      <img
        src={"src/assets/images/logo.svg"}
        alt="huddle logo"
        className="xs:h-4 sm:h-4 md:h-8"
      />
      <a
        href="#"
        className="text-Pink py-2 md:px-6 border border-Pink rounded-3xl  xs:text-[0.55rem] sm:text-[0.8rem] xs:px-4 sm:px-4 xs:py-1 sm:py-1 font-medium
        hover:border-pink-300 hover:text-pink-300 transition-colors
      "
      >
        Try it Free
      </a>
    </nav>
  );
};

export default Navbar;
