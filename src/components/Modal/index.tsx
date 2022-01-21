import {FunctionComponent} from "react"
import {ReactComponent as CloseIcon} from "../../assets/icons/delete.svg"
import "./index.scss"

const Modal: FunctionComponent<{
	open: boolean
	onClose: () => void
	zIndex?: number
	title?: string
}> = ({zIndex, open, onClose, title, children}) => {
	if (!open) return null

	return (
		<>
			<div
				className="modal__overlay"
				onClick={onClose}
				style={zIndex ? {zIndex: zIndex - 1} : undefined}
			/>
			<div
				className="modal__body"
				style={{
					...(zIndex ? {zIndex} : {})
				}}
			>
				<div className="modal__close" onClick={onClose}>
					<CloseIcon width="30px" height="30px" />
				</div>
				{title && <h2>{title}</h2>}
				{children}
			</div>
		</>
	)
}

export default Modal
