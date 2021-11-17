import logo from '../static/images/Bank-Transparent.png'
import { FiEye } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsPower } from 'react-icons/bs'
const Header = props => {
    const { fullname } = props;
    return <header className="w-full bg-white x-30 py-5 fixed top-0 left-0 flex justify-between shadow-sm items-center">
        <div className="pl-4 flex items-center gap-3">
            <img className="w-8" src={logo} />
            <h1 className="font-bold uppercase">
                Home Back
            </h1>
        </div>
        <div className="pr-4 flex items-center gap-10">
            <div className="flex items-center gap-3">
                <p className="text-sm text-gray-700">Холболт салах  : </p>
                <p className="text-red-500">20:34</p>
            </div>
            <div className="border rounded-full shadow-inner p-2 border-white hover:bg-green-500 hover:text-white duration-300">
                <FiEye />
            </div>
            <div className="border rounded-full shadow-inner p-2 border-white hover:bg-green-500 hover:text-white duration-300">
                <BiBell />
            </div>
            <div className="border rounded-full shadow-inner p-2 border-white hover:bg-green-500 hover:text-white duration-300">
                <AiOutlineUser />
            </div>
            <p className="uppercase">
                ABCDEFG
            </p>
            <div className="border rounded-full shadow-inner p-2 border-white hover:bg-red-500 hover:text-white duration-300">
                <BsPower />
            </div>
        </div>
    </header>
}

export default Header;