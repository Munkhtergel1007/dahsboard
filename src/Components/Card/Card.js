import CardItem from './CardItem'
import { AiFillStar } from 'react-icons/ai'
import { BsFillPiggyBankFill } from 'react-icons/bs'
const Card = () => {
    const CardData = [
        {
            icon: <AiFillStar />,
            number: '5027779793',
            huleegdejDun: '0.00 MNT',
            uldegdelDun: '438.92 MNT',
        },
        {
            icon: <BsFillPiggyBankFill />,
            number: '5027779793',
            huleegdejDun: '0.00 MNT',
            uldegdelDun: '438.92 MNT',
        },
        {
            icon: <BsFillPiggyBankFill />,
            number: '5027779793',
            huleegdejDun: '0.00 MNT',
            uldegdelDun: '438.92 MNT',
        }
    ]
    return <div className="w-full h-full">
        <p className="text-gray-600">Dansnii jagsaalt</p>
        <p className="text-gray-600 uppercase mt-2">Deposit dans</p>
        <div className="rounded-md shadow-xl mt-3 px-8 py-4">
            <button className="flex items-center justify-center border rounded-lg w-2/5 py-1 mb-8">
                <p className="text-red-900 mr-8">+</p>
                <p>Shine dans songoh</p>
            </button>
            {
                CardData.map(data => {
                    return <CardItem icon={data.icon} number={data.number} huleegdejDun={data.huleegdejDun} uldegdelDun={data.uldegdelDun} />
                })
            }
        </div>
    </div>
}

export default Card