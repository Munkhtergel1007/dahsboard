import '../../static/style/includes/style.css'

const Card = (props) => {
    return <div className="flex flex-col items-center h-24 rounded-xl container">
        <p className="text-md text-gray-600 mt-6 rounded-xl p-2 logo">{props.logo}</p>
        <p className="text-sm text-green-300 mt-2">{props.name}</p>
    </div>
}

export default Card;