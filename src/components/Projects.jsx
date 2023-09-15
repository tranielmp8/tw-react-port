import React from 'react'
/* 
 ../public/web1.png
 ../public/web2.png
 ../public/web3.png
 ../public/web4.png
 ../public/web5.png
 ../public/web6.png
*/

export default function Projects() {
  return (
    <div>
        <h3 className='text-3xl py-1'>
            Projects
        </h3>
        <p className="text-md py-2 leading-8 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda similique quasi, sit rem <span className="text-teal-500">voluptatibus</span> nemo illum exercitationem <span className="text-teal-500">explicabo</span> sint eos ab enim laboriosam eum.
        </p>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap' >
            <div className='basis-1/3 flex-1'>
                <img src="../public/web1.png" alt="web1" className='rounded-lg object-cover w-[100%] h-[100%]'  />
            </div>
            <div className='basis-1/3 flex-1'>
                <img src="../public/web2.png" alt="web2" className='rounded-lg object-cover w-[100%] h-[100%]' />
            </div >
            <div className='basis-1/3 flex-1'>
                <img src="../public/web3.png" alt="web3" className='rounded-lg object-cover w-[100%] h-[100%]' />
            </div>
            <div className='basis-1/3 flex-1'>
                <img src="../public/web4.png" alt="web4" className='rounded-lg object-cover w-[100%] h-[100%]' />
            </div>
            <div className='basis-1/3 flex-1'>
                <img src="../public/web5.png" alt="web5" className='rounded-lg object-cover w-[100%] h-[100%]' />
            </div>
            <div className='basis-1/3 flex-1'>
                <img src="../public/web6.png" alt="web6" className='rounded-lg object-cover w-[100%] h-[100%]'/>
            </div>
        </div>
    </div>
  )
}
