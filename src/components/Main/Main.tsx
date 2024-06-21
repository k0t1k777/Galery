import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import Pagination from '../Pagination/index';
import { useSelector } from 'react-redux';
import { pagesAmount } from '../utills/constants';
import { useEffect, useState } from 'react';
import * as ApiQuery from '../../services/api';

export default function Main() {
  const { main } = styles;

  const authorValue = useSelector((state: any) => state.counter.authorValue);
  const locationValue = useSelector(
    (state: any) => state.counter.locationValue
  );

  const fromDate = useSelector((state: any) => state.counter.fromDate);
  const beforeDate = useSelector((state: any) => state.counter.beforeDate);
  const inputValue = useSelector((state: any) => state.counter.inputValue);
  const dataAuthorId = ApiQuery.useGetSearchAuthorIdQuery(authorValue);
  const dataLocationId = ApiQuery.useGetSearchLocationIdQuery(locationValue);

  const [authorId, setAuthorId] = useState(0);
  const [locationId, setLocationId] = useState(0);

  useEffect(() => {
    if (dataAuthorId.isSuccess) {
      setAuthorId(dataAuthorId.data[0]?.id);
    }
  }, [dataAuthorId]);

  useEffect(() => {
    if (dataLocationId.isSuccess) {
      setLocationId(dataLocationId.data[0]?.id);
    }
  }, [dataLocationId]);

  const amount = ApiQuery.useGetPaginationAmountQuery({
    inputValue,
    authorId,
    locationId,
    fromDate,
    beforeDate
  });

  return (
    <div className={main}>
      <Filter />
      <Gallery />
      <Pagination pagesAmount={Math.ceil(amount?.data?.length / pagesAmount)} />
    </div>
  );
}
