import React, { useState } from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    

        //links Array
    const navbarLinks = [
        { id: 1, title: "Inicio", link: "/"},
        { id: 2, title: "Nosotros", link: "/"},
        { id: 3, title: "Contacto", link: "/"},
        { id: 4, title: "Soporte", link: "/"}
    ]

    // Social array
    const navbarRedes= [
        {
            id: 1,
            title:"Instragram",
            link: "https://www.instagram.com",
            icon: "bi bi-instagram",
        },
        {
            id: 2,
            title:"Github",
            link: "https://www.github.com",
            icon: "bi bi-github"
        }
    ]


    return (
        <nav className="w-full bg-red-700/20 fixed top-0 left-0 z-50 backdrop-blur-md">
            <div className='flex justify-between items-center sm:px-12 sm:py-3 px-4 py-2'>
                 {/* LOGO */}
                <div className="flex items-center gap-2">
                    <img
                    src={logo}
                    alt="logo"
                    className="w-[70px] "
                    />
                    <p className='text-white font-bold font-size-2xl'>Electricidad</p>
                </div>
                
                {/* BURGER BTN */}
                <button
                    className='md:hidden text-white p-2 cursor-pointer'
                    onClick={toggleMenu} //Placeholder for menu toggle fuction
                >

                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24' //cajita</div>
                    >
                {
                    isOpen ? (
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 18L18 6M6 6l12 12' // x
                    />
                    ) : (
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16' // buger icon</nav>
                    />
                                
                    )
                }
                    
                    </svg>
                </button>
            

                {/* NAVEGADOR LINKS DESKTOP */}

                <div className='hidden md:block'>
                    <ul className='flex space-x-4 px-4'>
                    {
                        navbarLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.id} className="text-sm text-white hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110 inline-block">
                                {link.title}
                            </a>
                        </li>
                        ))
                    }
                    </ul>
                </div>

                    {/* NAVEGADOR SOCIAL DESKTOP  */}
                <div className='hidden md:block '>
                    <ul className='flex space-x-4 px-4'>
                    {
                        navbarRedes.map((link) => (
                        <li key={link.id}>
                            <a 
                            href={link.link} 
                            target='_blank'
                            rel='noopener nereferrer' //para no trackear desde que paginas vistas
                            className="inline-block transition-transform duration-300 transform hover:scale-125"
                            >
                                <i className={`${link.icon} sm:text-2xl text-lg text-white transition-all duration-300 hover:text-yellow-500`}>

                                </i>
                            </a>
                        </li>
                        ))
                    }
                    </ul>
                </div>
                
                    {/* ---------------------------VIEW MOBILE ------------------------------------------ */}

            </div>


            <div className={`md:hidden absolute w-full  bg-red-950  transition-all duration-300 b ${ isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {/* VIEW MOBILE LINKS */}
            <ul className='flex flex-col px-4 py-2 '>
            {
                navbarLinks.map((link) => (
                    <li key={link.id} className='py-2 text-center '>
                        <a
                            href={link.link}
                            className=' text-sm text-white hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110'
                        >
                            {link.title}
                        </a>
                    </li>
                ))
            }
            </ul>
            
            
            <ul className='flex space-x-4 px-4 py-2 border-t border-yellow-700 justify-center '>
            {
                navbarRedes.map((link) => (
                    <li key={link.id} className='py-2 text-center'>
                        <a
                            href={link.link}
                            className='inline-block'
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                        <i
                            className={`${link.icon} text-lg text-white hover:text-yellow-500`}
                        >
                        </i>
                        </a>
                    </li>
                ))
            }
            </ul>

            
            
            

            </div>
        </nav>
    )
}

export default  Navbar 