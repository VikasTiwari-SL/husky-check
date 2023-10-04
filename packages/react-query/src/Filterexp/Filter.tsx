import React, { useMemo, useState, LegacyRef, useRef, useEffect } from 'react';
import './filter.css';
import { Filters } from '../App';
import Dropdown from './Dropdown';
import { useFilter } from './hooks/useFilter';
type Filtersprop = {
  filters: Filters;
  refresh: () => void;
};

export default function Filter({ filters, refresh }: Filtersprop) {
  const [isDropdownopen, setIsDropdownOpen] = useState(false);
  const [input, setInput] = useState('');
  const [validFilterKey, setValidFilterKey] = useState('');
  const divRef = useRef<HTMLDivElement>();
  const {
    setValueToDivElement,
    generateCurrentKeyValuePair,
    keyVerifier,
    generateCurrentFilter,
  } = useFilter({
    userInput: input,
    filters,
  });
  const keysVerifier = useMemo(() => {
    return filters.reduce(
      (acc, elm) => {
        acc[elm.urlKey] = true;
        return acc;
      },
      {} as { [key: string]: boolean }
    );
  }, []);
  const currentKeyValuePair = useMemo(() => {
    return generateCurrentKeyValuePair(input);
  }, [input]);
  const selectedFilter = useMemo(() => {
    return generateCurrentFilter(validFilterKey);
  }, [validFilterKey]);

  const handleinputchange = (e: React.SyntheticEvent) => {
    let { value } = e.target as HTMLInputElement;
    setInput((prev) => (prev = value));
    setValueToDivElement(value, divRef);
  };
  const clearInputElement = () => {
    setInput('');
    setValueToDivElement(' ', divRef);
  };
  useEffect(() => {
    let currentkey = currentKeyValuePair.currentKey;
    let verified = keyVerifier(currentkey, keysVerifier);
    if (verified && !validFilterKey) {
      setValidFilterKey(currentkey);
    } else if (!verified && validFilterKey) {
      setValidFilterKey('');
    }
  }, [input]);
  console.log({ currentKeyValuePair, selectedFilter });
  console.log(validFilterKey);
  return (
    <div>
      <div>
        <span>filtericon</span>
        <span id="input-root">
          <div
            ref={divRef as LegacyRef<HTMLDivElement>}
            id="input-intel-div"></div>
          <input
            type="text"
            value={input}
            onFocus={() => setIsDropdownOpen(true)}
            onChange={(e) => handleinputchange(e)}
          />
        </span>
        <span onClick={() => clearInputElement()}>closeicon</span>
      </div>

      <Dropdown
        keysVerifier={keysVerifier}
        isDropdownopen={isDropdownopen}
        filters={filters}
        input={currentKeyValuePair.currentKey}
        setValidFilterKey={setValidFilterKey}
      />
    </div>
  );
}
