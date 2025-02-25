import { LuChevronRight } from "react-icons/lu"
import { circle, headset } from "../assets/assets"

function Faq() {
    return (
        <div className="hidden md:flex flex-col justify-center items-center p-10 text-black w-full bg-white">
            <div className="w-[80%] h-[500px] flex flex-col items-center justify-between gap-5">

                <div className="flex flex-col items-center w-full h-[70%] min-h-fit">
                    <div className="font-semibold text-lg">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </div>
                    <div className="flex">
                        <div className="w-[30%] flex flex-col items-center py-8 gap-5">
                            <button className="btn w-[200px] bg-white text-blue-600 shadow-md border-gray-100">Eligibility</button>
                            <button className="btn w-[200px] bg-white border-gray-500 text-gray-500">How to Use?</button>
                            <button className="btn w-[200px] bg-white border-gray-500 text-gray-500">Terms & Conditions</button>
                        </div>
                        <div className="w-[70%] flex flex-col p-8 gap-5">
                            <div className="collapse collapse-arrow bg-white text-gray-600">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-sm text-blue-600">Do I need to have prior Product Management and Project Management experience to enroll in the program?</div>
                                <div className="collapse-content text-black text-xs">
                                    <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                                        suitable for individuals from any field of work.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-white text-gray-600">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-sm text-black">What is the minimum system configuration required?</div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full hidden md:block relative rounded-md h-[180px] bg-blue-600">
                    <img className="absolute bottom-0 z-0" src={circle} alt="" />
                    <div className="flex w-full h-full px-10 text-white justify-between items-center">
                        <div className="z-5 w-[70%] flex gap-5">
                            <img className="h-12" src={headset} alt="" />
                            <div className="flex flex-col">
                                <div className="font-semibold">Want to delve deeper into the program?</div>
                                <div className="text-xs font-[1px]">Share your details to receive expert insights from our program team!</div>
                            </div>
                        </div>
                        <div className="z-5 justify-items-end text-white">
                            <button className="btn bg-white text-blue-600 border-none">Get in touch 
                                <LuChevronRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq