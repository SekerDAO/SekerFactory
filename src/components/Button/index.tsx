import {ButtonHTMLAttributes, FunctionComponent} from "react"
import "./index.scss"

const Button: FunctionComponent<
	React.PropsWithChildren<
		{
			variant?: "primary" | "secondary" | "link"
			className?: string
			color?: "white"
		} & ButtonHTMLAttributes<HTMLButtonElement>
	>
> = ({variant = "primary", className, children, color, ...buttonProps}) => (
	<button
		className={`btn btn--${variant} ${color ? `btn--${color}` : ""} ${className ?? ""}`}
		{...buttonProps}
	>
		{children}
	</button>
)

export default Button
