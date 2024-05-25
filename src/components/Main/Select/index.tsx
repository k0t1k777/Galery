import { useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import cn from 'classnames/bind';
import useOutsideClick from './../../../hooks/useOutsideClick';
import Arrow from './../../Arrow';
import './SimpleBar.scss';
import styles from './Select.module.scss';
import Reset from './../../../assets/Reset.svg';
import { useSelector } from 'react-redux';
import { SliceProps } from '../../../store/features/slice/slice';

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
  clearPages,
}: ISelect) {
  const { Select__reset } = styles;
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  useOutsideClick(ref, toggleOpen);

  const handleReset = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
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
                onChange={clearPages}
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
