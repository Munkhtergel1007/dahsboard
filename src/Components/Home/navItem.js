const NavItem = props => {
    return <div className="navItem flex items-center mb-5">
        <p className="icon">{props.icon}</p>
        <span className="text">{props.text}</span>
    </div>
}

export default NavItem  