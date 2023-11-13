import { type } from "os";
import React from "react";

type InputProps = {
  placeholder?: string;
  type: string;
  name: string;
  label?: string;
  custom?: string;
  value?: string;
  readonly?: boolean;
};

function Input(props: InputProps) {
  const isDefault =
    props.custom === undefined ? "bg-secondary-50" : props.custom;
  return (
    <div className="w-full flex flex-col gap-2">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        readOnly={props.readonly}
        value={props.value}
        name={props.name}
        type={props.type}
        className={`w-full px-4 py-2 border border-black rounded-lg focus:outline-primary-600 ${isDefault} `}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
