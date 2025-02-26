import { useState } from "react";
import { mainImg } from "../assets/assets";
import Modal from "./Modal";

function Main() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-fit pb-5 bg-white text-black flex flex-col items-center w-full ">
      <div className="flex items-center md:w-[50%] max-w-[700px] mt-4 md:mt-8 md:mb-5 text-gray-700 justify-between px-10 md:px-15 bg-green-100 border-none rounded-3xl h-12 md:gap-0 gap-4">
        <div className="text-blue-600 underline decoration-blue-600">Refer</div>
        <div>Benefit</div>
        <div>FAQs</div>
        <div>Support</div>
      </div>
      <div className="relative w-full md:w-[80%] h-[70%] lg:max-w-fit">
        <div className="hidden md:flex">
          <div className="absolute flex flex-col items-baseline gap-8 w-full h-[55%] top-[15%] left-[10%]">
            <div>
              <h1 className="text-left text-[40px] font-bold">Let’s Learn</h1>
              <h1 className="text-left text-[40px] font-bold">& Earn</h1>
            </div>
            <div className="text-center w-[50%]">
              <div className="text-left">
                <div>Get a chance to win up-to</div>
                <div>up-to <span className="text-blue-600 font-semibold text-2xl">Rs. 15000</span></div>
              </div>

            </div>
            <button onClick={() => setOpen(true)} className="btn bg-blue-600 text-white border-none">Refer Now</button>
          </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <img className="w-[100%] h-[100%]" src={mainImg} alt="" />
        </div>

        {/* <div className="md:hidden relative w-full h-full">
        <div className="absolute top-[22%] right-[13%]">
          <h1 className="w-fit text-center text-[35px] font-bold">Let’s Learn & Earn</h1>
          <div className="text-center">
            <div>
            Get a chance to win up-to 
            </div>
            <div className="text-blue-600 font-semibold text-2xl">
              Rs. 15,000
            </div>
          </div>
        </div>
          <button className="md:hidden absolute btn bg-blue-600 border-none bottom-[28%] left-[40%]">Refer Now</button>
        <img className="w-[100%] h-[100%] md:hidden" src={mainBgSm} alt="" />
        </div> */}

        <div className="w-full flex mt-2 items-center justify-center">
          <div className="mainImg md:hidden w-[95%] h-[280px] flex items-center justify-center rounded-md">
            <div className="flex flex-col items-center justify-center rounded-md">
              <h1 className="w-fit text-center text-[35px] font-bold">Let’s Learn & Earn</h1>
              <div className="text-center">
                <div>
                  Get a chance to win up-to
                </div>
                <div className="text-blue-600 font-semibold text-2xl">
                  Rs. 15,000
                </div>
              </div>
              <button onClick={() => setOpen(true)} className="md:hidden btn bg-blue-600 border-none mt-8">Refer Now</button>

            </div>
          </div>

        </div>
      </div>
            <Modal open={open} setOpen={setOpen} />
    </div>
  );
}
export default Main;
