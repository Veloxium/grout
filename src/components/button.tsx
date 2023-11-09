import Image from "next/image";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  icon?: string;
  type?: "primary" | "secondary" | "accent" | "border";
  custom?: string;
  textCustom?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  shadow?: boolean;
  href?: string;
};

function Button(props: ButtonProps) {
  const shadowClass = props.shadow ? "shadow-outline-primary" : "";
  const typeClass =
    props.type === "primary"
      ? "bg-primary-600 border-2 border-primary-600 hover:bg-primary-500 hover:border-primary-500 ease-in-out transition-all"
      : props.type === "secondary"
      ? "bg-secondary-600 border-2 border-secondary-600"
      : props.type === "accent"
      ? "bg-primary-50 border-2 border-primary-50"
      : props.type === "border"
      ? "border-2 border-primary-600"
      : "bg-primary-600 border-2 border-primary-600";
  const sizeClass =
    props.size === "small"
      ? "p-small"
      : props.size === "medium"
      ? "p-medium"
      : props.size === "large"
      ? "p-large"
      : props.size === "xlarge"
      ? "p-xlarge"
      : "p-medium";

  return (
    <Link 
      href={props.href  ? props.href : "/"}
      className={`inline-flex text-white items-center justify-center gap-2 rounded-md cursor-pointer ${shadowClass} ${typeClass} ${sizeClass} ${props.custom}`}
    >
      <p className={props.textCustom}>{props.text}</p>
      {props.icon && (
        <Image
          src={props.icon}
          width={20}
          height={20}
          alt={props.text}
          className="object-contain text-white"
        />
      )}
    </Link>
  );
}

export default Button;
