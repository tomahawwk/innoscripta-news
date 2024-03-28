import Link from '../../ui-kit/Link';

const Navigation = () => {
  return (
    <nav className="flex gap-md items-center">
      <Link
        url="https://github.com/tomahawwk/innoscripta-news"
        title="Task_Github"
      />
      <Link
        url="https://www.linkedin.com/in/egor-stulenkov-29867523a/"
        title="LinkedIn"
      />
    </nav>
  );
};

export default Navigation;
