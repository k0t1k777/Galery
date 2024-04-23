import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';

export default function App() {
  const { app } = styles;
  return (
    <div className={app}>
      <Header />
      <Main />
    </div>
  );
}
