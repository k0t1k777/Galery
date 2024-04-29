import { useState, useRef } from 'react';
import styles from './SelectDate.module.scss';
import cn from 'classnames/bind';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Line from './../../../assets/Line.svg?react'
import LineBlack from './../../../assets/Line-black.svg?react'

const cx = cn.bind(styles);

interface SelectProps {
  text: string;
  fromDate?: string;
  setFromDate?: (value: string) => void;
  beforeDate?: string;
  setBeforeDate?: (value: string) => void;
  isDarkTheme: string;
}

export default function SelectDate({
  text,
  fromDate,
  setFromDate,
  beforeDate,
  setBeforeDate,
  isDarkTheme,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const openMenu = () => {
    setIsOpen(true);
  };

  const hideMenu = () => {
    setIsOpen(false);
  };

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setFromDate) {
      setFromDate(e.target.value);
    }
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setBeforeDate) {
      setBeforeDate(e.target.value);
    }
  };

  useOutsideClick(ref, hideMenu);

  return (
    <div
      ref={ref}
      className={cx('select', {
        'select--dark': isDarkTheme === 'dark', 'select--open': isOpen === true
      })}
      onClick={isOpen ? hideMenu : openMenu}
    >
      <span>{text}</span>
      {isOpen && (
        <div className={cx('select__container', {
          'select__container--dark': isDarkTheme === 'dark',
          'select__container--open': isOpen === true,
        })}>
          <input
            className={cx('select__input', {
              'select__input--dark': isDarkTheme === 'dark',
            })}
            type='number'
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
            type='number'
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
