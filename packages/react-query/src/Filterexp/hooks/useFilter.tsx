import { Filters } from '../../App';
type FilterArgs = {
  filters: Filters;
  userInput: string;
};
export const useFilter = ({ filters, userInput }: FilterArgs) => {
  const keyStatus = (key: string) => {};
  const keyVerifier = (
    key: string,
    keysVerifier: {
      [key: string]: boolean;
    }
  ): boolean => {
    return !!keysVerifier[key];
  };
  const setValueToDivElement = (
    key: string,
    divRef: React.MutableRefObject<HTMLDivElement | undefined>
  ) => {
    divRef.current ? (divRef.current.textContent = key) : null;
  };
  const generateCurrentKeyValuePair = (key: string) => {
    let returnObject = { currentKey: '', currentVal: '' };
    let keyValuePair = key?.split(' ').slice(-1);
    if (keyValuePair) {
      let currentInputKey = keyValuePair[0]?.split(':')[0];
      let currentInputValue = keyValuePair[0]?.split(':')[1] || '';
      returnObject['currentKey'] = currentInputKey;
      returnObject['currentVal'] = currentInputValue;
    }
    return returnObject;
  };
  const generateCurrentFilter = (key: string) => {
    return filters.filter((elm) => {
      if (elm.urlKey === key) {
        return elm;
      }
    })[0];
  };

  return {
    keyStatus,
    keyVerifier,
    setValueToDivElement,
    generateCurrentKeyValuePair,
    generateCurrentFilter,
  };
};
