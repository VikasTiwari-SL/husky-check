import { Filters } from '../../App';
type FilterArgs = {
  filters: Filters;
  userInput: string;
};
export const useDropdown = ({ filters, userInput }: FilterArgs) => {
  const currentKeyDropdownGenerator = (key: string) => {};
  const currentValueDropdownGenerator = (key: string) => {};
  return { currentKeyDropdownGenerator, currentValueDropdownGenerator };
};
