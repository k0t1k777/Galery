import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './Filter.module.scss';

export default function Filter({ inputValue, setInputValue }: any) {
  const { filter } = styles;
 
  return (
    <div className={filter}>
      <Input value={inputValue} setValue={setInputValue} />
      <Select text='Author' />
      <Select text='Location' />
      <Select text='Created' />
    </div>
  );
}
