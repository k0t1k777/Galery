import Input from '../Input/Input';
import Select from '../Select/Select';
import './Filter.css';

export default function Filter() {
  return (
    <div className='filter'>
      <Input />
      <Select text='Author'/>
      <Select text='Location'/>
      <Select text='Created'/>
    </div>
  );
}
