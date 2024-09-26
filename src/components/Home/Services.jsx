import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Services = () => {
  return (
    <section className="flex flex-col gap-10 flex-wrap">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-4xl ml-4">
          We provide top notch Services
        </h1>
        <div className="w-[500px] mt-6 mr-6">
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, alias
            assumenda eos architecto omnis ipsam? Corrupti consequuntur vel,
            quidem sapiente temporibus, nemo eaque doloribus neque voluptatibus
          </p>
          <br />
          <button className="bg-slate-800 text-white hover:bg-white hover:text-slate-800 transition py-3 px-2 rounded-full hover:border-slate-800 flex gap-2 justify-center items-center">
            Learn More
            <ArrowRightAltIcon className="mt-1" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="h-[550px] w-[400px] relative shadow-lg p-4 flex flex-col justify-center items-center rounded-full bg-slate-800 text-white">
          <LocalHospitalRoundedIcon
            sx={{
              color: "red",
              fontSize: "64px",
              position: "absolute",
              top: "-32px",
              background: "white",
            }}
          />
          <br />
          <h1 className="font-bold text-2xl">Health Care Transport</h1>
          <br />
          <p className="text-mild text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, reprehenderit saepe laudantium delectus suscipit minus
            hic eaque iusto animi neque quidem ipsum sapiente repellendus modi
            libero cum soluta, aspernatur ratione. Perspiciatis aut, qui facilis
            ad obcaecati nemo modi? Aliquid beatae dicta ab ipsam sunt est, quis
            voluptas cupiditate cum, similique eius tempore rem ullam? Velit
            odio harum sequi nemo? Beatae?
          </p>
        </div>
        <div className="h-[450px] w-[300px] relative rounded-lg rounded-full shadow-lg p-4 flex flex-col justify-center items-center">
          <AgricultureRoundedIcon sx={{ position: "absolute", top: "-32px" }} />
          <br />
          <h1 className="font-bold text-2xl">Farming Support</h1>
          <br />
          <p className="text-mild text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            dicta molestiae veniam vel ducimus optio, magni obcaecati cupiditate
            iusto corporis? Dolorem optio eligendi ea quidem officiis
            praesentium deleniti laudantium eveniet. illo harum obcaecati
            molestias debitis quis iure optio dolorem? Sequi quos rem,
            reprehenderit amet porro sed a est iusto illum quasi itaque
            recusandae.amet porro sed a est iusto illum quasi itaque recusandae.
          </p>
        </div>
        <div className="h-[450px] w-[300px] relative rounded-lg shadow-lg p-4 flex flex-col justify-center items-center rounded-full">
          <LiveTvOutlinedIcon sx={{ position: "absolute", top: "-32px" }} />
          <br />
          <h1 className="font-bold text-2xl">Movie Production</h1>
          <br />
          <p className="text-mild text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos ipsa totam nemo incidunt. Deleniti, consectetur nihil
            voluptates, nostrum, quas tempora natus laudantium odio nisi vero
            exercitationem recusandae expedita fuga? Quas consequatur aperiam
            necessitatibus neque voluptas consequuntur, illo harum obcaecati
            molestias debitis quis iure optio dolorem? Sequi quos rem,
            reprehenderit amet porro sed a est iusto illum quasi itaque
            recusandae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
