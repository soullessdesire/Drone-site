import FooterEnder from "./FooterEnder";
import { Link } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

const Footer = () => {
  return (
    <footer className="mt-[100px] relative h-[400px]">
      <div className="absolute h-full w-full bg-slate-800 z-10 opacity-60"></div>
      <div className="absolute h-full w-full opacity-60 z-20">
        <img src="" alt="" />
      </div>
      <div className="absolute flex justify-center items-center gap-8 z-30 h-[360px] w-full flex-wrap">
        <div className="w-[410px] h-[300px] p-3">
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius odio,
            quas fuga aliquid impedit, vitae accusamus, eveniet necessitatibus
            quo earum temporibus nostrum deleniti ullam adipisci beatae repellat
            praesentium doloremque voluptatum? Et tenetur iure rem voluptatibus
          </p>
          <br />
          <div className="flex gap-4">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </div>
        <div className="w-[300px] border-x p-2 h-[300px] border-slate-800 sm:border-none">
          <h4 className="font-bold text-xl">Navigation Links</h4>
          <br />
          <div className="flex flex-col ml-4 gap-4">
            <Link className="hover:text-white">Home</Link>
            <Link className="hover:text-white">About</Link>
            <Link className="hover:text-white">Contacts</Link>
            <Link className="hover:text-white">Services</Link>
          </div>
        </div>
        <div className="w-[300px] p-2 h-[300px]">
          <h4 className="font-bold text-xl">Work Hours</h4>
          <br />
          <span>8:00am - 10:00pm </span>
          <br />
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, adipisci aperiam quibusdam sed corporis, vel enim porro
          </p>
          <br />
          <button className="p-2 flex justify-center items-center bg-slate-800 text-white hover:bg-slate-800 hover:bg-opacity-70 transition gap-2">
            <PhoneInTalkIcon />
            Call Us
            <ArrowRightAlt />
          </button>
        </div>
      </div>
      <FooterEnder
        className={
          "absolute bottom-0 w-full h-[40px] bg-slate-800 flex justify-center items-center text-white z-40"
        }
        style={{ bottom: 0 }}
      />
    </footer>
  );
};

export default Footer;
