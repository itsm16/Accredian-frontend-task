import { LuChevronRight } from "react-icons/lu";
import { hat } from "../assets/assets";

function Details() {

  const courses = [
    {
      id: 1, title: "Professional Certificate Program in Product Management",
      referrerBonus: 7000, refereeBonus: 9000
    },
    {
      id: 2, title: "PG Certificate Program in Strategic Product Management",
      referrerBonus: 7000, refereeBonus: 9000
    },
    {
      id: 3, title: "Executive Program in Data Driven Product Management",
      referrerBonus: 7000, refereeBonus: 9000
    },
    {
      id: 4, title: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: 7000, refereeBonus: 9000
    },
    {
      id: 5, title: "Executive Program in Product Management",
      referrerBonus: 7000, refereeBonus: 9000
    },
    {
      id: 6, title: "Advanced Certification in Product Management",
      referrerBonus: 7000, refereeBonus: 9000
    },
    {
      id: 7, title: "Executive Program in Product Management and Project Management",
      referrerBonus: 7000, refereeBonus: 9000
    }
  ]

  return (
    <div className="bg-white md:flex flex-col justify-center items-center py-8 gap-3 hidden">
      <div className="text-black font-medium">
        How do i <span className="text-blue-600">Refer?</span>
      </div>
      <div className="w-[80%] h-[500px] gap-3 text-black flex flex-col items-center justify-center">
        <div className="w-[80%] flex justify-end gap-2">
          <div>Enrolled</div>
          <input
            type="checkbox"
            className="toggle toggle-sm bg-black [--tglbg:pink]"
            defaultChecked />
        </div>
        <div className="h-[85%] w-[80%] flex gap-5">
          <div className="h-full shadow-xl w-[30%] rounded-md text-gray-700 font-normal">
            <div className="bg-blue-600 rounded-t-md text-white h-10 flex items-center px-2">
              All programs <LuChevronRight className="mt-1" />
            </div>
            <div className="flex flex-col h-[80%] justify-evenly px-2 divide-y divide-gray-300">
              <div className="py-2">Product Management</div>
              <div className="py-2">Strategy & Leadership</div>
              <div className="py-2">Business Management</div>
              <div className="py-2">Fintech</div>
              <div className="py-2">Senior Management</div>
              <div className="py-2">Data Science</div>
              <div className="py-2">Digital Transformation</div>
              <div className="py-2">Business Analytics</div>
            </div>
          </div>

          <div className="h-full w-[70%] shadow-lg flex pb-1 border-gray-200">
            <div className="w-[60%]">
              <div className="text-[#1350A0] h-full">
                <div className="bg-[#AFCEF7] rounded-t-md rounded-r-none font-semibold h-10 flex items-center px-2">
                  Programs
                </div>
                <div className="flex flex-col justify-baseline p-2 gap-1 w-full h-[90%]">
                  {
                    courses.map(ele =>
                      <div key={ele.id} className="flex w-full text-sm gap-2">
                        <img src={hat} className="h-[17px] pt-1" alt="" />
                        <div>{ele.title}</div>
                      </div>)
                  }
                </div>
              </div>
            </div>
            <div className="w-[20%] ">
              <div className="bg-[#AFCEF7] text-[#1350A0] font-semibold h-10 text-xs justify-center flex items-center">
                Referrer Bonus
              </div>
              <div className="flex flex-col items-center text-center justify-evenly gap-3 p-2 w-full h-[80%] text-black">
                {
                  courses.map(ele =>
                    <div key={ele.id} className="flex w-full h-full text-sm items-start">
                      <div className="w-full h-full">₹{ele.referrerBonus}</div>
                    </div>

                  )
                }
              </div>
            </div>
            <div className="w-[20%]">
              <div className="bg-[#AFCEF7] text-[#1350A0] rounded-t-md rounded-l-none font-semibold h-10 text-xs justify-center flex items-center">
                Referee Bonus
              </div>
              <div className="flex flex-col items-center text-center justify-evenly gap-3 p-2 w-full h-[80%] text-black">
                {
                  courses.map(ele =>
                    <div key={ele.id} className="flex w-full h-full text-sm items-start">
                      <div className="w-full h-full">₹{ele.refereeBonus}</div>
                    </div>

                  )
                }
              </div></div>
          </div>
        </div>
        <div className="w-[80%] flex justify-end">k</div>
      </div>
      <div className="text-black">
      <button className='btn bg-blue-500 rounded-md border-none shadow-none'>Refer Now</button>
      </div>
    </div>
  );
}
export default Details;
