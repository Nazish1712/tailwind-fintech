const Navbar = () => {

const links = [
  {
    href:"/guide",
    title:"Guide"
  },
  {
    href:"/pricing",
    title:"Pricing"
  },
  {
    href:"/login",
    title:"Login"
  }
]

  return(
     <div className="flex items-center justify-between py-2">
      <a href="/"><img src="/logo.svg" draggable="false" className="w-12 h-12"></img></a>
      <div className="flex items-center gap-8">
        {links.map((link, index)=>(
          <a href={link.href} key={index} className="text-neutral-800 font-medium  hover:text-neutral-500 transition duration-200">
            {link.title}
          </a>
        ))}
        <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide">Start free trial</button>
      </div>
     </div>
  )
}

export default Navbar