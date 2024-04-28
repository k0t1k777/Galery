import styles from './Select.module.scss';
import Reset from './../../../assets/Reset.svg';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

interface SelectProps {
  text: string;
  options?: string[];
  value?: string;
  setValue?: (value: string) => void;
  isDarkTheme: string;
}

export default function Select({
  text,
  value,
  setValue,
  isDarkTheme,
  options = [],
}: SelectProps) {
  const {
    select,
    select__option,
    select__container,
    select__reset,
    select__text,
  } = styles;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (setValue) {
      setValue(selectedValue);
    }
  };

  const handleReset = () => {
    if (setValue) {
      setValue('');
    }
  };

  return (
    <div className={select__container}>
      <select
        className={cx('select', {
          'select--dark': isDarkTheme === 'dark',
        })}
        value={value || ''}
        onChange={handleChange}
      >
        <option className={select__text} hidden>
          {text}
        </option>
        {options.map((option, index) => (
          <option className={select__option} key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {value && (
        <img src={Reset} className={select__reset} onClick={handleReset} />
      )}
    </div>
  );
}
