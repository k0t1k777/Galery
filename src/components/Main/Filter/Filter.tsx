import Input from '../Input/Input';
import Select from './../Select/index';
import styles from './Filter.module.scss';
import { Authors, Locations } from './../../Main/Main';
import SelectDate from '../SelectDate/SelectDate';

interface FilterProps {
  inputValue?: string;
  setInputValue?: (value: string) => void;
  authors: Authors[];
  locations: Locations[];
  authorValue: string;
  setAuthorValue: (value: string) => void;
  locationValue: string;
  setLocationValue: (value: string) => void;
  fromDate?: string;
  setFromDate?: (value: string) => void;
  beforeDate?: string;
  setBeforeDate?: (value: string) => void;
  isDarkTheme: string;
  clearPages: () => void;
}

export default function Filter({
  inputValue,
  setInputValue,
  authorValue,
  setAuthorValue,
  locationValue,
  setLocationValue,
  fromDate,
  setFromDate,
  beforeDate,
  setBeforeDate,
  authors,
  locations,
  isDarkTheme,
  clearPages,
}: FilterProps) {
  const { filter } = styles;

  return (
    <div className={filter}>
      <Input
        value={inputValue}
        setValue={setInputValue}
        isDarkTheme={isDarkTheme}
        clearPages={clearPages}
      />
      <Select
        text='Author'
        options={authors.map(author => author.name)}
        value={authorValue}
        isDarkTheme={isDarkTheme}
        setValue={setAuthorValue}
        clearPages={clearPages}     
      />
       <Select
        text='Location'
        options={locations.map((location) => location.location)}
        value={locationValue}
        setValue={setLocationValue}
        isDarkTheme={isDarkTheme}
        clearPages={clearPages}
      />
      <SelectDate
        text='Created'
        fromDate={fromDate}
        setFromDate={setFromDate}
        beforeDate={beforeDate}
        setBeforeDate={setBeforeDate}
        isDarkTheme={isDarkTheme}
        clearPages={clearPages}
      />
    </div>
  );
}
