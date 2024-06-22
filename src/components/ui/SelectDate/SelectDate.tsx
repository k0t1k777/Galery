import { useRef, useState } from 'react';
import styles from './SelectDate.module.scss';
import cn from 'classnames/bind';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Line from './../../../assets/Line.svg?react';
import LineBlack from './../../../assets/Line-black.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBeforeDate,
  setFromDate
} from '../../../store/features/slice/slice';

const cx = cn.bind(styles);

interface SelectProps {
  text: string;
  clearPages: () => void;
}

export default function SelectDate({ text, clearPages }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);
  const fromDate = useSelector((state: any) => state.counter.fromDate);
  const beforeDate = useSelector((state: any) => state.counter.beforeDate);
  const dispatch = useDispatch();
  const ref = useRef(null);

  function openMenu() {
    setIsOpen(true);
  }

  function hideMenu() {
    setIsOpen(false);
  }

  useOutsideClick(ref, hideMenu);

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
      onClick={isOpen ? hideMenu : openMenu}>
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
