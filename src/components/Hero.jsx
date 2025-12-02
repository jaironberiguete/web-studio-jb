import { ArrowDown } from "lucide-react"
import { motion } from 'framer-motion';


export const Hero = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center relative">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


         {/* Diagonal half (right side) - clipped polygon creates the diagonal cut */}
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
         background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
          clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 40% 100%)",
         }}/>
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div>
          <h1 className="text-4xl md:text-5xl text-white font-extra leading-tight">Premium Websites & Web Apps for Businesses Worldwide</h1>
          <p className="mt-6 text-gray-200 max-w-xl">We build fast, secure, and mobile-friendly websites with booking, payments, and easy maintenance plans — so you can focus on serving customers.</p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg shadow hover:scale-105">BOOK A FREE CONSULT</a>
            <a href="#portfolio" className="inline-block px-6 py-3 rounded-lg border text-white hover:scale-105">SEE DEMOS</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">Starting at <span className="font-semibold">$300</span> • Maintenance plans from <span className="font-semibold">$49/mo</span></div>
        </div>
     </motion.div>

      
           <div className="z-10 flex pt-6 justify-right">
         <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative overflow-hidden ">

          <div className=" p-7 transition-transform duration-500 hover:scale-105 pl-15">
          <div className="h-45 bg-gray-100 flex items-center justify-end text-gray-400"><img src="images/hero-img.png" alt="" /></div>
   
            <ul className="mt-5 text-xs text-gray-200 flex bg-red-700 w-full justify-center grid grid-cols-3 px-10 py-2 rounded-md">      
             <li>#RESPONSIVE DESING</li>
             <li>#BOOKING & PAYMENT</li>
             <li>#ADMIN DAHSBOARD</li>
          </ul>
          
        </div>
            </motion.div>
      </div>
         </div>
         <div  className="absolute bottom-20 left-1/ transform-translate-xx-1/2 flex flex-col items-center animate-bounce text-black cursor-pointer "> 
          < span className="tex-sm tex-red-00 mb-2">
        Scroll
        </span>
            <ArrowDown className="h-5 w-5 text-red-700"/>
    </div>
    </section>
  );
}