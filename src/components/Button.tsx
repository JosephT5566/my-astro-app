type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button = ({ children, className, ...restProps }: buttonProps) => {
	return (
		<button
			className={`rounded-full bg-orange-300 disabled:opacity-75 ${className}`}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Button;
