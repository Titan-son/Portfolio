import './header.sass';
import background from '../../assets/videos/space_background.mp4';
import logo from '../../assets/images/light_logo.png';
import { useEffect, useState, useMemo } from 'react';

function Header({ theme }) {
  const words = useMemo(() => ["World !", "Visiteur ?", "recruteur ?!"], []); // useMemo c'est important pour initialiser words de manière stable
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    let word = words[currentWordIndex];

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayText(word.substring(0, displayText.length - 1));
      }, 100);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayText(word.substring(0, displayText.length + 1));
      }, 150);
    }

    if (!isDeleting && displayText === word) {
      setTimeout(() => setIsDeleting(true), 1000); //fonction pour la pause avant d'éffacer
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, words, currentWordIndex]);

  return (
    <div id='home' className={`Header ${theme}`}>
      <video autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <div className="header-content">
        <h1>Welcome to my universe</h1>
        <img src={logo} alt="" />
        <div>
          <h1 className="typing-text">{displayText}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
