const YourUserSec = () => {
  return (
    <section className="features-section-3">
      <div className="Your user ">
        <div className="bg-image-bottom">
          <img
            src={"src/assets/images/bg-section-top-mobile-2.svg"}
            alt="bg-mobile-2-bottom"
            className="xs:block sm:hidden mx-auto px-0  bg-no-repeat"
          />
          <img
            src={"src/assets/images/bg-section-top-desktop-2.svg"}
            alt="bg-desktop-2"
            className="xs:hidden  sm:block  bg-no-repeat"
          />
        </div>
        <div className="featuresBox1 bg-VeryPaleBlue">
          {" "}
          <div className="mx-auto p-10 sm:flex sm:flex-row-reverse">
            <div className="img-box sm:w-1/2">
              <img
                src={"src/assets/images/illustration-your-users.svg"}
                alt="you-users-illustration"
                className="xs:h-[12rem] sm:h-[12rem]  mx-auto"
              />
            </div>
            <div
              className="text-box xs:text-center py-12 sm:w-1/2
            sm:text-center md:text-justify
            "
            >
              <h2 className="font-primary font-bold pb-3 xs:text-lg sm:text-lg ">
                Your Users
              </h2>
              <p className="font-secondary sm:text-sm xs:text-xs md:w-[500px]">
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your
                app,your users can start chatting immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourUserSec;
