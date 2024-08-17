import Image from 'next/image'
import React from 'react'

const Experience = ({ experience }) => {
  return (
    <div className='flex items-start gap-[20px] w-[1000px]'>
        <div className='w-[150px] h-[200px]'>
            <Image src={experience.logo} alt='company logo' className='rounded-md'/>
        </div>
        <div className='flex flex-col justify-center'>
            <h2 className='font-semibold text-[28px]'>{`${experience.position} @ ${experience.company}`}</h2>
            <div className='flex items-center gap-[10px]'>
                <p className='text-[17px]'>{`${experience.start} - ${experience.end}`}</p>
                <p className='text-[17px]'>|</p>
                <p className='text-[17px]'>{`${experience.location}`}</p>
            </div>
            {experience.teamName && <p className='text-[18px] font-medium mt-[5px]'>{`${experience.teamName}`}</p>}
            <div className=' w-[800px] flex flex-col gap-[10px] mt-[10px] ml-[5px]'>
                {
                    experience.description.map((desc, index) => (
                        <div key={index} className='flex gap-[5px] items-start'>
                            <p>-</p>
                            <p>{desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience