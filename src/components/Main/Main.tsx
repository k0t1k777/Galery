import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import Pagination from '../Pagination/index';
import { useSelector } from 'react-redux';
import { pagesAmount } from '../utills/constants';
import Preloader from '../Preloader/Preloader';

export default function Main() {
  const { main } = styles;
  const amount = useSelector((state: any) => state.counter.amount);
  const loading = useSelector((state: any) => state.counter.loading);

  return (
    <div className={main}>
      <Filter />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Gallery />
          <Pagination pagesAmount={Math.ceil(amount / pagesAmount)} />
        </>
      )}
    </div>
  );
}
