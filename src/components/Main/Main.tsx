import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import * as Api from './../../utils/utils';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/index';

interface MainProps {
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
  isDarkTheme: string;
  paginationPages: number;
  setCurrentPage: () => void;
  currentPage: number;
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
  setCurrentPage,
  paginationPages,
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
      Api.getSearchPictures(inputValue).then((data) => {
        setShowPictures(data);
      });
    }
  }, [inputValue]);

  useEffect(() => {
    if (authorValue !== '') {
      setInputValue('');
      setLocationValue('');
      setFromDate('');
      setBeforeDate('');
      Api.getSearchAuthorId(authorValue).then((data) => {
        const id = data[0] && data[0].id;
        if (id) {
          pictures = pictures.filter((picture) => picture.authorId === id);
          setShowPictures(pictures);
        }
      });
    }
  }, [authorValue]);

  useEffect(() => {
    if (locationValue !== '') {
      setInputValue('');
      setAuthorValue('');
      setFromDate('');
      setBeforeDate('');
      Api.getSearchLocation(locationValue).then((data) => {
        const id = data[0] && data[0].id;
        if (id) {
          pictures = pictures.filter((picture) => picture.locationId === id);
          setShowPictures(pictures);
        }
      });
    }
  }, [locationValue]);

  useEffect(() => {
    if (fromDate !== '') {
      setInputValue('');
      setAuthorValue('');
      setLocationValue('');
      setBeforeDate('');
      Api.getSearchCreate(fromDate).then((data) => {
        setShowPictures(data);
        pictures = pictures.filter((picture) => {
          const pictureDate = new Date(picture.created);
          const fromDateObj = new Date(fromDate);
          if (fromDate !== '') {
            return pictureDate >= fromDateObj;
          }
        });
        setShowPictures(pictures);
      });
    }
  }, [fromDate]);

  useEffect(() => {
    if (beforeDate !== '') {
      setInputValue('');
      setAuthorValue('');
      setLocationValue('');
      setFromDate('');
      Api.getSearchCreate(beforeDate).then((data) => {
        setShowPictures(data);
        pictures = pictures.filter((picture) => {
          const pictureDate = new Date(picture.created);
          const beforeDateObj = new Date(beforeDate);
          if (beforeDate !== '') {
            return pictureDate <= beforeDateObj;
          }
        });
        setShowPictures(pictures);
      });
    }
  }, [beforeDate]);

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

  const handlePageChange = (currentPage: any) => {
    setCurrentPage(currentPage);
  };

  const pages = [];

  pages.push(
    <button
      key='first'
      onClick={() => handlePageChange(1)}
      style={{ width: '50px', height: '50px' }}
    >
      First
    </button>
  );

  if (currentPage > 1) {
    pages.push(
      <button
        key='back'
        onClick={() => handlePageChange(currentPage - 1)}
        style={{ width: '50px', height: '50px' }}
      >
        Back
      </button>
    );
  }

  for (let i = 1; i <= paginationPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        style={{ width: '50px', height: '50px' }}
      >
        {i}
      </button>
    );
  }

  if (currentPage < paginationPages) {
    pages.push(
      <button
        key='next'
        onClick={() => handlePageChange(currentPage + 1)}
        style={{ width: '50px', height: '50px' }}
      >
        Next
      </button>
    );
  }

  pages.push(
    <button
      key='last'
      onClick={() => handlePageChange(paginationPages)}
      style={{ width: '50px', height: '50px' }}
    >
      Last
    </button>
  );

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
      {/* <Pagination
        isDarkTheme={isDarkTheme}
        pagesAmount={pagesAmount}
        currentPage={currentPage}
      /> */}

      <div
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {pages}
      </div>
    </div>
  );
}
