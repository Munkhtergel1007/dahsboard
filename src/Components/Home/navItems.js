const NavItems = props => {
    return <div className="NavItems flex items-center flex-col justify-center w-1/2">
        <div className="icons">
            {props.icon}
        </div>
        <div className="texts">{props.text}</div>
    </div>
}

export default NavItems