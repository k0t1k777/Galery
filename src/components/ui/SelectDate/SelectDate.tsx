import { useRef, useState } from 'react';
import styles from 'src/components/ui/SelectDate/SelectDate.module.scss';
import cn from 'classnames/bind';
import useOutsideClick from 'src/hooks/useOutsideClick';
import Line from 'src/assets/Line.svg?react';
import LineBlack from 'src/assets/Line-black.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import { setBeforeDate, setFromDate } from 'src/store/features/slice/slice';
import { RootState } from 'src/store/features/slice/rootReducer';

const cx = cn.bind(styles);

interface SelectProps {
  text: string;
  clearPages: () => void;
}

export default function SelectDate({ text, clearPages }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDarkTheme = useSelector((state: RootState) => state.picture.isDarkTheme);
  const fromDate = useSelector((state: RootState) => state.picture.fromDate);
  const beforeDate = useSelector((state: RootState) => state.picture.beforeDate);
  const dispatch = useDispatch();
  const ref = useRef(null);

  function toggleOpen() {
    setIsOpen(prev => !prev);
  }

  useOutsideClick(ref, () => {
    if (isOpen) {
      toggleOpen();
    }
  });

  function handleFromDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    clearPages();
    dispatch(setFromDate(e.target.value));
  }

  function handleToDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    clearPages();
    dispatch(setBeforeDate(e.target.value));
  }

  return (
    <div
      ref={ref}
      className={cx('select', {
        'select--dark': isDarkTheme === 'dark',
        'select--open': isOpen === true
      })}
      onClick={toggleOpen}>
      <span>{text}</span>
      {isOpen && (
        <div
          className={cx('select__container', {
            'select__container--dark': isDarkTheme === 'dark',
            'select__container--open': isOpen === true
          })}>
          <input
            className={cx('select__input', {
              'select__input--dark': isDarkTheme === 'dark'
            })}
            type="numeric"
            placeholder="from"
            value={fromDate}
            onChange={handleFromDateChange}
            onClick={e => e.stopPropagation()}
          />
          {isDarkTheme === 'dark' ? <Line /> : <LineBlack />}
          <input
            className={cx('select__input', {
              'select__input--dark': isDarkTheme === 'dark'
            })}
            type="numeric"
            placeholder="before"
            value={beforeDate}
            onChange={handleToDateChange}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
