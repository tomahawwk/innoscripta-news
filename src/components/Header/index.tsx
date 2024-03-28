import Link from '../../ui-kit/Link';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center py-xs md:py-md">
      <div className="flex items-center gap-lg">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] animation-logo"
        />
        <Navigation />
      </div>
      <Link url="/cv-egor.pdf" title="Look_at_my_CV" />
    </div>
  );
};

export default Header;
