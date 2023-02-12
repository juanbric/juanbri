import MetaTag from "@/components/MetaTag";
import Spacer from "@/components/Spacer";
import { URL } from "@/config";
import Link from "next/link";
import React from "react";

const thanks = () => {
  return (
    <div className="lg:flex h-screen lg:justify-center items-center">
      <MetaTag
        title={"Thank You For Your Confidence, My Friend"}
        description={"You've Successfully Joined The Juanbri Letter!"}
        url={URL + "/thanks"}
        image={"https://i.ibb.co/C8cvD7z/Group-2.png"}
      />
      <div className="px-4 lg:px-8 w-auto lg:w-[800px]">
        <h2 className="huge-title text-center">
          Thank You For Your Confidence, My Friend.
        </h2>
        <Spacer size={24} />
        <h2 className="sub-title text-center">
          You've Successfully Joined The Juanbri Letter.
        </h2>
        <Spacer size={24} />
        <p className="text-center">
          Check your email for a warm welcome, what to expect, and a few tips.
        </p>
        <p className="italic text-center">
          (The email is titled "Form Submit")
        </p>
        <Spacer size={54} />
        <h2 className="copy-big text-center">
          Want to read previous editions of The Juanbri while you wait?
        </h2>
        <Spacer size={12} />
        <p className="sub-sub-title text-center">Check it out on the blog.</p>
        <Spacer size={34} />
        <Link
          href={"/discover"}
          className="bg-blue flex items-center justify-center py-3 rounded-[2px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
        >
          Explore the blog
        </Link>
      </div>
    </div>
  );
};

export default thanks;
