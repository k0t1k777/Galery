import Input from '../Input/Input';
import Select from './../Select/index';
import styles from './Filter.module.scss';
import SelectDate from '../SelectDate/SelectDate';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_DATA } from './../../utills/constants';
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
  const authors = useSelector((state: SliceProps) => state.authors);
  const locations = useSelector((state: SliceProps) => state.locations);

  useEffect(() => {
    dispatch(setAuthorValue(authorVal));
  }, [authorVal]);

  useEffect(() => {
    dispatch(setLocationValue(locationVal));
  }, [locationVal]);

  function clearPages() {
    dispatch(setCurrentPage(1));
  }

  return (
    <div className={filter}>
      <Input clearPages={clearPages} />
      <Select
        text={FILTER_DATA.author}
        options={authors.map((author) => author.name)}
        value={authorVal}
        setValue={setAuthorVal}
        clearPages={clearPages}
      />
      <Select
        text={FILTER_DATA.location}
        options={locations.map((location) => location.location)}
        value={locationVal}
        setValue={setLocationVal}
        clearPages={clearPages}
      />
      <SelectDate text={FILTER_DATA.created} clearPages={clearPages} />
    </div>
  );
}
