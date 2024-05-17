import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from '../../api/utils';
import { Pictures, Authors, Locations } from './../Main/Main';
import cn from 'classnames/bind';
import { pagesAmount } from '../../api/constants';

const cx = cn.bind(styles);

export default function App() {
  const [allPictures, setAllPictures] = useState<Pictures[]>([])
  const [pictures, setPictures] = useState<Pictures[]>([]);
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const toggleTheme = () => {
    const newTheme = isDarkTheme === 'dark' ? 'light' : 'dark';
    setIsDarkTheme(newTheme);
  };

  useEffect(() => {
    Api.getPictures()
      .then((data) => {
        setAllPictures(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    Api.getPagination(currentPage, pagesAmount)
      .then((data) => {
        setPictures(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, pagesAmount]);

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
        allPictures={allPictures}
        pictures={pictures}
        authors={authors}
        locations={locations}
        isDarkTheme={isDarkTheme}
        pagesAmount={pagesAmount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}