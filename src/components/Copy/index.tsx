import {FunctionComponent} from "react"
import "./index.scss"

const Copy: FunctionComponent<{value?: string | null}> = ({children, value}) => {
	const handleCopy = () => {
		if (value) {
			navigator.clipboard.writeText(value)
		}
	}
	return (
		<div className="copy-field" onClick={handleCopy}>
			{children}
		</div>
	)
}

export default Copy
