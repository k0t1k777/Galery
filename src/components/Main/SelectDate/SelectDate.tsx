import { useState } from 'react';
import styles from './SelectDate.module.scss';
import Down from './../../../assets/Down.svg';

interface SelectProps {
  text: string;
}

export default function SelectDate({ text }: SelectProps) {
  const { select, select__input, select__container, select__image } = styles;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
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
            type='text'
            name='name'
            placeholder='from'
            // value={value}
            // onChange={handleChange}
          />
          <p>-</p>
          <input
            className={select__input}
            type='text'
            name='name'
            placeholder='before'
            // value={value}
            // onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
