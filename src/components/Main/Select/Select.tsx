import './Select.css';

interface SelectProps {
  text: string;
}

export default function Select({ text }: SelectProps) {
  return (
    <select
      className='select'
      // value={selectedLevel}
      // onChange={handleSelectChange}
    >
      <option className='input__text'>{text}</option>
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
