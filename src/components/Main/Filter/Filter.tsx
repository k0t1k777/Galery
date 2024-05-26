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
import { useEffect, useState } from 'react';

interface FilterProps {
  clearPages: () => void;
}

export default function Filter({ clearPages }: FilterProps) {
  const { filter } = styles;
  const [authorVal, setAuthorVal] = useState('');
  const [locationVal, setLocationVal] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthorValue(authorVal));
  }, [authorVal]);

  useEffect(() => {
    dispatch(setLocationValue(locationVal));
  }, [locationVal]);

  const authors = useSelector((state: SliceProps) => state.authors);
  const locations = useSelector((state: SliceProps) => state.locations);

  return (
    <div className={filter}>
      <Input clearPages={clearPages} />
      <Select
        text='Author'
        options={authors.map((author) => author.name)}
        value={authorVal}
        setValue={setAuthorVal}
        clearPages={clearPages}
      />
      <Select
        text='Location'
        options={locations.map((location) => location.location)}
        value={locationVal}
        setValue={setLocationVal}
        clearPages={clearPages}
      />
      <SelectDate text='Created' clearPages={clearPages} />
    </div>
  );
}
