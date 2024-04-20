import './Select.css';

export default function Select() {
  return (
    <div className='select'>
      <select
        className='select-item'
        // value={selectedLevel}
        // onChange={handleSelectChange}
      >
        <option className='input-whith-select__option'>выбрать </option>
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
    </div>
  );
}
