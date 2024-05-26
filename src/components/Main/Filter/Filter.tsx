import Input from '../Input/Input';
import Select from './../Select/index';
import styles from './Filter.module.scss';
import SelectDate from '../SelectDate/SelectDate';
import { useDispatch, useSelector } from 'react-redux';
import {
  SliceProps,
  setAuthorValue,
  setCurrentPage,
  setLocationValue,
} from '../../../store/features/slice/slice';
import { useEffect, useState } from 'react';

export default function Filter() {
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
  const authorValue = useSelector((state: SliceProps) => state.authorValue);
  const locationVaue = useSelector((state: SliceProps) => state.locationValue);

  function clearPages() {
    dispatch(setCurrentPage(1));
  }

  return (
    <div className={filter}>
      <Input clearPages={clearPages} />
      <Select
        text='Author'
        options={authors.map((author) => author.name)}
        value={authorValue}
        setValue={setAuthorVal}
        clearPages={clearPages}
      />
      <Select
        text='Location'
        options={locations.map((location) => location.location)}
        value={locationVaue}
        setValue={setLocationVal}
        clearPages={clearPages}
      />
      <SelectDate text='Created' clearPages={clearPages} />
    </div>
  );
}
