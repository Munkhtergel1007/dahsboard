import AccountContent from "./Content"

const AccountButton = (props) => {
    return <div className="mb-4 rounded-md py-2 px-4 shadow-lg aButton border">
        <p>{props.text}</p>
    </div>
}

export default AccountButton;