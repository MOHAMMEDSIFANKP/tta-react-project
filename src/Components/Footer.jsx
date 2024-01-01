import React from 'react'

function Footer() {
  return (
    <>
    <div className='container mt-10 mx-auto grid grid-cols-3 text-gray-500'>
        <div>
            <p>The Web site <span className='font-bold'>SIFAN</span>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only f</p>
        </div>
        <div className='flex justify-center'>
            <ul>
                <li className='font-bold'>Site Routes</li>
                <li>Homepage</li>
            </ul>
        </div>
        <div className='text-center '>
            <p className='font-bold'>Contact detils</p>
            <p>+91 9562040856</p>
            <p>sifan007sifu@gmail.com</p>
            <a className='text-blue-700' href="https://www.linkedin.com/in/mohammed-sifan-b2546b18a/">https://www.linkedin.com/in/mohammed-sifan-b2546b18a/</a>
        </div>
    </div>
    </>
    )
}

export default Footer