import React from "react";

const GrowTogethersec = () => {
  return (
    <section className="features-section ">
      <div className="growTogether ">
        <div className="bg-image-top ">
          <img
            src={"src/assets/images/bg-section-top-mobile-1.svg"}
            alt="mobile-top-image"
            className="
            xm:block
            sm:hidden mx-auto px-0  bg-no-repeat"
          />

          <img
            src={"src/assets/images/bg-section-top-desktop-1.svg"}
            alt="desktop-top-image"
            className="xs:hidden  sm:block  bg-no-repeat"
          />
        </div>
        <div className="featuresBox1 bg-VeryPaleBlue ">
          {" "}
          <div className="mx-auto p-10 sm:flex  sm:flex-row-reverse">
            <div className="img-wrapper sm:w-1/2">
              <img
                src={"src/assets/images/illustration-grow-together.svg"}
                alt="grow-together-illustration"
                className="xs:h-[12rem] sm:h-[12rem]  mx-auto sm:col-start-2  "
              />
            </div>

            <div
              className="text-box xs:text-center sm:text-center
            md:text-justify
             py-12 sm:w-1/2 "
            >
              <h2 className="font-primary font-bold pb-3 xs:text-lg sm:text-lg">
                Grow Together
              </h2>
              <p className="font-secondary sm:text-sm xs:text-xs md:w-[500px]">
                Generate meaningful discussion with your audience and build a
                strong loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowTogethersec;
