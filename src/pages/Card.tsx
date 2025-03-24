import Background from "./../assets/svg/Card/gradient.svg";
import Me from "./../assets/svg/Card/me.svg";
import AnimatedText from "../components/AnimatedText/AnimatedText";
const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EEEEEE]">
      <div className="relative flex items-center justify-center w-5/6 rounded-t-3xl p-6 text-black font-semibold overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-[conic-gradient(white_0deg_10deg,green_80deg_120deg,white_130deg_140deg,pink_200deg_240deg,white_250deg_260deg,blue_300deg_360deg)] bg-cover bg-center"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 text-center">
          {/* Avatar */}
          <div className="bg-white rounded-xl ">
            <div className="w-36 h-36 flex items-end justify-center">
              <img src={Me} alt="Me" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">Geevarghese Regi</div>
            <div>
              <AnimatedText />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-5/6">OTHER STUFF</div>
    </div>
  );
};

export default Card;
