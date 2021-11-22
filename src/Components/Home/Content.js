import '../../static/style/includes/style.css'
import Info from './Info'
import Card from './Card'
import { AiFillBank } from 'react-icons/ai'
import { SiCommerzbank } from 'react-icons/si'
import { BsFillPiggyBankFill } from 'react-icons/bs'


const Content = () => {
    return <div className="grid grid-cols-2 gap-16">
        <div className="flex flex-col p-2">
            <Info title="Дансны мэдээлэл" />
            <div className="bg-green-400 h-36 rounded-xl flex justify-center items-center mb-7">
                <div className="h-24 w-11/12 text-white">
                    <p className="mb-6">Үндсэн данс</p>
                    <p className="text-sm mb-1">ХАРИЛЦАХ/ИРГЭД/MNT</p>
                    <div className="flex justify-between text-sm">
                        <p>5065 229 701</p>
                        <p className="font-bold">1.00MNT</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <p className="font-bold text-green-400">Картны мэдээлэл</p>
                <p className="border-b border-green-400">Нийт</p>
            </div>
            <div className="mt-7 h-60 banner rounded-xl mb-6"></div>
            <Info title="Хадгалсан загвар" />

            <div className="grid grid-cols-4 gap-12">
                <div className="flex flex-col justify-center items-center bg-gray-100 rounded-xl">
                    <p className="text-2xl text-gray-600">+</p>
                    <p className="text-sm text-green-300">загвар нэмэх</p>
                </div>
                <Card logo={<AiFillBank />} name="Golomt" />
                <Card logo={<SiCommerzbank />} name="VA" />
                <Card logo={<BsFillPiggyBankFill />} name="Khaan Bank" />
            </div>

        </div>
        <div className="flex flex-col p-2" >
            <Info title='Картны мэдээлэл' />
            <div className="flex items-center mb-7 h-36 gap-4">
                <div className="h-full rounded-xl w-1/5 flex justify-center items-center bg-gray-100">
                    <div className="flex flex-col justify-center items-center w-1/5 ">
                        <p className="text-2xl text-gray-600">+</p>
                        <p className="text-sm text-green-300">төлбөр нэмэх</p>
                    </div>
                </div>
                <div className="h-full rounded-xl w-4/5 border p-4">
                    <div className="font-bold text-green-600 mb-4">ХЭРЭГЛЭЭНИЙ ТӨЛБӨР</div>
                    <div className="border-b-2 border-red-700 w-1/12"></div>
                    <div className="text-sm mt-5 text-gray-600">Цахилгаан, утас, кабель гэх мэт хэрэглээний төлбөрөө хялбараар төлөөрэй.</div>
                </div>
            </div>
        </div >
    </div >
}

export default Content