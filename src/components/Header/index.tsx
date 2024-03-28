import Link from '../../ui-kit/Link';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <div className="flex justify-between w-full py-md items-center">
      <div className="flex items-center gap-lg">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-[70px] h-[70px] animation-logo"
        />
        <Navigation />
      </div>
      <Link url="/cv-egor.pdf" title="Look_at_my_CV" />
    </div>
  );
};

export default Header;
