import AccountButton from '../account/AccountButton'
import Label from '../account/Label'
const AccountContent = () => {
    return <div className="grid grid-cols-2 grids gap-4">
        <div className="flex flex-col">
            <AccountButton text="Ehlel" />
            <AccountButton text="Zagvaruud" />
            <AccountButton text="Facebook" />
            <AccountButton text="Nehemjlel" />
        </div>
        <div className="h-full">
            <div className="h-32 accountContainer rounded-md">
                <div className="px-8 py-4 text-white">
                    <p>Guilgeenii turul</p>
                    <select className="text-gray-700 pl-4 pt-3 h-12 w-full py-3 mt-3">
                        <option className="w-full" value="1">Khaan banknii dans ruu</option>
                        <option className="w-full" value="2">Khaan banknii dans ruu</option>
                        <option className="w-full" value="3">Khaan banknii dans ruu</option>
                    </select>
                </div>
            </div>
            <div className="h-full px-8 py-4">
                <Label text="* Shiljuuleh dans songoh" />
                <select className="w-full h-12 mb-6 mt-4 px-4 border rounded-md">
                    <option>Hariltsah</option>
                    <option>Irged</option>
                    <option>Tsalin</option>
                    <option>MNT</option>
                </select>
                <Label text="* Huleen avagchin dansni dugaar" />
                <input className="w-full my-6 border-b border-gray-300"></input>
                <Label text="* Huleen avagchiin ner" />
                <input className="w-full my-6 border-b border-gray-300"></input>
                <Label text="* Guilgeenii dun" />
                <input className="w-full my-6 border-b border-gray-300"></input>
                <Label text="* Guilgeenii utga" />
                <input className="w-full my-4 border-b border-gray-300"></input>
                <div className="w-full flex justify-center items-center mt-8">
                    <button className="mr-4 border bg-white text-black px-4 py-2 shadow-md rounded-md">Shinechleh</button>
                    <button className="border guilgee px-4 py-2 shadow-md rounded-md">Guilgee hiih</button>
                </div>
            </div>
        </div>
    </div >
}

export default AccountContent;