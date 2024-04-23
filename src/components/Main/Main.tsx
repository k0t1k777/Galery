import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import styles from './Main.module.scss';

export default function Main() {
  const { main } = styles;
  return (
    <div className={main}>
      <Filter />
      <Gallery />
    </div>
  );
}
