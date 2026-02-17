import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavButton from '../Components/Buttons/NavButton';
import Navbar from '../Components/Buttons/Navbar';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogoBlocked, setIsLogoBlocked] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (location.pathname === '/create') {
      localStorage.setItem('collectionCreated', 'false');
      setIsLogoBlocked(true);
    } else {
      setIsLogoBlocked(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleStorageChange = () => {
      const collectionCreated =
        localStorage.getItem('collectionCreated') === 'true';
      if (collectionCreated && location.pathname === '/create') {
        setIsLogoBlocked(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [location.pathname]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleLogoClick = () => {
    if (isLogoBlocked) return;
    navigate('/');
  };

  return (
    <>
      {/* Header Desktop */}
      <header className="fixed w-full z-50 pt-5 hidden md:block bg-transparent">
        <div className="px-4 md:px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <nav
            className="dark:bg-blackEnoBM/50 bg-[#ffffff9b] backdrop-filter backdrop-blur-[15px]
                     w-full flex flex-wrap lg:flex-nowrap items-center justify-between gap-4
                     min-h-[96px] rounded-[100px] border-2 border-[#2c2c2da150] 
                     dark:border-blackEno shadow transform px-4"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <img
              loading="lazy"
              src="/img/LogoENONegro1.svg"
              alt="ENO Logo"
              className={`h-7 md:h-11 shrink-0 ${
                isLogoBlocked
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
              onClick={handleLogoClick}
            />

            {/* Navigation Buttons */}
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 items-center text-grayEno text-sm flex-1 min-w-0">
              <NavButton showButton="home" handleNavigation={navigate} />
              <NavButton showButton="myToken" handleNavigation={navigate} />
              <NavButton
                showButton="myWhitepaper"
                handleNavigation={navigate}
              />
              <NavButton showButton="myBlogs" handleNavigation={navigate} />
            </ul>
            <a href="https://app.eno.network/" target="_blank">
              <button
                className="
    relative overflow-hidden
    px-8 py-2 rounded-3xl
    text-sm text-white font-euclid-medium
    cursor-pointer whitespace-nowrap
    transition-all duration-500 ease-in-out
    bg-gradient-to-tr from-[#E467C9] via-[#9747FF] to-[#572EFB] bg-[length:300%_100%]
    hover:bg-[position:100%_0] hover:brightness-110
    dark:text-white
    disabled:opacity-50 disabled:cursor-not-allowed
    flex items-center gap-1
  "
              >
                Launch App
              </button>
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white/90 backdrop-blur-[80px] fixed top-0 left-0 w-full h-20 flex items-center z-40 md:hidden shadow-lg dark:bg-grayEno/60">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <img
            loading="lazy"
            src={
              isDarkMode ? '/img/LogoENOBlanco1.svg' : '/img/LogoENONegro1.svg'
            }
            alt="ENO Logo"
            className={`h-7 md:h-11 ${
              isLogoBlocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={handleLogoClick}
          />

          {/* Burger Menu */}
          <div>
            <button
              className="text-blackEno menu-btn dark:bg-grayEno/60 dark:border-grayEno/60 dark:text-white"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded">
                {navOpen ? 'close' : 'menu'}
              </span>
            </button>
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
