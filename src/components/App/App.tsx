import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from './../../utils/utils';
import { Pictures, Authors, Locations } from './../Main/Main';

export default function App() {
  const { app } = styles;
  const [pictures, setPictures] = useState<Pictures[]>([]);
  console.log('pictures: ', pictures);
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);

  useEffect(() => {
    Api.getPictures()
      .then((data) => {
        setPictures(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getAuthors()
      .then((data) => {
        setAuthors(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getLocations()
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={app}>
      <Header />
      <Main pictures={pictures} authors={authors} locations={locations} />
    </div>
  );
}
