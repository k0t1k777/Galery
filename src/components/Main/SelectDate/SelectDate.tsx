import { useState } from 'react';
import styles from './SelectDate.module.scss';
import Down from './../../../assets/Down.svg';
import cn from 'classnames/bind';

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
  const { select, select__container, select__image } = styles;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
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

  return (
    <div
      className={cx('select', {
        'select--dark': isDarkTheme === 'dark',
      })}
    >
      <div onClick={handleToggleSelect}>
        <img src={Down} className={select__image} />
        <span>{text}</span>
      </div>
      {isOpen && (
        <div className={select__container}>
          <input
            className={cx('select__input', {
              'select__input--dark': isDarkTheme === 'dark',
            })}
            type='number'
            name='name'
            placeholder='from'
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <p>-</p>
          <input
            className={cx('select__input', {
              'select__input--dark': isDarkTheme === 'dark',
            })}
            type='number'
            name='name'
            placeholder='before'
            value={beforeDate}
            onChange={handleToDateChange}
          />
        </div>
      )}
    </div>
  );
}
