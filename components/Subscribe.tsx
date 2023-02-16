import { URL } from "@/config";
import React from "react";

const Subscribe = () => {
  return (
    <>
      <p className="copy-big-white mb-6 md:mb-8">
        <span className="copy-big-bold-white">
          Learn how to use the internet to work less and earn more.
        </span>{" "}
        Sign up for a free newsletter and get tips to launch, grow,
        and monetize your business online.
      </p>
      <form
        action="https://formsubmit.co/2e5f357c6e7e7fd9f688e34b0ae1f05f"
        method="POST"
        className="flex-row"
      >
        <input
          type="email"
          name="email"
          required
          className="outline-none bg-transparent p-2 border-white border-b mr-6 max-w-[300px]"
          placeholder="Your email"
        />
        <input type="hidden" name="_next" value={`${URL}/thanks`} />
        <input
          type="hidden"
          name="_subject"
          value="New submission for juanbri.dev!"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value={
            "Welcome, my friend!\n" +
            "Thank you for your confidence in joining this list.\n" +
            "Newsletters can get crazy and clog up your inbox. I'm not a fan of that, so here's a bit of what to expect in this email.\n" +
            "I usually send 1 newsletter per week - It is called The Juanbri Letter.\n" +
            "It is where I let everything out and give you a fresh (hopefully mind-blowing) perspective on entrepreneurship, and human potential.\n" +
            "These emails are 100% dedicated to helping you achieve clarity in your life and business. If it does not bring value to you, I will not email it to you.\n" +
            "However, value is subjective, so you may not find interest in some of the emails I send, of course.\n" +
            "If that doesn't sound good to you OR if you ever want to unsubscribe from my list, just reply to this email at any time telling me you wish to unsubscribe.(No hard feelings if you do :)).\n" +
            "You can read all previous Juanbri Letters on https://www.juanbri.dev/discover. These build off of each other, so reading the latest letter will prepare you and set the foundation for the next.\n" +
            "If you have any further questions just let me know.\n" +
            "I'm glad to have you here. Have an incredible week, my friend.\n" +
            " — Juan Pablo Briceno"
          }
        />
        <button
          type="submit"
          className="mt-4 md:mt-0 bg-blue py-2 rounded-[2px] px-8 hover:text-second hover:bg-second hover:scale-110 transform-gpu ease-in-out duration-300"
        >
          Read For Free
        </button>
      </form>
    </>
  );
};

export default Subscribe;
