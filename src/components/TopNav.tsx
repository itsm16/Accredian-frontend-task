import { LuChevronRight, LuMenu } from 'react-icons/lu'
import { logo } from '../assets/assets'

function TopNav() {


  return (
    <>
      <div className="bg-blue-200 text-black gap-3 flex justify-center h-12 md:px-0 px-5 md:h-7 text-[12px] items-center">
        Navigate your ideal career path with tailored expert advice
        <button className="border-none text-blue-600">Contact Expert</button>
      </div>
      <div className='w-ful bg-white flex justify-center items-center'>
      <div className='flex items-center bg-white justify-between px-2 md:px-15 w-[90%] text-black h-[70px] md:h-[55px]'>
        <div className='flex gap-3 items-center'> 
          <img className='md:h-9 h-8' src={logo} alt="" />
          <button className='md:flex hidden btn rounded-md shadow-none justify-center items-center bg-blue-500 border-none'>Courses
            <LuChevronRight size={22}/>
          </button>
        </div>
        <div className='md:flex items-center gap-7 hidden'>
          <div className='flex gap-3 text-sm'>
            <a className='cursor-pointer'>Refer & Earn</a>
            <a className='cursor-pointer'>Resources</a>
            <a className='cursor-pointer'>About Us</a>
          </div>
          <div className='flex gap-3'>
            <button className='btn bg-gray-200 rounded-md text-black border-none shadow-none'>Login</button>
            <button className='btn bg-blue-500 rounded-md border-none shadow-none'>Try for free</button>
          </div>
        </div>
        <div className='flex md:hidden items-center gap-5'>
          <div className='flex btn bg-blue-600 border-none'>
            Courses
            <LuChevronRight size={18}/>
          </div>
          <LuMenu/>
        </div>
      </div>
      </div>
    </>
  )
}
export default TopNav