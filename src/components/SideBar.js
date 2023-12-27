import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SideBar = () => {

    const isMenuOpen  =useSelector((store)=> store.app.isMenuOpen)
    
    //early return 
    if(!isMenuOpen) return null ; 
    
    return (
       <div className="p-5 shadow-lg w-48">

        <h1 className="font-bold">Subcriptions</h1>
        <ul className="p-5">
            <li>Home</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold"> Recommendations</h1>
        <ul className="p-5">
            <li>Shorts</li>
            <li>Music</li>
            <li>Binary Options</li>
            {/* <li>Movies</li> */}
        </ul>
       </div>
    )
}

export default SideBar;