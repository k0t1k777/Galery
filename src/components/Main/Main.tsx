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
        const id = data[0].id;
        filteredPictures = filteredPictures.filter(
          (picture) => picture.authorId === id
        );
        setShowPictures(filteredPictures);
      });
    }

    if (locationValue !== '') {
      Api.getSearchLocation(locationValue).then((data) => {
        const id = data[0].id;
        filteredPictures = filteredPictures.filter(
          (picture) => picture.locationId === id
        );
        setShowPictures(filteredPictures);
      });
    }

    if (inputValue === '' && authorValue === '' && locationValue === '') {
      setShowPictures(pictures);
    }
  }, [inputValue, authorValue, locationValue, pictures]);

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
      />
      <Gallery
        pictures={showPictures}
        authors={authors}
        locations={locations}
      />
    </div>
  );
}
