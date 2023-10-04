import React from 'react';
import { Filters } from '../App';

type KeyverifierType = {
  [key: string]: boolean;
};
type Dropdownprops = {
  keysVerifier: KeyverifierType;
  isDropdownopen: boolean;
  filters: Filters;
  input: string;

  setValidFilterKey: React.Dispatch<React.SetStateAction<string>>;
};

export default function Dropdown({
  isDropdownopen,
  filters,
  input,
  keysVerifier,
  setValidFilterKey,
}: Dropdownprops) {
  const updatedFilterKeys = !keysVerifier[input]
    ? filters.filter((elm) => {
        if (elm.urlKey.startsWith(input)) {
          return elm;
        }
      })
    : [];
  const updatedFilterValues = keysVerifier[input]
    ? filters.filter((elm) => {
        if (elm.urlKey === input) {
          return elm;
        }
      })[0].options
    : [];

  return (
    <>
      {isDropdownopen ? (
        <div>
          {updatedFilterKeys.length !== 0 &&
            updatedFilterKeys.map((elm, index) => {
              return (
                <div key={index} onClick={() => setValidFilterKey(elm.urlKey)}>
                  {elm.urlKey}
                </div>
              );
            })}
          {updatedFilterValues.length !== 0 &&
            updatedFilterValues.map((elm, index) => {
              return <div key={index}>{elm.displayName}</div>;
            })}
        </div>
      ) : null}
    </>
  );
}
