const Hero = () => {
    return(
        <div className="flex flex-col items-center w-full gap-4 my-20">
            <div className="border px-4 py-1 rounded-full border-slate-200 bg-gray-100 text-neutral-600 hover:bg-gray-200 transition duration-200 cursor-pointer">
                What are early stage tax requirements?
            </div>
            <h1 className="font-medium mt-10 text-7xl text-black tracking-tighter text-center">Magically simplify <br/> accounting and taxes</h1>
            <p className="max-w-2xl mx-auto text-lg text-center mt-4 text-neutral-700">
            Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 1:29pm.</p>
            <div className="flex items-center gap-4 mt-10">
            <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md tracking-wide cursor-pointer">Start free trial</button>
            <button className=" cursor-pointer px-4 py-2 rounded-lg text-black font-bold  text-shadow-md tracking-wide">Pricing &rarr;</button>
            </div>
        </div>
    )
}

export default Hero