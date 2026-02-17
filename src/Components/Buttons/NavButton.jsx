import './NavButton.css';

const routeMap = {
  home: '#home',
  myToken: 'https://token.eno.network/',
  myWhitepaper: 'https://docs.eno.network/',
  myBlogs: 'https://blog.eno.network/',
};

const getButtonText = (showButton) => {
  switch (showButton) {
    case 'home':
      return 'Home';
    case 'myToken':
      return 'Token';
    case 'myWhitepaper':
      return 'Whitepaper';
    case 'myBlogs':
      return 'Blog';
    default:
      return '';
  }
};

const NavButton = ({ showButton }) => {
  const path = routeMap[showButton];

  const handleNavigation = (e) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
  };

  if (path.startsWith('http')) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="btn dark:text-white"
      >
        {getButtonText(showButton)}
      </a>
    );
  }

  return (
    <a href={path} onClick={handleNavigation} className="btn dark:text-white">
      {getButtonText(showButton)}
    </a>
  );
};

export default NavButton;
