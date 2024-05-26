import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/index';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/features/slice/slice';

interface MainProps {
  pictures: Pictures[];
  pagesAmount: number;
  amount: number;
}

export interface Pictures {
  id: string;
  imageUrl: string;
  name: string;
  authorId: string;
  created: string;
  locationId: string;
}

export interface Authors {
  id: string;
  name: string;
}

export interface Locations {
  id: string;
  location: string;
}

export default function Main({
  pictures,
  pagesAmount,
  amount,
}: MainProps) {
  const { main } = styles;
  const [showPictures, setShowPictures] = useState<Pictures[]>(pictures);

  const dispatch = useDispatch();

  function clearPages() {
    dispatch(setCurrentPage(1));
  }

  useEffect(() => {
    setShowPictures(pictures);
  }, [pictures]);

  const onChange = (currentPage: number) => {
    dispatch(setCurrentPage(currentPage));
  };

  return (
    <div className={main}>
      <Filter
        clearPages={clearPages}
      />
      <Gallery
        pictures={showPictures}
      />
      <Pagination
        pagesAmount={Math.ceil(amount / pagesAmount)}
        onChange={onChange}
      />
    </div>
  );
}
