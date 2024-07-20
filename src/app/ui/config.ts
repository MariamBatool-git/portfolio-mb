import { Certificatiions, Experience } from "@/types";

export const ROUTES = {
    home : '/',
    about : '/about',
    experience : '/experience',
    certification : '/certifications'
}

export const SOCIALS_LINKS = {
    github : 'https://github.com/MariamBatool-git',
    linkedin : 'https://www.linkedin.com/in/batoolmariam/'
}

export const HOME_TEXT = "Highly skilled and qualified software engineer with 3+ years of full-stack mobile and web development expertise. Proficient in React Native, React JS, Next Js, Typescript, Javascript, Java, Python, HTML, CSS, RESTful APIs, and databases. Creative, analytical, and dedicated to delivering exceptional software solutions.";

export const ABOUT_TEXT = {
    para1 : "In 2015, I sparked my passion for coding by solving small challenges like PrimeChecker and PalindromeDetection. The thrill of cracking these problems ignited my interest in the world of programming. Today, I have the privilege of developing web and mobile applications, primarily for fintech and education systems. I find deep satisfaction in creating software solutions that contribute to a better world. In my free time, I fuel my passion by building and experimenting with personal web and mobile apps, always eager to learn new technologies.",
    para2 : "Beyond the digital realm, you can find me engrossed in a book, captivated by a movie, invigorated by a hike, or simply cherishing moments with loved ones."

}

export const EXPERIENCE : Experience = [
    {
        title : 'Senior Software Engineer',
        companyName : 'Banksey',
        duration : 'NOV 2023 - PRESENT',
        description : [
            'Driving the end-to-end development of an AI-driven finance management platform, combining Flask for backend robustness and React for an intuitive user interface.'
        ]
    },
    {
        title : 'Full Stack Developer',
        companyName : 'Beginning Solutions & IT',
        duration : 'JUN 2023 - SEP 2023',
        description : [
            'Spearheaded web development initiatives, delivering functional and visually appealing user interfaces using modern web technologies.',
            'Led end-to-end development for the Quran and Hadees app using React & PHP.',
            'Worked on existing products, focusing on stabilising and enhancing features.',
            'Contributed to the development of a robust VoIP system for clients.',
            'Implemented responsive design principles for optimal user experiences across devices.',
            'Collaborated with global cross-functional teams to create intuitive web interfaces.'
        ]
    },
    {
        title : 'Full Stack Engineer',
        companyName : 'Taqwa Invest Technology Ltd.',
        duration : 'APR 2022 - APR 2023',
        description : [
            'Developed, tested, and maintained features on React Native fintech mobile apps for iOS and Android, ensuring seamless user experience.',
            'Conducted code reviews, improved performance, and enhanced structural stability.',
            'Collaborated cross-functionally to integrate backend APIs for data synchronization.',
            'Ensured consistent functionality and appearance across diverse devices and screen sizes.',
            'Independently created a scalable AML system using web scraping and machine learning for improved KYC compliance.',
            'Collaborated in technical discussions with third-party service providers for system design and analysis.'

        ]
    }

]

export const CERTIFICATIONS : Certificatiions = [
    {
        description : 'Earners of the MTA: Introduction to Programming Using Python validate the skills and knowledge to recognize and write syntactically correct Python code, recognize data types supported by Python, and the ability to recognize and write Python code that will logically solve a given problem.',
        issuer : 'Microsoft',
        link : 'https://www.credly.com/badges/221b3ada-ce42-4b44-b7e9-5d95f9bece54?source=linked_in_profile',
        title : 'MTA: Introduction to Programming Using Python'
    },
    {
        description : 'React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.',
        issuer : 'HackerRank',
        link : 'https://www.hackerrank.com/certificates/ddc6c932783e',
        title : 'React (Basic) Certificate'
    },
]
