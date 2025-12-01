import { Nav} from '../components/Nav';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Contact } from '../components/Contact';    
import {Footer} from '../components/Footer';

export const Home = () => {
    return ( <div className="min-h-screen bg-white text-gray-900"> 
        {/* Main Content */}
        <Nav/>
        <main>
            <Hero/>
            <Services/>
            <Pricing/>
            <Portfolio/>
            <About/>
            <Contact/>
         </main>
        {/* Footer */}
        <Footer/>

    </div>
    );
};