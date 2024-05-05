import { FC, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import cn from 'classnames/bind';
import useOutsideClick from './../../../hooks/useOutsideClick';
import Arrow from './../../Arrow';
import './SimpleBar.scss';
import styles from './Select.module.scss';
import Reset from './../../../assets/Reset.svg';

const cx = cn.bind(styles);

export interface ISelect {
  text: string;
  options: string[];
  isDarkTheme?: string;
  value: string;
  setValue: (value: string) => void;
}

const Select: FC<ISelect> = ({
  text,
  options,
  isDarkTheme,
  setValue,
  value,
}) => {
  const { Select__reset } = styles;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  useOutsideClick(ref, toggleOpen);

  const handleReset = () => {
    if (setValue) {
      setValue('');
    }
  };

  return (
    <div
      ref={isOpen ? ref : null}
      className={cx('Select', {
        'Select--open': isOpen,
        'Select--dark': isDarkTheme === 'dark',
      })}
      onClick={toggleOpen}
      aria-hidden='true'
    >
      {!value && <span className={cx('Select__title')}>{text}</span>}
      <span className={cx('Select__title')}>{value}</span>
      <Arrow isOpen={isOpen} isDarkTheme={isDarkTheme} />
      {isOpen && options && (
        <ul
          className={cx('Select__optionContainer', {
            'Select__optionContainer--open': isOpen,
            'Select__optionContainer--dark': isDarkTheme === 'dark',
          })}
        >
          <SimpleBar style={{ maxHeight: 'inherit' }}>
            {options.map((option, index) => (
              <li
                onClick={() => setValue(option)}
                className={cx('Select__option', {
                  'Select__option--dark': isDarkTheme === 'dark',
                })}
                key={index}
                aria-hidden='true'
              >
                <p className={cx('Select__optionName')}>{option}</p>
              </li>
            ))}
          </SimpleBar>
        </ul>
      )}
      {value && (
        <img src={Reset} className={Select__reset} onClick={handleReset} />
      )}
    </div>
  );
};

export default Select;