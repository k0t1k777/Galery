import { FC, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import cn from 'classnames/bind';
import useOutsideClick from './../../../hooks/useOutsideClick';
import Arrow from './../../Arrow';
import './SimpleBar.scss';
import styles from './Select.module.scss';

const cx = cn.bind(styles);

type TOption = {
  id: number;
  name: string;
};

export interface ISelect {
  text: string;
  disabled: boolean;
  options: TOption[];
  isDarkTheme?: string;
  value: string;
  setValue?: (value: string) => void;
}

const Select: FC<ISelect> = ({
  // disabled = false,
  text,
  options,
  isDarkTheme,
  setValue,
  value,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  useOutsideClick(ref, toggleOpen);
  const { Select__arrow } = styles;
  console.log('options: ', options);

  return (
    <div
      ref={isOpen ? ref : null}
      className={cx('Select', {
        'Select--open': isOpen,
        'Select--dark': isDarkTheme === 'dark',
      })}
      onClick={toggleOpen}
      // onClick={!disabled ? toggleOpen : () => {}}
      aria-hidden='true'
    >
      {!value && <span className={cx('Select__title')}>{text}</span>}
      <span className={cx('Select__title')}>{value}</span>
      <Arrow
        isOpen={isOpen}
        className={Select__arrow}
        isDarkTheme={isDarkTheme}
      />
      {isOpen && options && (
        <ul
          className={cx('Select__optionContainer', {
            'Select__optionContainer--open': isOpen,
            'Select__optionContainer--dark': isDarkTheme === 'dark',
          })}
        >
          <SimpleBar style={{ maxHeight: 'inherit' }}>
            {options.map((option) => (
              <li
                onClick={() => setValue(option)}
                className={cx('Select__option', {
                  'Select__option--dark': isDarkTheme === 'dark',
                })}
                key={option.id}
                aria-hidden='true'
              >
                <p className={cx('Select__optionName')}>{option}</p>
              </li>
            ))}
          </SimpleBar>
        </ul>
      )}
    </div>
  );
};

export default Select;
