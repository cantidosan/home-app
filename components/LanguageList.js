import React, { useContext, useState } from 'react';
import LanguageInfo from './LanguageInfo';
import LanguageContext from '../Contexts/LangaugeContext';


export default function LanguageList(props) {


    const { lang, setLangList } = useContext(LanguageContext);

    const handleLanguageClick = (label, isSelected) => {


        //console.log(label, isSelected)
        let newLang = [...lang]

        if (isSelected) {

            //Add the language to the array 

            newLang.push(label)

        }
        else {

            // Check if language  already exists in array and remove it
            newLang = lang.filter((word) => word !== label);


        }
        setLangList(newLang)
        //console.log(lang)

    }

    const languages = [
        { label: "Javascript", href: "" },
        { label: "Nextjs", href: "" },
        { label: "Nodejs", href: "" },
        { label: "Tailwind", href: "" },
        { label: "Express", href: "" },
        { label: "Sass", href: "" },
        { label: "Reactjs", href: "" },
        { label: "Postgres", href: "" },
        { label: "Python", href: "" },
        { label: "MongoDB", href: "" }];

    return (
        <div className="flex basis-1/2  gap-4 flex-row grow flex-wrap 
                        justify-between bg-teal-500 ">
            {languages.map((lang, key) => (

                <LanguageInfo lang={lang} key={key} onClick={handleLanguageClick} />

            ))}
        </div>
    );
}
