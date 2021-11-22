import '../../static/style/includes/style.css'

const Button = props => {
    return <div style={{width: '30px', height: '30px'}} className="flex justify-center items-center rounded-full button icon">
        {props.icon}
    </div>
}

export default Button