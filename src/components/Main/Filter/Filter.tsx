import Input from '../Input/Input';
import Select from './../Select/index';
import styles from './Filter.module.scss';
import SelectDate from '../SelectDate/SelectDate';
import { useDispatch } from 'react-redux';
import { FILTER_DATA } from './../../utills/constants';
import {
  setAuthorValue,
  setCurrentPage,
  setLocationValue
} from '../../../store/features/slice/slice';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchAuthors, fetchLocations } from '../../../services/apiPainting';
import { Authors, Locations } from '../../../types/types';

export default function Filter() {
  const { filter } = styles;
  const [authorVal, setAuthorVal] = useState('');
  const [locationVal, setLocationVal] = useState('');
  const dispatch = useDispatch();

  const dataAuthors = useQuery('authors', fetchAuthors, { initialData: [] });
  const dataLocations = useQuery('locations', fetchLocations, {
    initialData: []
  });

  useEffect(() => {
    dispatch(setAuthorValue(authorVal));
  }, [authorVal]);

  useEffect(() => {
    dispatch(setLocationValue(locationVal));
  }, [locationVal]);

  // const setAuthorValueCallback = useCallback(() => {
  //   dispatch(setAuthorValue(authorVal));
  // }, [dispatch, authorVal]);

  // useEffect(() => {
  // }, [setAuthorValueCallback])

  // const setLocationValueCallback = useCallback(() => {
  //   dispatch(setLocationValue(locationVal));
  // }, [dispatch, locationVal]);

  // useEffect(() => {
  // }, [setLocationValueCallback])

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
