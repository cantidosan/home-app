import React from 'react';
import ProjectInfo from './ProjectInfo';
import { useLanguages } from '../Contexts/LangaugeContext';



export default function ProjectList(props) {

    const projects = [

        { label: "OnlyDogs", href: "", desc: "Pets Only social media", lang: ["Javascript", "Postgres"] },
        { label: "TutorSpot", href: "", desc: "one stop tutor service", lang: ["Javascript", "Nextjs", "Tailwind"] },
        { label: "Physio", href: "", desc: "connects you to therapists to book a session", lang: ["Express", "Python", "Tailwind"] },
        { label: "Seafood Restaurant", href: "", desc: "standard restaurant website", lang: ["Javascript"] },
        { label: "Villa Room Booking", href: "", desc: "private villa booking service", lang: ["Express", "Javascript", "Sass"] },
        { label: "Pot-Whole", href: "", desc: "Map of major pot-holes in an area", lang: ["Nodejs", "Reactjs", "Tailwind"] },
        { label: "Whoofa", href: "", desc: "highlights who is responsible for a public piece of infrastructure", lang: ["Python", "MongoDB", "Express"] },
    ];

    ///const [lang,setLangList] =useLanguages();


    return (
        <div className="flex basis-1/2  gap-4 flex-row grow 
                    flex-wrap justify-center bg-emerald-500 ">

            {projects.map((project, i) => (

                <ProjectInfo proj={project} key={i} />
            ))}

        </div>
    );
}
