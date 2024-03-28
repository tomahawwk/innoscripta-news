import {FC} from 'react';
import {IButton} from './types';

const Button: FC<IButton> = ({children, primary, onClick, disabled}) => {
  return (
    <button
      disabled={disabled}
      className={`${primary ? 'bg-primary-main text-white' : 'bg-primary-light'} whitespace-nowrap pb-[6px]
      pt-[7px] px-sm rounded-xs uppercase font-medium tracking-wider text-[14px]`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
