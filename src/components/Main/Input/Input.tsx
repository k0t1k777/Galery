import styles from './Input.module.scss';

interface InputProps {
  value?: string;
  setValue?: (value: any) => void;
}

export default function Input({ value, setValue }: InputProps) {
  const { input } = styles;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <input
      className={input}
      type='text'
      name='name'
      placeholder='Name'
      value={value}
      onChange={handleChange}
    />
  );
}
