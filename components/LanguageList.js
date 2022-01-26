import React from 'react';
import LanguageInfo from './LanguageInfo';



export default function LanguageList(props) {

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

                <LanguageInfo lang={lang} key={key} />

            ))}
        </div>
    );
}
