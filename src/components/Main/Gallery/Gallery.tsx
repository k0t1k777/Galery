import { useEffect, useState } from 'react';
import Picture from 'src/components/Main/Picture/Picture';
import styles from 'src/components/Main/Gallery/Gallery.module.scss';
import * as ApiQuery from 'src/services/api';
import { Authors, Locations, Pictures } from 'src/types/types';
import { useSelector } from 'react-redux';
import { pagesAmount } from 'src/components/utills/constants';
import { RootState } from 'src/store/features/slice/rootReducer';

export default function Gallery() {
  const { gallery } = styles;
  const currentPage = useSelector((state: RootState) => state.picture.currentPage);
  const authorValue = useSelector((state: RootState) => state.picture.authorValue);
  const locationValue = useSelector(
    (state: RootState) => state.picture.locationValue
  );
  const fromDate = useSelector((state: RootState) => state.picture.fromDate);
  const beforeDate = useSelector((state: RootState) => state.picture.beforeDate);
  const inputValue = useSelector((state: RootState) => state.picture.inputValue);
  const dataAuthorId = ApiQuery.useGetSearchAuthorIdQuery(authorValue);
  const dataLocationId = ApiQuery.useGetSearchLocationIdQuery(locationValue);
  const dataAuthors = ApiQuery.useGetAuthorsQuery('');
  const dataLocations = ApiQuery.useGetLocationsQuery('');
  const [authorId, setAuthorId] = useState(0);
  const [locationId, setLocationId] = useState(0);

  const dataPictures = ApiQuery.useGetPaginationQuery({
    currentPage,
    pagesAmount,
    inputValue,
    authorId,
    locationId,
    fromDate,
    beforeDate
  });

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

  return (
    <div className={gallery}>
      {dataPictures?.isSuccess &&
        dataPictures?.data?.map((item: Pictures) => {
          const author = dataAuthors.data.find(
            (author: Authors) => author.id === item.authorId
          );
          const place = dataLocations.data.find(
            (location: Locations) => location.id === item.locationId
          );
          return (
            <Picture
              key={item.id}
              image={item.imageUrl}
              namePicture={item.name}
              author={author ? author.name : 'Unknown author'}
              date={item.created}
              place={place ? place.location : 'Unknown location'}
            />
          );
        })}
    </div>
  );
}
