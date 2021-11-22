import {MdOutlineNotificationsActive , MdSyncAlt , MdDevicesOther} from 'react-icons/md';
import {AiFillHome} from 'react-icons/ai';
import {GiPiggyBank , GiReceiveMoney} from 'react-icons/gi';
import {BsCreditCardFill} from 'react-icons/bs';
import {FaBusinessTime} from 'react-icons/fa';
import NavItem from '../Home/navItem';
import NavItems from '../Home/navItems';
import {IoLocationOutline} from 'react-icons/io5'
import {RiExchangeDollarLine} from 'react-icons/ri'
import {BsCalculator} from 'react-icons/bs'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {IoCall} from 'react-icons/io5'
import {SiReadthedocs} from 'react-icons/si'

const menuItems = [
    {
        icon: <AiFillHome style={{fontSize: '1.5rem'}} />,
        text: "Эхлэл",
        path: '/home'
    },
    {
        icon: <GiPiggyBank style={{fontSize: '1.5rem'}} />,
        text: "Данс",
        path: '/accounts'
    },
    {
        icon: <MdSyncAlt style={{fontSize: '1.5rem'}} />,
        text: "Гүйлгээ",
        path: '/transactions'
    },
    {
        icon: <BsCreditCardFill style={{fontSize: '1.5rem'}} />,
        text: "Кард",
        path: '/card'
    },
    {
        icon: <GiReceiveMoney style={{fontSize: '1.5rem'}} />,
        text: "Зээл",
        path: '/credits'
    },
    {
        icon: <FaBusinessTime style={{fontSize: '1.5rem'}} />,
        text: "Төлбөр",
        path: '/payment'
    },
    {
        icon: <MdDevicesOther style={{fontSize: '1.5rem'}} />,
        text: "Үйлчилгээ",
        path: '/service'
    }
]

const Sidebar = props => {
    return <div style={{ paddingTop: '56px' }} className="h-screen border-gray-100 fixed top-0 left-0">
        <div className="sidebar h-full flex items-center flex-col">
            {
                menuItems.map(item => {
                    return <div>
                        <NavItem icon={item.icon} text={item.text} /> 
                    </div>
                })
            }
    
            {/* <NavItems icon={<IoLocationOutline />} />
            <NavItems icon={<RiExchangeDollarLine />} />
            <NavItems icon={<BsCalculator/>}/>
            <NavItems icon={<HiOutlineDocumentText/>}/>
            <NavItems icon={<IoCall/>}/>
            <NavItems icon={<SiReadthedocs/>}/>  */}
        <div className="flex justify-between icon-container">
            <NavItems icon={<IoLocationOutline />} text="Байршил" />
            <NavItems icon={<RiExchangeDollarLine />} text="Ханш"  />
        </div>
        <div className="flex justify-between icon-container">
            <NavItems icon={<BsCalculator />} text="Тооцоолуур"  />
            <NavItems icon={<HiOutlineDocumentText />}  text="Мэдээ" />
        </div>
        <div className="flex justify-between icon-container">
            <NavItems icon={<IoCall />} text="Холбоо барих"  />
            <NavItems icon={<SiReadthedocs />} text="И-Брошюр"  />
        </div>
        </div>
       
    </div>
}

export default Sidebar;