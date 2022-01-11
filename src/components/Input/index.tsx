import {FunctionComponent, InputHTMLAttributes} from "react"
import "./styles.scss"

const Input: FunctionComponent<
	{
		borders?: "bottom" | "all"
		number?: boolean
		validation?: string | null
	} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">
> = ({borders = "all", number = false, validation, step = 1, onChange, value, ...inputProps}) => (
	<div className="input">
		<div className="input__wrapper">
			<input
				className={`input__field${borders === "all" ? " input__field--bordered" : ""}${
					validation ? " input__field--bad" : ""
				}`}
				type={number ? "number" : "text"}
				step={step}
				onChange={onChange}
				value={value}
				{...inputProps}
			/>
		</div>
		{validation && <span className="input__validation">{validation}</span>}
	</div>
)

export default Input
