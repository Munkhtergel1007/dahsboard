import { MdHome } from 'react-icons/md'
import { AiFillWallet } from 'react-icons/ai'
import { FaExchangeAlt } from 'react-icons/fa'
import { AiFillCreditCard } from 'react-icons/ai'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'

const Sidebar = props => {
    return <div style={{ paddingTop: '65px' }} className="w-56 h-screen border-gray-100 border-r fixed top-0 left-0">
        <div className="flex flex-col justify-center items-center">
            <button className="border w-48 h-8 mt-6 rounded-md flex items-center border-transparent gap-4 hover:bg-green-400 hover:text-white duration-300 cursor-pointer p-2">
                <MdHome className="mr-2 text-green-600" />
                <p className="font-bold ">Эхлэл</p>
            </button>
            <button className="border w-48 h-8 mt-3 rounded-md border-transparent gap-3 items-center flex hover:bg-green-400 hover:text-white duration-300 cursor-pointer p-2">
                <AiFillWallet className="mr-2 text-green-600" />
                <p className="font-bold ">Данс</p>
            </button>
            <button className="border w-48 h-8 mt-3 rounded-md border-transparent gap-3 items-center flex hover:bg-green-400 hover:text-white duration-300 cursor-pointer p-2">
                <FaExchangeAlt className="mr-2 text-green-600" />
                <p className="font-bold ">Гүйлгээ</p>
            </button>
            <button className="border w-48 h-8 mt-3 rounded-md border-transparent gap-3 items-center flex hover:bg-green-400 hover:text-white duration-300 cursor-pointer p-2">
                <AiFillCreditCard className="mr-2 text-green-600" />
                <p className="font-bold ">Карт</p>
            </button>
            <button className="border w-48 h-8 mt-3 rounded-md border-transparent gap-3 items-center flex hover:bg-green-400 hover:text-white duration-300 cursor-pointer p-2">
                <GiReceiveMoney className="mr-2 text-green-600" />
                <p className="font-bold ">Зээл</p>
            </button>
            <button className="border w-48 h-8 mt-3 rounded-md border-transparent gap-3 items-center flex hover:bg-green-400 hover:text-white duration-300 cursor-pointer p-2">
                <FaMoneyBillAlt className="mr-2 text-green-600" />
                <p className="font-bold ">Төлбөр</p>
            </button>
            <button className="border w-48 h-8 mt-3 rounded-md border-transparent gap-3 items-center flex hover:bg-green-400 hover:text-white duration-300 cursor-pointer p-2">
                <RiCustomerService2Fill className="mr-2 text-green-600" />
                <p className="font-bold ">Үйлчилгээ</p>
            </button>

        </div>
    </div>
}

export default Sidebar;