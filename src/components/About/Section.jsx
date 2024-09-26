const Section = () => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center relative">
      <div className="w-full h-full absolute bg-services-section z-100"></div>
      <div className="w-full h-full absolute bg-slate-800 opacity-60 z-10"></div>
      <h1 className="font-bold text-4xl z-10 text-white">About Us</h1>
    </div>
  );
};

export default Section;
