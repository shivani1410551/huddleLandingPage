import Features from "./Features";
import CallToAction from "./CallToAction";
const Hero = () => {
  return (
    <main className="">
      <section className="introduction mx-auto p-10">
        <div className="h-screen xs:mt-6 sm:m-6  grid xs:items-center sm:items-center md:mt-12 ">
          <div className="hero-text-box p-2 xs:space-y-4 sm:space-y-4 xs:text-center sm:text-center ">
            <h1 className="hero-heading font-bold font-secondary xs:text-2xl sm:text-2xl ">
              Build The Community Your Fans Will Love
            </h1>
            <p className="hero-text text-gray-700 font-primary font-medium text-sm pb-4 md:max-w-[500px] mx-auto ">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <a href="#" className="btn text-VeryPaleBlue">
              {" "}
              Get Started For Free
            </a>
          </div>
          <div className="hero-image-box">
            <img
              src={"src/assets/images/screen-mockups.svg"}
              alt="screen mockup hero image"
              className="md:w-[30rem] md:mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto p-6">
        <ul className="flex sm:flex-col xs:flex-col xs:items-center  xs:gap-6 sm:gap-6 md:flex-row  md:justify-evenly">
          <li>
            <img
              src={"src/assets/images/icon-communities.svg"}
              alt="communities"
              className="h-5 mb-2 inline-block"
            />
            <h2 className="font-secondary font-bold text-5xl pb-2">1.4k+</h2>
            <p className="text-gray-400 xs:text-sm text-center">
              Communities Formed
            </p>
          </li>
          <li>
            <img
              src={"src/assets/images/icon-messages.svg"}
              alt="communities"
              className="h-5 mb-2 inline-block"
            />
            <h2 className="font-secondary font-bold text-5xl pb-2">2.7m+</h2>
            <p className="text-gray-400 xs:text-sm text-center">
              Messages Sent
            </p>
          </li>
        </ul>
      </section>
      <Features />
      <CallToAction />
    </main>
  );
};

export default Hero;
