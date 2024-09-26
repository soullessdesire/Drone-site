import leader from "../../assets/images/leader.jpg";
import nd from "../../assets/images/2nd.jpg";
import rd from "../../assets/images/3rd.jpg";
import member from "../../assets/images/member.jpg";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";

const Team = () => {
  return (
    <div className="h-[1100px]">
      <br />
      <br />
      <h1 className="font-bold text-4xl w-full text-center">Our Team</h1>
      <br />
      <div className="h-[700px] w-full p-3 flex justify-around">
        <div className="relative picture-slide-right rounded-2xl">
          <img
            src={leader}
            alt=""
            className="h-full w-[600px] object-cover rounded-2xl"
          />
          <div className="absolute right-full w-full h-full top-0 backdrop-blur transition overflow-hidden">
            Team Leader His Name
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="relative rounded-2xl picture-slide-down overflow-hidden">
            <div className="absolute bottom-full w-full h-full backdrop-blur transition">
              Team Leader His Name
            </div>
            <img
              src={nd}
              alt=""
              className="h-[320px] w-[600px] object-cover rounded-2xl"
            />
          </div>
          <div className="relative rounded-2xl picture-slide-left overflow-hidden">
            <img
              src={rd}
              alt=""
              className="h-[320px] w-[600px] object-cover rounded-2xl"
            />
            <div className="absolute left-full w-full h-full top-0 backdrop-blur transition">
              Team Leader His Name
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[150px] w-full flex justify-evenly">
        <div className=" relative picture-slide-up overflow-hidden rounded-2xl">
          <img
            src={member}
            alt=""
            className="h-full w-[290px] object-cover rounded-2xl"
          />
          <div className="absolute top-full w-full h-full backdrop-blur transition">
            Team Leader His Name
          </div>
        </div>
        <div className="relative picture-slide-up overflow-hidden rounded-2xl">
          <img
            src={member1}
            alt=""
            className="h-full w-[290px] object-cover rounded-2xl"
          />
          <div className="absolute top-full w-full h-full backdrop-blur transition">
            Team Leader His Name
          </div>
        </div>
        <div className="relative overflow-hidden picture-slide-up rounded-2xl">
          <img
            src={member2}
            alt=""
            className="h-full w-[290px] object-cover rounded-2xl"
          />
          <div className="absolute top-full w-full h-full backdrop-blur transition">
            Team Leader His Name
          </div>
        </div>
        <div className="relative overflow-hidden picture-slide-up rounded-2xl">
          <img
            src={member2}
            alt=""
            className="h-full w-[290px] object-cover rounded-2xl"
          />
          <div className="absolute top-full w-full h-full backdrop-blur transition">
            Team Leader His Name
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
