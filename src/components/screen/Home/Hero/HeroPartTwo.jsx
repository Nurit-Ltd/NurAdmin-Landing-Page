import heroOne from "../../../../assets/images/home/adminLeft.webp";
import heroTwo from "../../../../assets/images/home/adminMiddle.webp";
import heroThree from "../../../../assets/images/home/heroRight.webp";
import BlBoomBigSvg from "../../../../components/common/BlBoomBigSvg";
import BlBoomSvg from "../../../../components/common/BlBoomSvg";
import BlBoomTwoSvg from "../../../../components/common/BlBoomTwoSvg";

const HeroPartTwo = () => {
  return (
    <>
      <div className="mx-auto mt-15 flex max-w-[70.25rem] items-end justify-center px-4 sm:px-8 xl:px-0">
        {/* left image */}

        <div
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          className="animate_bottom mr-[-12.5rem] aspect-[243/146] w-full max-w-[486px]"
        >
          <img
            src={heroOne}
            alt="hero1"
            className="w-full h-full object-fill rounded-tl-xl"
          />
        </div>

        {/* middle image */}

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="animate_bottom z-[999] aspect-[183/112] w-full max-w-[549px]"
        >
          <img
            src={heroTwo}
            alt="hero2"
            className="w-full h-full object-fill rounded-tl-xl rounded-tr-xl"
          />
        </div>

        {/* right image */}

        <div
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          className="animate_bottom relative ml-[-12.5rem] aspect-[489/295] w-full max-w-[489px]"
        >
          <img
            src={heroThree}
            alt="hero3"
            className="w-full h-full object-fill rounded-tr-xl"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <span>
          <BlBoomSvg />
        </span>
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <span>
          <BlBoomTwoSvg />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 -z-10">
        <span>
          <BlBoomBigSvg />
        </span>
      </div>
    </>
  );
};

export default HeroPartTwo;
