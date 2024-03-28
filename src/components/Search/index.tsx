import {Input} from '@material-tailwind/react';
import {FC, useEffect, useRef} from 'react';
import {ISearch} from './types';

const Search: FC<ISearch> = ({value, onChange}) => {
  const searchField = useRef<any>(null);

  useEffect(() => {
    searchField.current.querySelector('input').value = value;
  }, [value]);

  return (
    <div className="search w-full">
      <Input
        variant="standard"
        ref={searchField}
        label="Search news"
        color="brown"
        onChange={onChange}
        crossOrigin={undefined}
      />
    </div>
  );
};

export default Search;
