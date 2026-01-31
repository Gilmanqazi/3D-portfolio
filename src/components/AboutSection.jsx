import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import  { ScrollTrigger } from 'gsap/ScrollTrigger'
import presonIMG  from "../assets/images/person.png"
const AboutSection = () => {

 const sectionRef = useRef(null)
 const titleRef = useRef(null)
 const introRef = useRef(null)
 const starRef = useRef([])

 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  //Title animation
  gsap.fromTo(
    titleRef.current,
    {y:200, opacity:0},
    {y:-200, opacity:1, duration:0.8,
      scrollTrigger:{
       trigger:sectionRef.current, 
       start: "top 10%", 
       toggleActions: "play none none reverse"
      }
    }
  )

  //Intro container
gsap.fromTo(
  introRef.current,
  {y:100, opacity:0, filter: "blur(10px)"},
  {
    y:-300, opacity:1, filter: "blur(0px)",
    duration:1.5,
    scrollTrigger:{
      trigger:sectionRef.current, start: "top 10%", toggleActions: "play none none reverse"
    }
  }
)

//Stars animation with different speeds abd directions

starRef.current.forEach((star, index)=>{
 const direction = index % 2 === 0 ? 1 : -1
 const speed = 0.5 + Math.random() * 0.5

 gsap.to(star,{
  x: `${direction * (100 + index * 20)}`,
y: `${direction * -50 - index * 10}`,
rotation: direction * 360,
ease: "none",
scrollTrigger:{
  trigger: sectionRef.current,
  start:"top bottom",
  end:"bottom top",
  scrub: speed,
}
 })
})

return ()=>{
  ScrollTrigger.getAll().forEach((trigger)=>{
if(trigger.vars.trigger === sectionRef.current){
  trigger.kill()
}
})
}
})

const addToStars = (el)=>{
if(el && !starRef.current.includes(el)){
  starRef.current.push(el)
}
}


  return (
<section ref={sectionRef} className='h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]'>

<div className='absolute inset-0 overflow-hidden '>
{/* Start */}

{[...Array(10)].map((_, i)=>(
<div 
ref={addToStars}
key={`star-${i}`}
className='absolute rounded-full'
style={{
  width:`${10 + i * 3}px`,
  height:`${10 + i * 3}px`,
  backgroundColor: "white",
  opacity:0.2 + Math.random() *0.4,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`
}}
/>
))}
</div>


<div className='container mx-auto px-4 h-full flex flex-col items-center justify-center '>

  <h1 ref={titleRef} className='text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0'>
    About Me
    </h1>

</div>

<div
  ref={introRef}
  className="absolute inset-x-0 bottom-[-8rem] sm:bottom-[-6rem] md:bottom-[-4rem] lg:bottom-[-15rem] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 sm:px-10 lg:px-24 opacity-0
  "
>
  {/* Text */}
  <h3
    className="text-sm sm:text-lg md:text-2xl font-bold text-purple-200 tracking-wide md:max-w-2xl text-center md:text-left"
  >
    Hi, I'm Gilman, a Fullstack Developer focused on speed, polish, and
    performance. I craft responsive, user-friendly web interfaces using modern
    tools like React.
  </h3>

  {/* Image */}
  <img
    className="h-48 sm:h-64 md:h-80 lg:h-[28rem] w-auto mix-blend-lighten"
    src={presonIMG}
    alt="Gilman portrait"
  />
</div>


</section>
  )
}

export default AboutSection