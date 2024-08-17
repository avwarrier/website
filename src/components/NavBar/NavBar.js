"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image'
import devpost from '../../assets/devpost.svg'


const NavBar = () => {
    const pathName = usePathname();
    useEffect(() => {
        console.log(pathName);
    }, [])
    
  return (
    <div className='h-[10vh] flex items-center justify-between'>
        <div className='flex items-center justify-center gap-[35px] w-[400px] pr-[40px]'>
            <Link href="/">
                <div className={`flex flex-col items-center  h-[30px] w-[70px] mt-[10px] `}>
                    <p className={`${pathName != "/" && 'hover:scale-105 transition-all ease-in-out duration-100'}`}>About</p>
                    <div className={`transition-all ease-in-out duration-200 ${pathName == "/" ? 'w-[50px]' : 'w-[0px]'} h-[2px] bg-black`}></div>
                </div>
            </Link>
            <Link href="/experiences">
            <div className={`flex flex-col items-center  h-[30px] w-[70px] mt-[10px] `}>
                    <p className={`${pathName != "/experiences" && 'hover:scale-105 transition-all ease-in-out duration-100'}`}>Experiences</p>
                    <div className={`transition-all ease-in-out duration-200 ${pathName == "/experiences" ? 'w-[100px]' : 'w-[0px]'} h-[2px] bg-black`}></div>
                </div>
            </Link>
            <Link href="/projects">
                <div className={`flex flex-col items-center  h-[30px] w-[70px] mt-[10px] `}>
                    <p className={`${pathName != "/projects" && 'hover:scale-105 transition-all ease-in-out duration-100'}`}>Projects</p>
                    <div className={`transition-all ease-in-out duration-200 ${pathName == "/projects" ? 'w-[70px]' : 'w-[0px]'} h-[2px] bg-black`}></div>
                </div>
            </Link>
        </div>

        <Link href="/"><div className='flex items-center justify-center w-[400px]'>
            <div className='flex items-center justify-center bg-black py-[10px] w-[200px] rounded-md shadow-md transition-all ease-in-out duration-200 hover:scale-[1.03] cursor-pointer'>
                <p className='text-[#f5f0e6]'>Abhimanyu Warrier</p>
            </div>
        </div></Link>

        <div className='w-[400px] gap-[30px] flex items-center justify-center'>
            <Link target='_blank' href="https://www.instagram.com/_abhimanyuw_/">
                <InstagramIcon className='transition-all ease-in-out duration-100 hover:scale-[1.1]' sx={{ fontSize: 35, cursor: 'pointer' }} />
            </Link>

            <Link target='_blank' href="http://www.linkedin.com/in/abhimanyu-warrier">
                <LinkedInIcon className='transition-all ease-in-out duration-100 hover:scale-[1.1]' sx={{ fontSize: 35, cursor: 'pointer' }} />
            </Link>

            <Link target='_blank' href="https://github.com/avwarrier">
                <GitHubIcon className='transition-all ease-in-out duration-100 hover:scale-[1.1]' sx={{ fontSize: 35, cursor: 'pointer' }} />
            </Link>

            <Link target='_blank' href="https://devpost.com/abhimanyu-warrier04">
                <Image src={devpost} alt="Devpost" className='w-[35px] h-[35px] cursor-pointer transition-all ease-in-out duration-100 hover:scale-[1.1]' />
            </Link>
        </div>
    </div>
  )
}

export default NavBar