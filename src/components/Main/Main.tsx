import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/index';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/features/slice/slice';

interface MainProps {
  pictures: Pictures[];
  pagesAmount: number;
  authorValue: string;
  locationValue: string;
  fromDate: string;
  amount: number;
  beforeDate: string;
  inputValue: string;
  setFromDate: (type: string) => void;
  setInputValue: (type: string) => void;
  setBeforeDate: (type: string) => void;
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
  authorValue,
  locationValue,
  fromDate,
  beforeDate,
  amount,
  inputValue,
  setInputValue,
  setFromDate,
  setBeforeDate,
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
        inputValue={inputValue}
        setInputValue={setInputValue}
        authorValue={authorValue}
        locationValue={locationValue}
        fromDate={fromDate}
        setFromDate={setFromDate}
        beforeDate={beforeDate}
        setBeforeDate={setBeforeDate}
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
