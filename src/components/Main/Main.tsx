import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import * as Api from './../../utils/utils';
import { useEffect, useState } from 'react';

interface MainProps {
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
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

export default function Main({ pictures, authors, locations }: MainProps) {
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
    let filteredPictures = pictures;

    if (inputValue !== '') {
      Api.getSearchPictures(inputValue).then((data) => {
        setShowPictures(data);
      });
    }

    if (authorValue !== '') {
      Api.getSearchAuthorId(authorValue).then((data) => {
        const id = data[0] && data[0].id;
        if (id) {
          filteredPictures = filteredPictures.filter(
            (picture) => picture.authorId === id
          );
          setShowPictures(filteredPictures);
        }
      });
    }

    if (locationValue !== '') {
      Api.getSearchLocation(locationValue).then((data) => {
        const id = data[0].id && data[0].id;
        if (id) {
          filteredPictures = filteredPictures.filter(
            (picture) => picture.locationId === id
          );
          setShowPictures(filteredPictures);
        }
      });
    }

    if (fromDate !== '' || beforeDate !== '') {
      filteredPictures = pictures.filter((picture) => {
        const pictureDate = new Date(picture.created).getTime();
        if (fromDate !== '' && beforeDate !== '') {
          return (
            pictureDate >= new Date(fromDate).getTime() &&
            pictureDate <= new Date(beforeDate).getTime()
          );
        } else if (fromDate !== '') {
          return pictureDate >= new Date(fromDate).getTime();
        } else if (beforeDate !== '') {
          return pictureDate <= new Date(beforeDate).getTime();
        }
      });
      setShowPictures(filteredPictures);
    }

    if (
      inputValue === '' &&
      authorValue === '' &&
      locationValue === '' &&
      fromDate === '' &&
      beforeDate === ''
    ) {
      setShowPictures(pictures);
    }
  }, [pictures, inputValue, authorValue, locationValue, fromDate, beforeDate]);

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
      />
      <Gallery
        pictures={showPictures}
        authors={authors}
        locations={locations}
      />
    </div>
  );
}
