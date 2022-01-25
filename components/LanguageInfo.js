import React from 'react';

export default function LanguageInfo(props) {
    return (

        <div className="flex basis-40  justify-center items-center  box-border h-32  p-4 border-4 bg-rose-500 hover:bg-rose-300 hover:scale-110">

            <a >{props.lang.label}</a>

        </div>


    );
}
