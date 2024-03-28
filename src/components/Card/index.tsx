import {FC} from 'react';
import {IArticle} from '../../store/models/IArticle';
import LazyImage from '../../ui-kit/LazyImage';
import formatDateString from '../../utils/formatDateString';

const Card: FC<IArticle> = ({
  title,
  author,
  description,
  link,
  image,
  publishedAt,
}) => {
  return (
    <a href={link} target="_blank" className="w-full grid gap-sm">
      <div className="w-full h-[210px] bg-no-photo bg-cover bg-center rounded-xs overflow-hidden relative">
        <span className="absolute top-sm left-sm z-10 text-white bg-primary-main text-[14px] px-[8px] py-[2px] rounded-[3px]">
          {formatDateString(publishedAt)}
        </span>
        <LazyImage src={image} className="w-full h-full object-cover" />
      </div>
      <div className="grid gap-xs">
        <div className="grid gap-xs">
          <div className="text-[20px] font-medium leading-6 line-clamp-1">
            {title}
          </div>
          <p className="text-[14px] line-clamp-3">{description}</p>
        </div>
        {author && (
          <div className="flex items-center gap-xs">
            <div className="overflow-hidden w-[34px] min-w-[34px] h-[34px] rounded-full bg-primary-light border-2">
              <LazyImage src="/images/author.png" alt="author" />
            </div>

            <p className="text-[14px] line-clamp-1">{author}</p>
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;
