import Filter from 'src/components/Main/Filter/Filter';
import Gallery from 'src/components/Main/Gallery/Gallery';
import styles from 'src/components/Main/Main.module.scss';
import Pagination from 'src/components/Pagination/index';
import { useSelector } from 'react-redux';
import { pagesAmount } from 'src/components/utills/constants';
import { useEffect, useState } from 'react';
import * as ApiQuery from 'src/services/api';
import { RootState } from 'src/store/features/slice/rootReducer';

export default function Main() {
  const { main } = styles;
  const [authorId, setAuthorId] = useState(0);
  const [locationId, setLocationId] = useState(0);
  const fromDate = useSelector((state: RootState) => state.picture.fromDate);
  const beforeDate = useSelector((state: RootState) => state.picture.beforeDate);
  const inputValue = useSelector((state: RootState) => state.picture.inputValue);
  const authorValue = useSelector((state: RootState) => state.picture.authorValue);
  const locationValue = useSelector(
    (state: RootState) => state.picture.locationValue
  );

  const dataAuthorId = ApiQuery.useGetSearchAuthorIdQuery(authorValue);
  const dataLocationId = ApiQuery.useGetSearchLocationIdQuery(locationValue);

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
