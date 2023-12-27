import React from "react";
import Button from "./Button" ;

const ListOfButtons= ["All" , "Music" , "Sports" , "News" , "Trading","Music" , "Sports","News"]

const ButtonList =() =>  {
    return  (
         <div className= "flex">
            {
                ListOfButtons?.map((button) => 
                    <Button name={button} />
                )
            }
            
      </div>
    )
}

export default ButtonList ;