const CallToAction = () => {
  return (
    <section>
      <div className="bg-image-bottom">
        <img
          src={"./assets/images/bg-section-bottom-mobile-2.svg"}
          alt="bg-mobile-2-bottom"
          className="xs:block sm:hidden mx-auto px-0  bg-no-repeat"
        />
        <img
          src="./assets/images/bg-section-bottom-desktop-2.svg"
          alt="bg-desktop-2"
          className="xs:hidden bg-no-repeat sm:block"
        />
      </div>
      <div
        className="cta-text  mx-auto p-10  sm:max-w-[500px] 
      xs:my-[8rem] "
      >
        <h3
          className="font-bold xs:text-xl 
        sm:text-xl md:text-[1.3rem]
        px-4 mb-6  text-center "
        >
          Ready to Build Your Community?
        </h3>
        <div className="btn-wrap grid">
          <a href="#" className="btn text-VeryPaleBlue mx-auto">
            Get Started For Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
