import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/index';

interface MainProps {
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
  isDarkTheme: string;
  currentPage: number;
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
  setCurrentPage: (type: number) => void;
}

export interface Pictures {
  pictures: Pictures[];
  id: string;
  imageUrl: string;
  name: string;
  authorId: string;
  created: string;
  locationId: string;
}

export interface Authors {
  authors: Authors[];
  id: string;
  name: string;
}

export interface Locations {
  locations: Locations[];
  id: string;
  location: string;
}

export default function Main({
  pictures,
  authors,
  locations,
  isDarkTheme,
  currentPage,
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
  setCurrentPage,
}: MainProps) {
  const { main } = styles;
  const [showPictures, setShowPictures] = useState<Pictures[]>(pictures);

  useEffect(() => {
    setShowPictures(pictures);
  }, [pictures]);

  const onChange = (currentPage: number) => {
    setCurrentPage(currentPage);
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
      />
      <Gallery
        pictures={showPictures}
        authors={authors}
        locations={locations}
      />
      <Pagination
        isDarkTheme={isDarkTheme}
        pagesAmount={Math.ceil(amount / pagesAmount)}
        currentPage={currentPage}
        onChange={onChange}
      />
    </div>
  );
}
