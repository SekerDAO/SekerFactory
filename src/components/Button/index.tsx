import {ButtonHTMLAttributes, FunctionComponent} from "react"
import "./index.scss"

const Button: FunctionComponent<
	{
		variant?: "primary" | "secondary" | "link"
		className?: string
	} & ButtonHTMLAttributes<HTMLButtonElement>
> = ({variant = "primary", className, children, ...buttonProps}) => (
	<button className={`btn btn--${variant} ${className ?? ""}`} {...buttonProps}>
		{children}
	</button>
)

export default Button
