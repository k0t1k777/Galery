import Input from '../Input/Input';
import Select from './../Select/index';
import styles from './Filter.module.scss';
import SelectDate from '../SelectDate/SelectDate';
import { useSelector } from 'react-redux';
import {
  SliceProps,
  setAuthorValue,
  setLocationValue,
} from '../../../store/features/slice/slice';

interface FilterProps {
  authorValue: string;
  locationValue: string;
  clearPages: () => void;
}

export default function Filter({
  authorValue,
  locationValue,
  clearPages,
}: FilterProps) {
  const { filter } = styles;

  const authors = useSelector((state: SliceProps) => state.authors);
  const locations = useSelector((state: SliceProps) => state.locations);
  // const dispatch = useDispatch();

  return (
    <div className={filter}>
      <Input
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
        clearPages={clearPages}
      />
    </div>
  );
}
