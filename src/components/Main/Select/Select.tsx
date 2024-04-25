import styles from './Select.module.scss';

interface SelectProps {
  text: string;
  options?: string[];
}

export default function Select({ text, options = [] }: SelectProps) {
  const { select, select__text, select__option } = styles;
  return (
    <select className={select}>
      <option className={select__text} hidden>{text}</option>
      {options.map((option, index) => (
        <option className={select__option} key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
