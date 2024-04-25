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
  const [showPictures, setShowPictures] = useState<any>(pictures);
  console.log('showPictures: ', showPictures);

  useEffect(() => {
    setShowPictures(pictures);
  }, [pictures]);

  useEffect(() => {
    if (inputValue !== '') {
      Api.getSearchPictures(inputValue).then((data) => {
        console.log(data);
        setShowPictures(data.results);
      });
    } else {
      setShowPictures(pictures);
    }
  }, [inputValue]);

  return (
    <div className={main}>
      <Filter
        pictures={pictures}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Gallery pictures={pictures} authors={authors} locations={locations} />
    </div>
  );
}
