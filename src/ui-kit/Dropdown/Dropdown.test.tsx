import {fireEvent, render, screen} from '@testing-library/react';
import Dropdown from '.';

const mockList = [
  {value: '1', title: 'Option 1'},
  {value: '2', title: 'Option 2'},
  {value: '3', title: 'Option 3'},
];

describe('Dropdown component', () => {
  // it('renders dropdown with options', () => {
  //   render(
  //     <Dropdown
  //       list={mockList}
  //       label="Select an option"
  //     />,
  //   );
  //   setTimeout(() => {
  //     expect(screen.getByText('Option 1')).toBeInTheDocument();
  //     expect(screen.getByText('Option 2')).toBeInTheDocument();
  //     expect(screen.getByText('Option 3')).toBeInTheDocument();
  //   }, 100);
  // });
  //   it('calls onChange handler when an option is selected', () => {
  //     const handleChange = jest.fn();
  //     const {getByText} = render(
  //       <Dropdown
  //         list={mockList}
  //         label="Select an option"
  //         onChange={handleChange}
  //       />,
  //     );
  //     fireEvent.change(getByText('Option 2'));
  //     setTimeout(() => {
  //       expect(handleChange).toHaveBeenCalledTimes(4);
  //       //expect(handleChange).toHaveBeenCalledWith(mockList[0]);
  //     }, 100);
  //   });
});
