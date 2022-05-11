import {FunctionComponent, InputHTMLAttributes} from "react"
import "./styles.scss"

const Input: FunctionComponent<
	React.PropsWithChildren<
		{
			borders?: "bottom" | "all"
			validation?: string | null
		} & InputHTMLAttributes<HTMLInputElement>
	>
> = ({borders = "all", validation, type, onChange, value, ...inputProps}) => (
	<div className="input">
		<div className="input__wrapper">
			<input
				className={`input__field${borders === "all" ? " input__field--bordered" : ""}${
					validation ? " input__field--bad" : ""
				}`}
				type={type}
				onChange={onChange}
				value={value}
				{...inputProps}
			/>
		</div>
		{validation && <span className="input__validation">{validation}</span>}
	</div>
)

export default Input
