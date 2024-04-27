import { ChangeEvent } from "react";

interface Props {
  Label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ Label, placeholder, onChange }: Props) => {
  return (
    <>
      <div className="p-1">
        <label htmlFor={Label} className="flex">
          {Label}
        </label>
        <input
          type="text"
          id={Label}
          placeholder={placeholder}
          className="border border-black rounded"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
