import { Nav} from '../components/Nav';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';

export const Home = () => {
    return ( <div className="min-h-screen bg-white text-gray-900"> 
        {/* Main Content */}
         <main>
          <Nav/>
          <Hero/>
          <Services/>
         </main>
        {/* Footer */}

    </div>
    );
};