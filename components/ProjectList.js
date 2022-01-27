import React, { useContext } from 'react';
import ProjectInfo from './ProjectInfo';
import LanguageContext, { useLanguages } from '../Contexts/LangaugeContext';
import _ from 'lodash';





export default function ProjectList(props) {

    const projects = [

        { label: "OnlyDogs", href: "", desc: "Pets Only social media", langs: ["Javascript", "Postgres"] },
        { label: "TutorSpot", href: "", desc: "one stop tutor service", langs: ["Javascript", "Nextjs", "Tailwind"] },
        { label: "Physio", href: "", desc: "connects you to therapists to book a session", langs: ["Express", "Python", "Tailwind"] },
        { label: "Seafood Restaurant", href: "", desc: "standard restaurant website", langs: ["Javascript"] },
        { label: "Villa Room Booking", href: "", desc: "private villa booking service", langs: ["Express", "Javascript", "Sass"] },
        { label: "Pot-Whole", href: "", desc: "Map of major pot-holes in an area", langs: ["Nodejs", "Reactjs", "Tailwind"] },
        { label: "Whoofa", href: "", desc: "highlights who is responsible for a public piece of infrastructure", langs: ["Python", "MongoDB", "Express"] },
    ];

    //const [lang, setLangList] = useLanguages();

    const { lang, setLangList } = useContext(LanguageContext);

    console.log(lang)

    const languageMatch = (project, i) => {



        if ((_.intersection(project.langs, lang).length > 0)) {



            return < ProjectInfo proj={project} key={i} />


        }


    }


    ///Compare elements of lang array to projects.lang's array
    ///to only print matches
    return (
        <div className="flex basis-1/2  gap-4 flex-row grow 
                    flex-wrap justify-center bg-primary-light ">



            {projects.map((project, i) => (

                languageMatch(project, i)


            ))}

        </div>
    );
}
