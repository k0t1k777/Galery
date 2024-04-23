import styles from './Input.module.scss';

// interface InputProps {
//   width?: string;
//   placeholder?: string;
//   disableSuggestions?: boolean;
//   options: string[];
//   inputValue: string;
//   setInputValue: (value: string) => void;
//   isRequired?: boolean;
//   isValid: boolean;
//   idStep?: string;
// }

export default function Input() {
  const {
    input
  } = styles
  return <input className={input} type='text' name='name' placeholder='Name' />;
}
