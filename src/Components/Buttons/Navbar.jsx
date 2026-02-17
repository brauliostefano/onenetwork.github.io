import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, NavLink } from 'react-router-dom';
import { Home, Badge, FileText, Logs } from 'lucide-react';

export default function Navbar({ navOpen, setNavOpen }) {
  const location = useLocation();
  const activeBox = useRef(null);
  const navRefs = useRef({});

  // Mueve el highlight a la sección activa
  useEffect(() => {
    const activeLink = navRefs.current[location.pathname];
    if (activeLink && activeBox.current) {
      Object.assign(activeBox.current.style, {
        top: `${activeLink.offsetTop}px`,
        left: `${activeLink.offsetLeft}px`,
        width: `${activeLink.offsetWidth}px`,
        height: `${activeLink.offsetHeight}px`,
        opacity: '1',
        visibility: 'visible',
      });
    } else if (activeBox.current) {
      activeBox.current.style.opacity = '0';
      activeBox.current.style.visibility = 'hidden';
    }
  }, [location.pathname]);

  const handleClose = () => setNavOpen(false);

  const navItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: 'Home',
      link: '#home',
      isAnchor: true,
    },
    {
      icon: <Badge className="h-5 w-5" />,
      label: 'Token',
      link: 'https://token.eno.network/',
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: 'Whitepaper',
      link: 'https://docs.eno.network/',
    },
    {
      icon: <Logs className="h-5 w-5" />,
      label: 'Blogs',
      link: 'https://blog.eno.network/',
    },
  ];

  return (
    <nav className={`navbar dark:bg-grayEno ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ icon, label, link, isAnchor }, idx) => {
        // Scroll interno a ancla
        if (isAnchor) {
          return (
            <button
              key={idx}
              onClick={() => {
                const el = document.getElementById(link.slice(1));
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-blackEno dark:text-white transition-all duration-300"
            >
              {icon}
              <span>{label}</span>
            </button>
          );
        }

        // Enlaces externos
        if (/^https?:\/\//.test(link)) {
          return (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-blackEno dark:text-white transition-all duration-300"
            >
              {icon}
              <span>{label}</span>
            </a>
          );
        }

        // Rutas internas
        return (
          <NavLink
            key={idx}
            to={link}
            end
            ref={(el) => (navRefs.current[link] = el)}
            onClick={() => setTimeout(handleClose, 200)}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300${
                isActive
                  ? ' text-purpleChoose font-semibold dark:text-shadyGladeBM'
                  : ' text-blackEno dark:text-white'
              }`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        );
      })}
      <div
        ref={activeBox}
        className="active-box absolute bg-shadyGlade/20 rounded-md transition-all duration-300 pointer-events-none"
      />
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};
