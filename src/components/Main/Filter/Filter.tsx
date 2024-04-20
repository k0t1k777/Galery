import './Filter.css';

export default function Filter() {
  return (
    <div className='filter'>
      <select
        className='select'
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
