import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './Filter.module.scss';
import { Authors, Locations } from './../../Main/Main';
import SelectDate from '../SelectDate/SelectDate';

interface FilterProps {
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  authors: Authors[];
  locations: Locations[];
  authorValue?: string;
  setAuthorValue?: (value: string) => void;
  locationValue?: string;
  setLocationValue?: (value: string) => void;
  fromDate?: string;
  setFromDate?: (value: string) => void;
  beforeDate?: string;
  setBeforeDate?: (value: string) => void;
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
}: FilterProps) {
  const { filter } = styles;

  return (
    <div className={filter}>
      <Input value={inputValue} setValue={setInputValue} />
      <Select
        text='Author'
        options={authors.map((author) => author.name)}
        value={authorValue}
        setValue={setAuthorValue}
      />
      <Select
        text='Location'
        options={locations.map((location) => location.location)}
        value={locationValue}
        setValue={setLocationValue}
      />
      <SelectDate
        text='Created'
        fromDate={fromDate}
        setFromDate={setFromDate}
        beforeDate={beforeDate}
        setBeforeDate={setBeforeDate}
      />
    </div>
  );
}
