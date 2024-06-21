import Input from '../Input/Input';
import Select from './../Select/index';
import styles from './Filter.module.scss';
import SelectDate from '../SelectDate/SelectDate';
import { useDispatch } from 'react-redux';
import * as ApiQuery from '../../../services/api';
import { FILTER_DATA } from './../../utills/constants';
import { useCallback, useEffect, useState } from 'react';
import { Authors, Locations } from '../../../types/types';
import {
  setAuthorValue,
  setCurrentPage,
  setLocationValue
} from '../../../store/features/slice/slice';

export default function Filter() {
  const { filter } = styles;
  const [authorVal, setAuthorVal] = useState('');
  const [locationVal, setLocationVal] = useState('');
  const dataAuthors = ApiQuery.useGetAuthorsQuery('');
  const dataLocations = ApiQuery.useGetLocationsQuery('');
  const dispatch = useDispatch();

  const setAuthorValueCallback = useCallback(() => {
    dispatch(setAuthorValue(authorVal));
  }, [authorVal]);

  useEffect(() => {
    setAuthorValueCallback();
  }, [setAuthorValueCallback]);

  const setLocationValueCallback = useCallback(() => {
    dispatch(setLocationValue(locationVal));
  }, [locationVal]);

  useEffect(() => {
    setLocationValueCallback();
  }, [setLocationValueCallback]);

  function clearPages() {
    dispatch(setCurrentPage(1));
  }

  return (
    <div className={filter}>
      <Input clearPages={clearPages} />
      <Select
        text={FILTER_DATA.author}
        options={dataAuthors.data?.map((author: Authors) => author.name)}
        value={authorVal}
        setValue={setAuthorVal}
        clearPages={clearPages}
      />
      <Select
        text={FILTER_DATA.location}
        options={dataLocations.data?.map(
          (location: Locations) => location.location
        )}
        value={locationVal}
        setValue={setLocationVal}
        clearPages={clearPages}
      />
      <SelectDate text={FILTER_DATA.created} clearPages={clearPages} />
    </div>
  );
}
