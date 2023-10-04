import React, { LegacyRef, useRef } from 'react';

type CustomInputProps = {
  setIsDropdownOpen: (value: React.SetStateAction<boolean>) => void;
  keyFromInputbox: React.Dispatch<React.SetStateAction<string>>;
  setInputCurrentValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function CustomInput({
  setIsDropdownOpen,
  keyFromInputbox,
  setInputCurrentValue,
}: CustomInputProps) {
  return <></>;
}
