import styles from './Select.module.scss';

interface SelectProps {
  text: string;
  options?: string[];
  value?: string;
  setValue?: (value: string) => void;
}

export default function Select({ text, value, setValue, options = [] }: SelectProps) {
  const { select, select__text, select__option } = styles;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (setValue) {
      setValue(selectedValue);
    }
  };

  return (
    <select className={select} value={value || ''}  onChange={handleChange}>
      <option className={select__text} hidden>{text}</option>
      {options.map((option, index) => (
        <option className={select__option} key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
