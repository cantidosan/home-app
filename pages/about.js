import Head from 'next/head'
import Image from 'next/image'
import LanguageInfo from '../components/LanguageInfo';
import LanguageList from '../components/LanguageList';
import styles from '../styles/about.module.css'
import ProjectList from '../components/ProjectList';

export default function About() {



    return (
        <>
            <div className="flex flex-row  justify-between">
                <div className="flex-col basis-1/2 text-left bg-cyan-400">
                    <div className="font-medium">
                        Name:
                        Gavin B
                        <p>
                            lorem  ipsum floatsum jetsum,Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                </div>
                <LanguageList />
            </div>
            <ProjectList />
        </>
    );



}