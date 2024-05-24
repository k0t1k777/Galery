import styles from './Input.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

interface InputProps {
  value?: string;
  setValue?: (value: string) => void;
  isDarkTheme: string;
}

export default function Input({ value, setValue, isDarkTheme }: InputProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <input
      className={cx('input', {
        'input--dark': isDarkTheme === 'dark',
      })}
      type='text'
      name='name'
      placeholder='Name'
      value={value}
      onChange={handleChange}
    />
  );
}
