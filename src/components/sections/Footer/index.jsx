import React from 'react'
import brandImage from '../../../Images/brand-logo.jpg';
import appleLogo from '../../../Images/apple-logo.png';

const Footer = () => {
  return (
    <div className="w-full py-8 my-4 mx-auto flex flex-col gap-4 border-t-2">
      <div className="flex flex-col my-0 mx-auto">
        <div className="image-container">
          <img
            src={brandImage}
            alt="brand-logo"
            className="h-28 w-28 rounded-md  "
          />
        </div>
        <div className="text-3xl my-2 text-center text-cyan-600 font-semibold">
          ahead
        </div>
      </div>
      <div className="mb-4 mx-auto flex gap-20">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 border rounded-full bg-green-400" />
          <div className="font-semibold">Lorem ipsum, 111 dolor sit.</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 border rounded-full bg-green-400" />
          <div className="font-semibold">somehting@gmail.com</div>
        </div>
      </div>
      <div className="w-fit py-2 px-4 flex gap-4 bg-white border rounded-md m-auto">
        <div className="">
          <img src={appleLogo} alt="apple-logo" className="" />
        </div>
        <div className="flex flex-col">
          <div className="">Download on the</div>
          <div className="text-2xl font-semibold">App Store</div>
        </div>
      </div>
      <div className="m-auto">&copy; Ahead App, All Right Reserved</div>
    </div>
  );
}

export default Footer;
