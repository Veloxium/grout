import { type } from "os";
import React from "react";

type InputProps = {
  placeholder?: string;
  type: string;
  name: string;
  label?: string;
  custom?: string;
};

function Input(props: InputProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        name={props.name}
        type={props.type}
        className={`w-full px-4 py-2 bg-secondary-50 border border-black rounded-lg focus:outline-primary-600  ${props.custom}`}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
