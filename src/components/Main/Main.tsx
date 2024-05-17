import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import * as Api from '../../api/utils';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/index';

interface MainProps {
  allPictures: Pictures[];
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
  isDarkTheme: string;
  currentPage: number;
  pagesAmount: number;
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
  allPictures,
  pictures,
  authors,
  locations,
  isDarkTheme,
  currentPage,
  pagesAmount,
  setCurrentPage,
}: MainProps) {
  const { main } = styles;
  const [showPictures, setShowPictures] = useState<Pictures[]>(pictures);
  const [inputValue, setInputValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [beforeDate, setBeforeDate] = useState('');

  useEffect(() => {
    setShowPictures(pictures);
  }, [pictures]);

  useEffect(() => {
    if (inputValue !== '') {
      setAuthorValue('');
      setLocationValue('');
      setFromDate('');
      setBeforeDate('');
      Api.getSearchPictures(inputValue)
        .then((data) => {
          setShowPictures(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [inputValue]);

  useEffect(() => {
    if (authorValue !== '') {
      setInputValue('');
      setLocationValue('');
      setFromDate('');
      setBeforeDate('');
      Api.getSearchAuthorId(authorValue)
        .then((data) => {
          const id = data[0] && data[0].id;
          if (id) {
            pictures = allPictures.filter((picture) => picture.authorId === id);
            setShowPictures(pictures);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [authorValue]);

  useEffect(() => {
    if (locationValue !== '') {
      setInputValue('');
      setAuthorValue('');
      setFromDate('');
      setBeforeDate('');
      Api.getSearchLocation(locationValue)
        .then((data) => {
          const id = data[0] && data[0].id;
          if (id) {
            pictures = allPictures.filter(
              (picture) => picture.locationId === id
            );
            setShowPictures(pictures);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [locationValue]);

  useEffect(() => {
    setInputValue('');
    setAuthorValue('');
    setLocationValue('');
    if (fromDate !== '' || beforeDate !== '') {
      let filteredPictures = allPictures;
      if (fromDate !== '') {
        filteredPictures = filteredPictures.filter(
          (picture) => picture.created >= fromDate
        );
      }
      if (beforeDate !== '') {
        filteredPictures = filteredPictures.filter(
          (picture) => picture.created <= beforeDate
        );
      }
      Api.getSearchCreate(fromDate, beforeDate)
        .then((data) => {
          setShowPictures(data);
          setShowPictures(filteredPictures);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [fromDate, beforeDate]);

  useEffect(() => {
    if (
      inputValue === '' &&
      authorValue === '' &&
      locationValue === '' &&
      fromDate === '' &&
      beforeDate === ''
    ) {
      setShowPictures(pictures);
    }
  }, [inputValue, authorValue, locationValue, beforeDate, fromDate]);

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
        pagesAmount={Math.ceil(allPictures.length / pagesAmount)}
        currentPage={currentPage}
        onChange={onChange}
      />
    </div>
  );
}