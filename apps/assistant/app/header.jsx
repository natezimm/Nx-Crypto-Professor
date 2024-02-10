import './header.css';
import 'font-awesome/css/font-awesome.min.css';

export const Header = () => {
  return (
    <>
      <div className="crypto-navbar">
        <h1 className="crypto-title">Crypto Professor</h1>
        <a href="https://twitter.com/defi_beats" className="fa fa-2x fa-twitter-square twitter"></a>
      </div>
    </>
  );
};