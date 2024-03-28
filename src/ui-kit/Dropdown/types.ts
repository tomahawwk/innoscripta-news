interface IDropdown {
  list: IDropdownItem[];
  label: string;
  value: IDropdownItem | Record<string, any>;
  onChange(value: IDropdownItem | Record<string, any>): void;
}

type IDropdownItem = {
  title: string;
  value: string;
};

export type {IDropdown, IDropdownItem};
