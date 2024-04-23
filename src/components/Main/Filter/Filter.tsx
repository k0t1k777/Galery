import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './Filter.module.scss';

export default function Filter() {
  const { filter } = styles;
  return (
    <div className={filter}>
      <Input />
      <Select text='Author' />
      <Select text='Location' />
      <Select text='Created' />
    </div>
  );
}
