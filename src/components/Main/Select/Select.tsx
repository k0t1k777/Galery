import styles from './Select.module.scss';

interface SelectProps {
  text: string;
}

export default function Select({ text }: SelectProps) {
  const { select, select__text } = styles
  return (
   
    <select
      className={select}
    >
      <option className={select__text}>{text}</option>
      {/* {levels.map((level, index) => (
          <option
            className='input-whith-select__option'
            value={level}
            key={index}
          >
            {level}
          </option>
        ))} */}
    </select>
  );
}
