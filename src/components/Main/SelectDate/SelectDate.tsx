import { useRef, useState } from 'react';
import styles from './SelectDate.module.scss';
import cn from 'classnames/bind';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Line from './../../../assets/Line.svg?react';
import LineBlack from './../../../assets/Line-black.svg?react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SliceProps,
  setBeforeDate,
  setFromDate,
} from '../../../store/features/slice/slice';

const cx = cn.bind(styles);

interface SelectProps {
  text: string;
  clearPages: () => void;
}

export default function SelectDate({ text, clearPages }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);
  const fromDate = useSelector((state: SliceProps) => state.fromDate);
  const beforeDate = useSelector((state: SliceProps) => state.beforeDate);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const openMenu = () => {
    setIsOpen(true);
  };

  const hideMenu = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, hideMenu);

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearPages();
    dispatch(setFromDate(e.target.value));
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearPages();
    dispatch(setBeforeDate(e.target.value));
  };

  return (
    <div
      ref={ref}
      className={cx('select', {
        'select--dark': isDarkTheme === 'dark',
        'select--open': isOpen === true,
      })}
      onClick={isOpen ? hideMenu : openMenu}
    >
      <span>{text}</span>
      {isOpen && (
        <div
          className={cx('select__container', {
            'select__container--dark': isDarkTheme === 'dark',
            'select__container--open': isOpen === true,
          })}
        >
          <input
            className={cx('select__input', {
              'select__input--dark': isDarkTheme === 'dark',
            })}
            type='numeric'
            placeholder='from'
            value={fromDate}
            onChange={handleFromDateChange}
            onClick={(e) => e.stopPropagation()}
          />
          {isDarkTheme === 'dark' ? <Line /> : <LineBlack />}
          <input
            className={cx('select__input', {
              'select__input--dark': isDarkTheme === 'dark',
            })}
            type='numeric'
            placeholder='before'
            value={beforeDate}
            onChange={handleToDateChange}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
