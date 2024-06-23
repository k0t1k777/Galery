import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'src/store/features/slice/slice';
import styles from 'src/components/ui/Input/Input.module.scss';
import cn from 'classnames/bind';
import { RootState } from 'src/store/features/slice/rootReducer';

const cx = cn.bind(styles);

interface InputProps {
  clearPages: () => void;
}

export default function Input({ clearPages }: InputProps) {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state: RootState) => state.picture.isDarkTheme);
  const inputValue = useSelector((state: RootState) => state.picture.inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearPages();
    dispatch(setInputValue(e.target.value));
  };

  return (
    <input
      className={cx('input', {
        'input--dark': isDarkTheme === 'dark'
      })}
      type="text"
      name="name"
      placeholder="Name"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
