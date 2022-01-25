import React from 'react';

export default function ProjectInfo(props) {




    return (

        <div className="flex basis-60  justify-center items-center 
            box-border h-52  p-4 border-4 bg-rose-500     
            hover: bg - rose - 300 hover: scale - 110" >

            <h2>{props.proj.label}</h2>
            <p>{props.proj.desc}</p>

        </div>
    );
}
