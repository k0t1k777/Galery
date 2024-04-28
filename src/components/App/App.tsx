import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from './../../utils/utils';
import { Pictures, Authors, Locations } from './../Main/Main';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export default function App() {
  const [pictures, setPictures] = useState<Pictures[]>([]);
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState('light');
  console.log('isDarkTheme: ', isDarkTheme);

  const toggleTheme = () => {
    const newTheme = isDarkTheme === 'dark' ? 'light' : 'dark';
    setIsDarkTheme(newTheme);
  };

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
    <div className={cx('App', { 'App--dark': isDarkTheme === 'dark' })}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Main
        pictures={pictures}
        authors={authors}
        locations={locations}
        isDarkTheme={isDarkTheme}
      />
    </div>
  );
}
