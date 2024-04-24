import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';
import * as Api from './../../utils/utils'

export default function App() {
  const { app } = styles;
  const [picture, setPicture] = useState([])
  console.log('picture: ', picture);

  useEffect(() => {
    Api.getPicture()
    .then((data) => {
      setPicture(data)
      console.log('data: ', data);
    })
  }
  )

  return (
    <div className={app}>
      <Header />
      <Main />
    </div>
  );
}
