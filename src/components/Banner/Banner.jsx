import image from "../../assets/Images/Rectangle 1.png";
const Banner = () => {
  return (
    <div
      className="bg-cover h-[603px] rounded-xl my-8 w-full mx-auto text-center place-content-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="text-[52px] font-bold text-white">
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p className="text-[18px] text-white my-8">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding <br /> problems to become an
        exceptionally well world-class Programmer.
      </p>
      <div>
        <button className="bg-[#0BE58A] border-white py-[20px] px-[30px] rounded-full text-[#150B2B] font-semibold text-[20px]">
          Explore Now
        </button>
        <button className="ml-7 bg-transparent  border-2 text-white  py-[20px] px-[30px] rounded-full  font-semibold text-[20px]">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
