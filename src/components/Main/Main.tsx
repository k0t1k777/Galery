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
  const [inputValue, setInputValue] = useState('');
  const [showPictures, setShowPictures] = useState<Pictures[]>(pictures);
  console.log('showPictures: ', authors);

  useEffect(() => {
    setShowPictures(pictures);
  }, [pictures]);

  // Фильтрация на сервере
  // useEffect(() => {
  //   if (inputValue !== '') {
  //     Api.getSearchPictures(inputValue).then((data) => {
  //       setShowPictures(data);
  //     });
  //   } else {
  //     setShowPictures(pictures);
  //   }
  // }, [inputValue, pictures]);

  // Фильтрация на стороне клиента
  useEffect(() => {
    if (inputValue !== '') {
      const filteredPictures = pictures.filter((picture) =>
        picture.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setShowPictures(filteredPictures);
    } else {
      setShowPictures(pictures);
    }
  }, [inputValue, pictures]);

  return (
    <div className={main}>
      <Filter
        inputValue={inputValue}
        setInputValue={setInputValue}
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
