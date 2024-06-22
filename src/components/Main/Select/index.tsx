import { useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import cn from 'classnames/bind';
import useOutsideClick from './../../../hooks/useOutsideClick';
import Arrow from '../../ui/Arrow/index';
import './SimpleBar.scss';
import styles from './Select.module.scss';
import Reset from './../../../assets/Reset.svg';
import { useSelector } from 'react-redux';

const cx = cn.bind(styles);

export interface ISelect {
  text: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
  clearPages: () => void;
}

export default function Select({
  text,
  options,
  setValue,
  value,
  clearPages
}: ISelect) {
  const { select__reset } = styles;
  const isDarkTheme = useSelector((state: any) => state.counter.isDarkTheme);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef(null);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  useOutsideClick(ref, toggleOpen);

  function handleReset(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();
    setValue('');
  }

  return (
    <div
      ref={isOpen ? ref : null}
      className={cx('select', {
        'select--open': isOpen,
        'select--dark': isDarkTheme === 'dark'
      })}
      onClick={toggleOpen}
      aria-hidden="true">
      {!value && <span className={cx('select__title')}>{text}</span>}
      <span className={cx('select__title')}>{value}</span>
      <Arrow isOpen={isOpen} />
      {isOpen && options && (
        <ul
          className={cx('select__optionContainer', {
            'select__optionContainer--open': isOpen,
            'select__optionContainer--dark': isDarkTheme === 'dark'
          })}>
          <SimpleBar style={{ maxHeight: 'inherit' }}>
            {options.map((option, index) => (
              <li
                onClick={() => {
                  setValue(option);
                  clearPages();
                }}
                className={cx('select__option', {
                  'Select__option--dark': isDarkTheme === 'dark'
                })}
                key={index}
                aria-hidden="true">
                <p className={cx('select__optionName')}>{option}</p>
              </li>
            ))}
          </SimpleBar>
        </ul>
      )}
      {value && (
        <img src={Reset} className={select__reset} onClick={handleReset} />
      )}
    </div>
  );
}
