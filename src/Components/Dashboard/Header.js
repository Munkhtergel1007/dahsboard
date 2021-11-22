import logo from '../../static/images/Logo-mn.389dad9f.svg'
import Button from '../Home/button'
import { FiEye } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsPower } from 'react-icons/bs'
const Header = props => {
    return <header className="w-full bg-white fixed top-0 left-0 flex justify-between border-b items-center" style={{height: "56px"}}>
        <div className="pl-8 flex items-center">
            <img src={logo} /> 
        </div>
        <div className="flex items-center pr-8">
            <div className="flex items-center">
            <p className="holbolt">Холболт салах:</p>
            <p className="clock">8:50</p>
            </div>
            <Button icon={<FiEye />} />
            <Button icon={<BiBell />}  />
            <Button icon={<AiOutlineUser/>} />
            <p className="name uppercase">Мөнхтэргэл</p>
            <Button icon={<BsPower />} /> 
        </div>
    </header>
}

export default Header;