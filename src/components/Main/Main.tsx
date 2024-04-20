import Filter from './Filter/Filter';
import Gallery from './Gallery/Gallery';
import './Main.css';

export default function Main() {
  return (
    <>
      <div className='main'>
        <Filter />
        <Gallery />
      </div>
    </>
  );
}
