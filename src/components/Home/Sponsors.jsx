import "../../index.css";

const sponsors = [
  "Sponsor 1",
  "Sponsor 2",
  "Sponsor 3",
  "Sponsor 4",
  "Sponsor 5",
  "Sponsor 6",
  "Sponsor 7",
  "Sponsor 8",
  "Sponsor 9",
  "Sponsor 10",
];

const Sponsors = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 h-[250px] flex justify-center  flex-col gap-[60px]">
      <h1 className="text-4xl font-bold self-center">Sponsors</h1>
      <div className="slider flex">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="min-w-[150px] px-4 py-2 mx-4 bg-yellow-300 text-center rounded-md text-lg"
          >
            {sponsor}
          </div>
        ))}
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="min-w-[150px] px-4 py-2 mx-4 bg-yellow-300 text-center rounded-md text-lg"
          >
            {sponsor}
          </div>
        ))}
        fuck off
      </div>
    </div>
  );
};

export default Sponsors;
