import Input from '../Input/Input';
import Select from './../Select/index';
import styles from './Filter.module.scss';
import SelectDate from '../SelectDate/SelectDate';
import { useDispatch, useSelector } from 'react-redux';
import {
  SliceProps,
  setAuthorValue,
  setLocationValue,
} from '../../../store/features/slice/slice';

interface FilterProps {
  inputValue?: string;
  setInputValue?: (value: string) => void;
  authorValue: string;
  locationValue: string;
  fromDate?: string;
  setFromDate?: (value: string) => void;
  beforeDate?: string;
  setBeforeDate?: (value: string) => void;
  clearPages: () => void;
}

export default function Filter({
  inputValue,
  setInputValue,
  authorValue,
  locationValue,
  fromDate,
  setFromDate,
  beforeDate,
  setBeforeDate,
  clearPages,
}: FilterProps) {
  const { filter } = styles;

  const authors = useSelector((state: SliceProps) => state.authors);
  const locations = useSelector((state: SliceProps) => state.locations);
  // const dispatch = useDispatch();

  return (
    <div className={filter}>
      <Input
        value={inputValue}
        setValue={setInputValue}
        clearPages={clearPages}
      />
      <Select
        text='Author'
        options={authors.map((author) => author.name)}
        value={authorValue}
        setValue={setAuthorValue}
        clearPages={clearPages}
      />
      <Select
        text='Location'
        options={locations.map((location) => location.location)}
        value={locationValue}
        setValue={setLocationValue}
        clearPages={clearPages}
      />
      <SelectDate
        text='Created'
        fromDate={fromDate}
        setFromDate={setFromDate}
        beforeDate={beforeDate}
        setBeforeDate={setBeforeDate}
        clearPages={clearPages}
      />
    </div>
  );
}
