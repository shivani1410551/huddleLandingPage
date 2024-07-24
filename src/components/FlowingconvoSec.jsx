import React from "react";

const FlowingconvoSec = () => {
  return (
    <section className="features-section ">
      <div className="flowingConvo ">
        <div className="bg-image-bottom">
          <img
            src={"src/assets/images/bg-section-bottom-mobile-1.svg"}
            alt="bg-mobile-bottom"
            className="sm:hidden mx-auto px-0  bg-no-repeat xs:block"
          />
          <img
            src={"src/assets/images/bg-section-bottom-desktop-2.svg"}
            alt="bg-desktop-2"
            className="xs:hidden sm:block  bg-no-repeat"
          />
        </div>
        <div className="featuresBox2 my-8 ">
          {" "}
          <div className="mx-auto p-10 grid sm:grid-cols-2 justify-center items-center">
            <div className="img-box">
              <img
                src={"src/assets/images/illustration-flowing-conversation.svg"}
                alt="grow-together-illustration"
                className="xs:h-[12rem] sm:h-[12rem]  mx-auto  bg-no-repeat "
              />
            </div>
            <div className="text-box text-center py-12 sm:text-justify">
              <h2 className="font-primary font-bold pb-3 xs:text-lg sm:text-lg">
                Flowing Conversation
              </h2>
              <p className="font-secondary sm:text-sm xs:text-xs md:w-[500px]">
                You wouldn't paginate a conversation in real life,so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowingconvoSec;
