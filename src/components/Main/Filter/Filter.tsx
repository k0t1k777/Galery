import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './Filter.module.scss';
import { Authors, Locations } from './../../Main/Main';

interface FilterProps {
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  authors: Authors[];
  locations: Locations[];
}

export default function Filter({
  inputValue,
  setInputValue,
  authors,
  locations,
}: FilterProps) {
  const { filter } = styles;

  return (
    <div className={filter}>
      <Input value={inputValue} setValue={setInputValue} />
      <Select text='Author' options={authors.map((author) => author.name)} />
      <Select
        text='Location'
        options={locations.map((location) => location.location)}
      />
      <Select text='Created' />
    </div>
  );
}
