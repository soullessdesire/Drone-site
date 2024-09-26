import mountainDrone from "../../assets/images/mountainDrone.jpg";
import forestDrone from "../../assets/images/forestDrone.jpg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RecommendIcon from "@mui/icons-material/Recommend";

const AboutUs = () => {
  return (
    <section className="flex w-full h-[800px] flex justify-center items-center flex-wrap sm:h-fit">
      <div className="w-[350px] h-[600px] flex justify-center items-center flex-col rounded-lg overflow-hidden">
        <div>
          <img src={mountainDrone} alt="" />
        </div>
        <div>
          <img src={forestDrone} alt="" />
        </div>
      </div>
      <div className="w-[400px] h-5/6 my-5 p-4 rounded-2xl bg-slate-800 text-white">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <br />
        <p className="text-lg max-w-2xl mx-auto text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis
          eveniet et quisquam quae! Officia esse adipisci illum sit maiores
          officiis, laudantium iusto ab explicabo? Beatae reiciendis magni
          dolores perspiciatis. Voluptas vero odio aut at officia quia rerum
          minus. Consequuntur ea, iure inventore quisquam eum voluptatum?
          Officia, distinctio natus! Magnam quis, reprehenderit blanditiis illo
          laboriosam vel accusamus dolores delectus adipisci. Nobis tempore
          consequuntur ipsum beatae quidem a quo officiis explicabo cum aperiam
          sapiente qui aut consectetur earum neque quasi accusamus eius maiores,
          est praesentium asperiores. Sint maxime omnis nostrum? Enim.
        </p>
        <br />
        <br />
        <p className="text-lg max-w-2xl mx-auto text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis
          eveniet et quisquam quae! Officia esse adipisci illum sit maiores
          officiis, laudantium iusto ab explicabo? Beatae reiciendis magni
          dolores perspiciatis.
        </p>
        <br />
        <br />
        <br />
        <br />
        <button className="">Learn More</button>
      </div>
      <div className="flex flex-col w-[400px] my-7 rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold">Why Choose Us</h1>
        <br />
        <p className="text-xs">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed,
          atque accusantium, autem numquam excepturi dolore nam nesciunt
          asperiores nihil illum, fuga voluptatum blanditiis? Eos fugit dolor
          eum incidunt sed. Sunt reprehenderit reiciendis repellat molestiae
        </p>
        <br />
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <SupportAgentIcon className="h-fit w-fit mt-1" />
            <div>
              <h1 className="text-2xl font-bold mb-2">24/7 Support</h1>
              <p className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                sed, atque accusantium, autem numquam excepturi dolore nam
                nesciunt asperiores nihil illum, fuga voluptatum blanditiis? Eos
                fugit dolor eum incidunt sed. Sunt reprehenderit reiciendis
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <RecommendIcon className="h-fit w-fit mt-1" />
            <div>
              <h1 className="text-2xl font-bold mb-2">Trusted Worldwide</h1>
              <p className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                sed, atque accusantium, autem numquam excepturi dolore nam
                nesciunt asperiores nihil illum, fuga voluptatum blanditiis? Eos
                fugit dolor eum incidunt sed. Sunt reprehenderit reiciendis
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <WorkspacePremiumIcon className="h-fit w-fit mt-1" />
              <div>
                <h1 className="text-2xl font-bold mb-2">Industry Certified</h1>
                <p className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum sed, atque accusantium, autem numquam excepturi dolore
                  nam nesciunt asperiores nihil illum, fuga voluptatum
                  blanditiis? Eos fugit dolor eum incidunt sed. Sunt
                  reprehenderit reiciendis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
