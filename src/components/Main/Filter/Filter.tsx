import Input from 'src/components/ui/Input/Input';
import Select from 'src/components/ui/Select/index';
import styles from 'src/components/Main/Filter/Filter.module.scss';
import SelectDate from 'src/components/ui/SelectDate/SelectDate';
import { useDispatch } from 'react-redux';
import * as ApiQuery from 'src/services/api';
import { FILTER_DATA } from 'src/components/utills/constants';
import { useCallback, useEffect, useState } from 'react';
import { Authors, Locations } from 'src/types/types';
import {
  setAuthorValue,
  setCurrentPage,
  setLocationValue
} from 'src/store/features/slice/slice';

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
