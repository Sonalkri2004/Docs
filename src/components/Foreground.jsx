import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref =useRef(null);
    const data =[
        {
            desc:"this is my first card .... welcome ",
            filesize:".9mb",
            close:true,
            tag:{isOpen : true, tagTitle:"Download Now",tagColor:"green"}

    },


    {
        desc:"this is my first card .... welcome ",
        filesize:".9mb",
        close:true,
        tag:{isOpen : true, tagTitle:"Download Now",tagColor:"green"}

    },


    {
        desc:"this is my first card .... welcome ",
        filesize:".9mb",
        close:true,
        tag:{isOpen : true, tagTitle:"Download Now",tagColor:"blue"}

    }, 
];

  return (
    <div ref={ref} className='top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
       ))}
       

    </div>
  )
}

export default Foreground



