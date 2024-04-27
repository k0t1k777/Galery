import { useState } from 'react';
import styles from './SelectDate.module.scss';
import Down from './../../../assets/Down.svg';

interface SelectProps {
  text: string;
  fromDate?: string;
  setFromDate?: (value: string) => void;
  beforeDate?: string;
  setBeforeDate?: (value: string) => void;
}

export default function SelectDate({
  text,
  fromDate,
  setFromDate,
  beforeDate,
  setBeforeDate,
}: SelectProps) {
  const { select, select__input, select__container, select__image } = styles;

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
    <div className={select}>
      <div onClick={handleToggleSelect}>
        <img src={Down} className={select__image} />
        <span>{text}</span>
      </div>
      {isOpen && (
        <div className={select__container}>
          <input
            className={select__input}
            type='number'
            name='name'
            placeholder='from'
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <p>-</p>
          <input
            className={select__input}
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
