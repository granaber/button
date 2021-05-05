import React from "react";
import "./index.css";
interface TypeProps    {
    children: string;
    className?: string;
    typeButton?: "primary"|"second"|"alert";
	onClick?:()=>{};
	disabled?:true
} 
function ButtonComponet(
	{
		children,
		className='',
		typeButton,
		onClick,
		disabled,
	}:TypeProps,
	ref:any
):JSX.Element {
	const listClassName = [
		{ type: "primary", class: "btn-primary" },
		{ type: "second", class: "btn-second" },
		{ type: "alert", class: "btn-alert" },
	];
	const findClass = listClassName.find(({ type }) => type === typeButton);
	let classeSelect = "btn-primary";
	if (findClass) {
		classeSelect = `${findClass.class}`;
	}
	return (
		<button
			ref={ref}
			className={`${className} ${classeSelect} ${classeSelect.trim().concat("-ripple")} ripple`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

const Button = React.forwardRef(ButtonComponet);
export default Button;

