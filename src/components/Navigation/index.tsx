import Link from '../../ui-kit/Link';

const Navigation = () => {
  return (
    <nav className="flex gap-md items-center lg:flex hidden">
      <div className="animation-fade-y animation-delay-1">
        <Link
          url="https://github.com/tomahawwk/innoscripta-news"
          title="Task_Github"
        />
      </div>
      <div className="animation-fade-y animation-delay-2">
        <Link
          url="https://www.linkedin.com/in/egor-stulenkov-29867523a/"
          title="LinkedIn"
        />
      </div>
    </nav>
  );
};

export default Navigation;
