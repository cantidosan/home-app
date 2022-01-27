import React, { useContext } from 'react';
import { useState } from 'react';
import LanguageContext from '../Contexts/LangaugeContext';


export default function LanguageInfo(props) {




    const [isSelected, setIsSelected] = useState(false);


    const handleClick = (event) => {

        /* console.log(props)
        console.log("click");
        console.log(event); */

        setIsSelected(!isSelected)

        props.onClick(props.lang.label, !isSelected)

    }

    return (

        <div className={`flex basis-40  justify-center items-center  
                        box-border h-32  p-4 border-4 bg-rose-500 
                        hover:bg-rose-300 cursor-pointer hover:scale-110 ${isSelected ? "scale-90 bg-cyan-700" : ""} `}>

            <a onClick={handleClick}>

                {props.lang.label}

            </a>

        </div>


    );
}
