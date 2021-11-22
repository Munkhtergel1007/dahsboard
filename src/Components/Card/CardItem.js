import { GrDocument } from 'react-icons/gr'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import '../../static/style/includes/style.css'
const CardItem = props => {
    return <div className="w-full flex justify-evenly items-center mb-6 border-b border-gray-200 pb-6">
        {props.icon}
        <div>
            <p>Hariltsah/Irged/Tsalin/MNT</p>
            <p className="text-sm text-gray-700">{props.number}</p>
        </div>
        <div>
            <p>Huleegdej bui dun</p>
            <p className="text-sm text-gray-700">{props.huleegdejDun}</p>
        </div>
        <div>
            <p>Blomjit uldegdel</p>
            <p className="text-sm text-gray-700">{props.uldegdelDun}</p>
        </div>
        <div className="shadow-lg rounded-2xl p-2">
            <div className="items-center text-xs flex justify-center">
                <GrDocument style={{ color: '#d1854b' }} />

            </div>
            <p >Huulga</p>
        </div>
        <div className="shadow-lg rounded-2xl p-2">
            <div className="items-center text-xs flex justify-center">
                <IoEllipsisHorizontal />

            </div>
            <p >Delgerengui</p>
        </div>
        <div className="shadow-lg rounded-2xl p-2">
            <div className="items-center text-md cardIcon flex justify-center">
                < CgArrowsExchangeAlt />
            </div>
            <p>Guilgee</p>
        </div>
    </div>

}

export default CardItem