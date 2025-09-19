const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center px-5 border-b border-[#F2F2F2/50] bg-[#000000]/60 h-[72px] backdrop-blur-[3px]">
      <div className="max-w-[1280px] w-full mx-auto">
        <img src="logo.svg" alt="logo" className="h-[16px] md:h-[20px]" />
      </div>
    </div>
  );
};

export default Navbar;
