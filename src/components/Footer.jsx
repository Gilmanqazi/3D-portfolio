import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-16 px-6 mt-40 '>
<div className='max-w-6xl mx-auto'>
  <div className='flex justify-between items-center '>

{/* Logo and description */}
<h1 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent'>Gilman Qazi</h1>

{/* //Scrolllinks */}
<div>

  <h3 className='text-xl font-semibold mb-4 text-purple-200'>
    Connect
  </h3>

  <div className='flex space-x-4'>
<a className='text-gray-700 hover:text-violet-400 transition-colors' href="#"><Github className="h-5 w-5" /></a>

<a className='text-gray-700 hover:text-violet-400 transition-colors' href="#"><Twitter className="h-5 w-5" /></a>

<a className='text-gray-700 hover:text-violet-400 transition-colors' href="#"><Linkedin className="h-5 w-5" /></a>

  </div>

</div>

</div>
  

  <div className='border-t border-gray-700 mt-12 pt-8 flex flex-cil md:flex-row justify-between items-center'>
<p className='text-fray-500 text-sm '>
© 2026 GilmanQazi, All rights reserved
</p>

<div className='flex space-x-6 mt-4 md:mt-0 '>
<a className=' text-white text-sm transition-colors' href="#">Privacy Policy</a>

<a className=' text-white text-sm transition-colors' href="#">Terms of Services</a>

<a className=' text-white text-sm transition-colors' href="#">Cookie Policy</a>
</div>
  </div>
  
</div>
    </footer>
  )
}

export default Footer