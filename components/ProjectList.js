import React from 'react';
import ProjectInfo from './ProjectInfo';


export default function ProjectList(props) {

    const projects = [

        { label: "OnlyDogs", href: "", desc: "Pets Only social media" },
        { label: "TutorSpot", href: "", desc: "one stop tutor service" },
        { label: "Physio", href: "", desc: "connects you to therapists to book a session" },
        { label: "Seafood Restaurant", href: "", desc: "standard restaurant website" },
        { label: "Villa Room Booking", href: "", desc: "private villa booking service" },
        { label: "Pot-Whole", href: "", desc: "Map of major pot-holes in an area" },
        { label: "Whoofa", href: "", desc: "highlights who is responsible for a public piece of infrastructure" },
    ];

    return (
        <div className="flex basis-1/2  gap-4 flex-row grow 
                    flex-wrap justify-center bg-emerald-500 ">

            {projects.map((project, i) => (

                <ProjectInfo proj={project} key={i} />
            ))}

        </div>
    );
}
