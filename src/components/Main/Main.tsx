import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';
import Pagination from '../Pagination/index';
import { useSelector } from 'react-redux';
import { SliceProps } from '../../store/features/slice/slice';
import { pagesAmount } from '../utills/constants';

export default function Main() {
  const { main } = styles;
  const amount = useSelector((state: SliceProps) => state.amount);

  return (
    <div className={main}>
      <Filter />
      <Gallery />
      <Pagination pagesAmount={Math.ceil(amount / pagesAmount)} />
    </div>
  );
}
