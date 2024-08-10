
import { motion } from 'framer-motion';
import BackgroundWrapper from './BackgroundWrapper';



interface LandingPageProps {
  onEnter: () => void;
}

function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <BackgroundWrapper>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 shadow-text">
        August 10th: <br/> A day as unique as you are.
         
        </h1>
        <button 
          onClick={onEnter}
          className="px-6 py-3 bg-white text-purple-600 rounded-full text-xl font-semibold hover:bg-purple-100 transition duration-300 shadow-lg"
        >
          Enter
        </button>
      </motion.div>
    </BackgroundWrapper>
  );
}
export default LandingPage