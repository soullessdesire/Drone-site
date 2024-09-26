import { ArrowRightAlt } from "@mui/icons-material";
import cameraDrone from "../../assets/images/cameraDrone.jpg";
import farmingDrone from "../../assets/images/farmingDrone.jpg";
import handDrone from "../../assets/images/handDrone.jpg";

const Blog = () => {
  return (
    <section className="w-full h-[700px]">
      <h1 className="w-full text-center mt-10 font-bold text-4xl">
        Blog & Current Events
      </h1>
      <br />
      <div className="flex gap-8 justify-center items-center flex-wrap">
        <div className="w-[350px] h-[550px]">
          <div className="h-[300px]">
            <img
              src={cameraDrone}
              alt=""
              className="h-full w-full object-cover"
            />
            <div>
              <span>26</span>
              <span>Jan</span>
            </div>
          </div>
          <br />
          <h5 className="font-bold text-2xl">Movies</h5>
          <br />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque, velit ratione exercitationem vel, quisquam ea iusto
            similique laborum suscipit dolor culpa sit maiores, voluptatem cum
            aut blanditiis. Accusamus, id!
          </p>
          <br />
          <button className="bg-slate-800 text-white hover:bg-white hover:text-slate-800 transition py-3 px-2 rounded-full hover:border-slate-800 flex gap-2 justify-center items-center">
            Learn More
            <ArrowRightAlt className="mt-1" />
          </button>
        </div>
        <div className="w-[350px] h-[550px]">
          <div className="h-[300px]">
            <div>
              <span>27</span>
              <span>Jan</span>
            </div>
            <img
              src={farmingDrone}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <br />
          <h5 className="font-bold text-2xl">Farming Sector</h5>
          <br />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque, velit ratione exercitationem vel, quisquam ea iusto
            similique laborum suscipit dolor culpa sit maiores, voluptatem cum
            aut blanditiis. Accusamus, id!
          </p>
          <br />
          <button className="bg-slate-800 text-white hover:bg-white hover:text-slate-800 transition py-3 px-2 rounded-full hover:border-slate-800 flex gap-2 justify-center items-center">
            Learn More
            <ArrowRightAlt className="mt-1" />
          </button>
        </div>
        <div className="w-[350px] h-[550px]">
          <div className="h-[300px]">
            <img
              src={handDrone}
              alt=""
              className="h-full w-full object-cover"
            />
            {/* <div>
              <span>28</span>
              <span>Jan</span>
            </div> */}
          </div>
          <br />
          <h5 className="font-bold text-2xl">Our First Hand Sized Drones</h5>
          <br />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloremque, velit ratione exercitationem vel, quisquam ea iusto
            similique laborum suscipit dolor culpa sit maiores, voluptatem cum
            aut blanditiis. Accusamus, id!
          </p>
          <br />
          <button className="bg-slate-800 text-white hover:bg-white hover:text-slate-800 transition py-3 px-2 rounded-full hover:border-slate-800 flex gap-2 justify-center items-center">
            Learn More
            <ArrowRightAlt className="mt-1" />
          </button>
        </div>
      </div>
      <div className="w-full h-[300px]">
        <div>
          {/* <img src={} alt="" /> */}
          <ion-icon name="logo-youtube"></ion-icon>
        </div>
        <div>Watch our first launch in Kenya</div>
      </div>
    </section>
  );
};

export default Blog;
