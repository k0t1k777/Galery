import { useDispatch, useSelector } from 'react-redux';
import { SliceProps, setInputValue } from '../../../store/features/slice/slice';
import styles from './Input.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

interface InputProps {
  clearPages: () => void;
}

export default function Input({
  clearPages,
}: InputProps) {
  // const dispatch = useDispatch()
  const isDarkTheme = useSelector((state: SliceProps) => state.isDarkTheme);

  // const inputValue = useSelector((state: SliceProps) => state.inputValue)
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   clearPages();
  //   if (dispatch(setInputValue)) {
  //     dispatch(setInputValue(e.target.value));
  //   }
  // };

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
