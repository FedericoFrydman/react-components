import React, { useState, useEffect } from 'react';
import { Input } from '../../molecules/input/Input';

//import 'regenerator-runtime/runtime';

interface SearchInputProps {
  globalFilter: string | number | undefined;
  setGlobalFilter: (params: unknown) => unknown;
  debounce?: number;
}

export const SearchInput = ({ globalFilter, setGlobalFilter, debounce = 500 }: SearchInputProps) => {
  const [value, setValue] = useState(globalFilter);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGlobalFilter(value || undefined);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  const id = 'search-field';

  return (
    <Input
      name={id}
      placeholder={`Search`}
      aria-label={`${id}_input`}
      value={value || ''}
      onChange={(e) => {
        setValue(e.currentTarget.value || undefined);
      }}
    />
  );
};
