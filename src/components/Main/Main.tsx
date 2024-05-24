import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/index';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/features/slice/slice';

interface MainProps {
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
  isDarkTheme: string;
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
  setAuthorValue: (type: string) => void;
  setLocationValue: (type: string) => void;
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
  authors,
  locations,
  isDarkTheme,
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
  setAuthorValue,
  setLocationValue,
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
        setAuthorValue={setAuthorValue}
        locationValue={locationValue}
        setLocationValue={setLocationValue}
        authors={authors}
        locations={locations}
        fromDate={fromDate}
        setFromDate={setFromDate}
        beforeDate={beforeDate}
        setBeforeDate={setBeforeDate}
        isDarkTheme={isDarkTheme}
        clearPages={clearPages}
      />
      <Gallery
        pictures={showPictures}
        authors={authors}
        locations={locations}
      />
      <Pagination
        isDarkTheme={isDarkTheme}
        pagesAmount={Math.ceil(amount / pagesAmount)}
        onChange={onChange}
      />
    </div>
  );
}
