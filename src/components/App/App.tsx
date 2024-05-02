import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from './../../utils/utils';
import { Pictures, Authors, Locations } from './../Main/Main';
import cn from 'classnames/bind';
import { pagesAmount } from './../../utils/constants';

const cx = cn.bind(styles);

export default function App() {
  const [pictures, setPictures] = useState<Pictures[]>([]);
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState('light');
  const [paginationPages, setPaginationPages] = useState(0)

  const toggleTheme = () => {
    const newTheme = isDarkTheme === 'dark' ? 'light' : 'dark';
    setIsDarkTheme(newTheme);
  };

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Api.getPagination(currentPage, pagesAmount)
      .then((data) => {
        setPictures(data);
        setPaginationPages(data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, pagesAmount]);

  // useEffect(() => {
  //   Api.getPictures()
  //     .then((data) => {
  //       setPictures(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

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
        paginationPages={paginationPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
