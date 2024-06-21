import Picture from '../Picture/Picture';
import styles from './Gallery.module.scss';
import * as ApiQuery from '../../../services/api';
import { Authors, Locations, Pictures } from '../../../types/types';
import { useSelector } from 'react-redux';
import {
  //  Gallery_DATA,
  pagesAmount
} from '../../utills/constants';
import cn from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = cn.bind(styles);

export default function Gallery() {
  const { gallery, gallery__container } = styles;
  const currentPage = useSelector((state: any) => state.counter.currentPage);
  const authorValue = useSelector((state: any) => state.counter.authorValue);
  const locationValue = useSelector(
    (state: any) => state.counter.locationValue
  );
  const fromDate = useSelector((state: any) => state.counter.fromDate);
  const beforeDate = useSelector((state: any) => state.counter.beforeDate);
  const inputValue = useSelector((state: any) => state.counter.inputValue);
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);
  const dataAuthorId = ApiQuery.useGetSearchAuthorIdQuery(authorValue);
  const dataLocationId = ApiQuery.useGetSearchLocationIdQuery(locationValue);
  const dataAuthors = ApiQuery.useGetAuthorsQuery('');
  const dataLocations = ApiQuery.useGetLocationsQuery('');

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

  const dataPictures = ApiQuery.useGetPaginationQuery({
    currentPage,
    pagesAmount,
    inputValue,
    authorId,
    locationId,
    fromDate,
    beforeDate
  });

  return (
    <div className={gallery}>
      {dataPictures?.isSuccess ? (
        dataPictures?.data.map((item: Pictures) => {
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
        })
      ) : (
        <div className={gallery__container}>
          <p
            className={cx('gallery__nothing', {
              'gallery__nothing--dark': isDarkTheme === 'dark'
            })}>
            {/* {Gallery_DATA.nothing} */}
          </p>
        </div>
      )}
    </div>
  );
}

// return (
//   <div className={gallery}>
//     {dataPictures?.data?.map((item: Pictures) => {
//         const author = dataAuthors.data.find(
//           (author: Authors) => author.id === item.authorId
//         );
//         const place = dataLocations.data.find(
//           (location: Locations) => location.id === item.locationId
//         );
//         return (
//           <Picture
//             key={item.id}
//             image={item.imageUrl}
//             namePicture={item.name}
//             author={author ? author.name : 'Unknown author'}
//             date={item.created}
//             place={place ? place.location : 'Unknown location'}
//           />
//         );
//       })
//    }
//   </div>
// );
