import img from '../assets/fifth bank.png'
import mdlogo from '../assets/mdlogo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    return ( 
        <div className=''>
            <div className="h-[90px] w-full md:flex hidden justify-between">
                <div className='flex items-center h-full ml-16'>
                    <img src={img} alt="" />
                </div>
                <ul className='flex justify-end items-center gap-5 mr-20 font-[600]'>
                    <li className='cursor-pointer'>CUSTOMER SERVICE</li>
                    <li className='text-gray-200'> | </li>
                    <li className='cursor-pointer'>BRANCH & ATM LOCATOR</li>
                </ul>
            </div>
            <div className='md:hidden h-11 bg-[#1C2758] flex'>
            <span className=" text-white flex h-full items-center ml-5">
                    <div>
                        <FaBars size={20}/>
                        <p className=''>Home</p>
                    </div>
                </span>
                <div className='flex justify-center w-full'><img src={mdlogo} alt="" /></div>
            </div>
        </div>
     );
}
 
export default NavBar;