import { useSelector } from 'react-redux';
import { SliceProps } from '../../../store/features/slice/slice';
import styles from './Input.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

interface InputProps {
  value?: string;
  setValue?: (value: string) => void;
  clearPages: () => void;
}

export default function Input({
  value,
  setValue,
  clearPages,
}: InputProps) {
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearPages();
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
