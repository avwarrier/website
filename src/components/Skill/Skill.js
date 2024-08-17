import React from 'react'
import Image from 'next/image'

const Skill = ({ item }) => {
    console.log(item)
  return (
    <div className='flex items-center gap-[10px] w-[200px] mb-[10px] '>
        <Image className='rounded-md drop-shadow-sm hover:scale-[1.1] transition-all duration-100 ease-in-out' src={item.icon} alt='skill' width={35} height={35} />
        <p>{item.name}</p>
    </div>
  )
}

export default Skill