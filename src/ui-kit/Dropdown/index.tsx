import {Select, Option} from '@material-tailwind/react';
import {FC} from 'react';
import {IDropdown} from './types';

const Dropdown: FC<IDropdown> = ({list, label, onChange, value}) => {
  const handleSelectChange = (value: string | undefined) => {
    const selected = list.find(option => option.value === value);
    selected && onChange(selected);
  };

  return (
    <div className="w-full md:w-[190px] custom-dropdown">
      <Select
        variant="outlined"
        label={label}
        placeholder={label}
        onChange={handleSelectChange}
        value={value?.value}>
        {list.map(item => (
          <Option key={item.value} value={item.value}>
            {item.title}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
