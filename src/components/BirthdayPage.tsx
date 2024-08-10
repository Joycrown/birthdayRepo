import  { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import BackgroundWrapper from './BackgroundWrapper';





function BirthdayPage() {
  const [currentPrayer, setCurrentPrayer] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const prayers: string[] = [
    "May God's loving presence in your life be felt strongly on your birthday and every day.",
    "I pray that your day is filled with joy and that the year ahead holds endless possibilities for you.",
    "May the light of God's love shine upon you today and always.",
    "May the Lord’s blessings overflow in your life today and always. ",
    "As you celebrate another year, may your heart be filled with gratitude for His unwavering love and faithfulness.",
    "On your special day, I pray that God’s grace continues to guide and protect you.",
    "May His plans for you unfold beautifully, leading you closer to His divine purpose for your life.",
    "Happy Birthday! May the love of Christ shine brightly in your life, lighting your path with hope, joy, and peace.",
    "As you celebrate your birthday, remember that you are wonderfully made by God’s hand, and He has a perfect plan for you.",
    "May you walk confidently in His purpose and be a light to those around you.",
    "On your birthday, I thank God for the gift of you. May His love fill your heart with peace.",
    "Happy Birthday! May this year be a testimony of God’s goodness in your life.",
    "May you experience His abundant blessings, grow in your faith, and be a vessel of His love and compassion to the world.",
    "May the Lord bless you richly on your birthday and in the days ahead.",
    "May you find joy in His presence, strength in His promises, and peace in His unfailing love. You are His beloved child.",
    "As you celebrate another year, may you be reminded of God’s endless mercy and grace.",
    "May you continue to trust in His plan, knowing that He is with you every step of the way, leading you to a future filled with hope.",
    "Happy Birthday! I pray that your faith grows stronger with each passing day. May you find comfort in God’s embrace, courage in His promises.",
    "On your birthday, I pray that God’s love surrounds you, His wisdom guides you, and His peace fills your heart."
  ];
  const images: string[] = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.png',
    '/image4.jpg',
    '/image5.png',
  ];

  useEffect(() => {
    confetti();
    const prayerInterval = setInterval(() => {
      setCurrentPrayer((prev) => (prev + 1) % prayers.length);
    }, 8000);
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(prayerInterval);
      clearInterval(imageInterval);
    };
  }, [images.length,prayers.length]);

  return (
    <BackgroundWrapper>
      <div className="py-8 md:py-12 px-4 w-full max-w-md mx-auto"> {/* Added padding here */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white bg-opacity-90 rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="relative h-64">
            <AnimatePresence initial={false}>
              <motion.img 
                key={currentImage}
                src={images[currentImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Birthday Slideshow"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <motion.h1 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center px-4"
              >
                Happy Birthday, Chidiogo !
              </motion.h1>
            </div>
          </div>
          
          <div className="p-4 md:p-6 space-y-4">
            <motion.p 
              key={currentPrayer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-base md:text-lg text-gray-700 text-center h-20"
            >
              {prayers[currentPrayer]}
            </motion.p>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-600 text-center">Birthday Wishes</h2>
              <p className="text-sm md:text-base text-gray-600 text-center">
                May your day be as beautiful as your smile, as lovely as your heart, and as special as you are.
              </p>
            </div>
            
            <button 
              className="w-full py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
              onClick={() => confetti()}
            >
              Shower Love!
            </button>
          </div>
        </motion.div>
      </div>
    </BackgroundWrapper>
  );
}

export default BirthdayPage