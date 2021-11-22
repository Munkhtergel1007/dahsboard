import Header from "./Header";
import Sidebar from "./Sidebar";
const Template = props => {
    return <>
        <Header />
        <Sidebar />
        <div style={{ paddingLeft: "300px", marginTop: '14px' }} className="pt-20 pr-4">
            {props.children}
        </div>
    </>
}

export default Template