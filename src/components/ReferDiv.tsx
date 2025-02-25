import { howRefer, howReferSm } from "../assets/assets";

function ReferDiv() {
  return <>
    <div className=" bg-blue-100 md:flex flex-col justify-center items-center py-8 hidden">
      <div className="text-black font-medium">How do i <span className="text-blue-600">Refer?</span></div>
      <img className="w-[80%] object-contain" src={howRefer} alt="" />
      <button className='btn bg-blue-500 rounded-md border-none shadow-none'>Refer Now</button>
    </div>
    <div className="bg-blue-100 md:hidden flex flex-col justify-center items-center text-black pt-10 pb-20">
      <div>
        How do i <span className="text-blue-600">Refer?</span>
      </div>
      <img src={howReferSm} alt="" />
      <button className="btn bg-blue-600 border-none">Refer Now</button>
    </div>
  </>;
}
export default ReferDiv;
