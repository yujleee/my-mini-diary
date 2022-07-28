import '../style/button.css';
import '../style/header.css';

const Header = ({ left, titleText, right }) => {
  return (
    <header className="header">
      <div className="left">{left}</div>
      <h1 className="title">{titleText}</h1>
      <div className="right">{right}</div>
    </header>
  );
};

export default Header;
