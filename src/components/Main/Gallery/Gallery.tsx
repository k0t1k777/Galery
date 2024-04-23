import Picture from '../Picture/Picture';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const { gallery } = styles
  return (
    <div className={gallery}>
      <Picture />
      <Picture />
      <Picture />
      <Picture />
    </div>
  );
}
