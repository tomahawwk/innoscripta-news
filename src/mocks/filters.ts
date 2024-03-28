import {IDropdownItem} from '../ui-kit/Dropdown/types';

const categories: IDropdownItem[] = [
  {title: 'Sports', value: 'sports'},
  {title: 'Health', value: 'health'},
  {title: 'Travel', value: 'travel'},
  {title: 'Politics', value: 'politics'},
  {title: 'Business', value: 'business'},
];

const sources: IDropdownItem[] = [
  {title: 'The New York Times', value: 'The New York Times'},
  {title: 'BBC', value: 'https://www.bbc.co.uk'},
  {title: 'The Atlantic', value: 'theatlantic.com-1'},
];

const date: IDropdownItem[] = [
  {title: 'Newest first', value: 'relevance'},
  {title: 'Oldest first', value: 'newest'},
];

export {categories, sources, date};
