import react from 'react';
const Header = (prop) => {
  return (
    <header>
      <h1>My App {prop.num}</h1>
    </header>
  );
};

export default Header;
