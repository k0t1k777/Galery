import styles from './Preloader.module.scss';

export default function Preloader() {
  const { preloader, preloader__loader } = styles;

  return (
    <div className={preloader}>
      <div className={preloader__loader}></div>
    </div>
  );
}
