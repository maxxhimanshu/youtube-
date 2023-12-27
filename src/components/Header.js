import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Header = () => {

const dispatch = useDispatch()
const toggleMenuHandler = () => {
    dispatch(toggleMenu())
}

    return (
            <div className="grid grid-flow-col p-4 m-4 shadow-lg">

                <div className="flex col-span-1 pr-2">
                <img 
                onClick={()=>toggleMenuHandler()}
                className="h-8"
                 alt="menu logo" 
                 src="https://cdn1.iconfinder.com/data/icons/simple-basic-ui-outlined/28/Menu-512.png" />
                <img className="h-8 "
                 alt="utube logo mx-2"
                  src="https://th.bing.com/th/id/OIP.D6pZbfI9woOeLhEVMyaoyQHaDi?pid=ImgDet&rs=1" />
                </div>
                <div className="col-span-10 px-10">
                    <input className="w-1/2 border p-2 border-gray-400 rounded-l-full" type="text"/>
                    <button  className="border bg-blue-200 p-2 border-gray-400 rounded-r-full">Search</button>
                </div>
                <div className="col-span-1">
                    <img  
                    className="h-8"
                     alt="userlogo" 
                     src="https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-7.jpg" />
                </div>
            </div>
    )
}

export default Header;