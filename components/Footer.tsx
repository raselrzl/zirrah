import {
  FaLocationArrow,
  FaLocationDot,
  FaMapLocation,
  FaPhone,
} from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { TbEyeShare } from "react-icons/tb";
import { IoMail, IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full pb-2 mb-[100px]" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate <span className="text-purple">your</span> digital
          presence to new heights?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us now and let&apos;s discuss how we can help you achieve
          your goals.
        </p>
        <a href="mailto:contact@zirrah.online">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center sm:flex-row ">
        <div className="mt-12 ml-10">
          {/* Phone number clickable to dial */}
          <h1 className="flex flex-row items-center">
            <FaPhone className="mr-4" />
            <a href="tel:+46738772856">+46 738 772856</a>
          </h1>

          {/* Location clickable to open in map */}
          <h1 className="flex flex-row items-center">
            <FaLocationDot className="mr-4" />
            <a
              href="https://www.google.com/maps?q=Luntgatan+23,+60219,+Norrköping,+Sweden"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luntgatan 23, 60219, Norrköping, Sweden
            </a>
          </h1>

          {/* Email clickable to open email client */}
          <h1 className="flex flex-row items-center">
            <IoMail className="mr-4" />
            <a href="mailto:contact@zirrah.online">contact@zirrah.online</a>
          </h1>
        </div>

        <div className="flex items-center md:gap-3 gap-6 mt-10">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.social} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <p className="md:text-base flex gap-4 text-sm md:font-normal font-light ">
            Copyright © 2017 ZIRRAH{" "}
            <a
              href="https://cart.hostinger.com/pay/37fc992f-3d97-41d3-9516-28e4d3c8e48f?_ga=GA1.3.942352702.1711283207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbEyeShare className="text-xl" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
