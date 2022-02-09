import {FunctionComponent, InputHTMLAttributes} from "react"
import "./index.scss"

const Checkbox: FunctionComponent<
	{label: string; id: string} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">
> = ({label, id, ...inputProps}) => (
	<div className="checkbox-container">
		<div className="checkbox">
			<input id={id} type="checkbox" {...inputProps} />
			<label htmlFor={id} />
		</div>
		<label htmlFor={id}>{label}</label>
	</div>
)

export default Checkbox
