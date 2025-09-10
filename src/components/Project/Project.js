"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }) => {

  return (
    <div className=' outline outline-[2px]  shadow-md rounded-md outline-[#2c2c2c] w-[47%] h-[66%] flex flex-col justify-start gap-[15px] px-[10px] py-[10px] transition-all ease-in-out duration-100 hover:scale-[1.005]'>
        <div className='flex gap-[15px] items-end'>
            <div className='w-[75px] h-[70px]'>
                <Image src={project.logo} alt='company logo' className='rounded-md hover:scale-[1.03] object-contain bg-white w-[70px] h-[70px] transition-all ease-in-out duration-100 shadow-md' />
            </div>
            <div className='flex flex-col justify-start'>
                <h2 className='font-semibold text-[24px]'>{`${project.name}`}</h2>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-[16px]'>{`${project.start} - ${project.end}`}</p>
                    {
                        project.links.length > 0 && <p className='text-[16px]'>|</p>
                    }
                    {
                        project.links.map((link, index) => (
                            <Link key={index} target='_blank' href={link.link}>
                                <p className='text-[16px] underline text-[#1d426f]'>{`${link.name}`}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start w-[95%] h-[90%]'>
            
            <div className='justify-start flex flex-col gap-[10px] mt-[10px] ml-[5px]'>
                {
                    project.description.map((desc, index) => (
                        <div key={index} className='flex gap-[5px] items-start'>
                            <p className='text-[14px]'>-</p>
                            <p className='text-[14px]'>{desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex justify-start items-center px-[5px]'>
            <p className='text-[13px] font-light'>Skills: {project.skills}</p>
        </div>
    </div>
  )
}

export default Project