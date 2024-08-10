import { useState } from 'react'
import LandingPage from './components/LandingPage';
import BirthdayPage from './components/BirthdayPage';


function App() {
  const [showBirthdayPage, setShowBirthdayPage] = useState(false);

  return (
    <>
      {!showBirthdayPage ? (
        <LandingPage onEnter={() => setShowBirthdayPage(true)} />
      ) : (
        <BirthdayPage />
      )}
    </>
  );
}

export default App
