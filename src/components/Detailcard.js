import { useState } from "react";
import UserEditComponent from "./UserEditComponenet";

function DetailCard({ title, value, link, text_color}) {
const [isClick,setClick] = useState(false);

const handleonClick = () => {
    setClick(true);
    setTimeout(() => {
        setClick(false)
    }, 2000);

}
    return (
        <div className='h-[180px] max-w-[100%] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <div className='flex justify-between'>
                <h1 className='p-5 font-bold text-[15px]'>{title}</h1>
                <button onClick={handleonClick} className='p-5 text-blue-500 font-semibold'>View more</button>
            </div>
            <h2 className={`text-center items-center pt-[20px] text-xl font-bold ${text_color}`}>{value}</h2>
            {isClick && <UserEditComponent/>}
        </div>
    );
}
export default DetailCard;