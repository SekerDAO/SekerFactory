import {FunctionComponent} from "react"
import "./index.scss"

const ImageModal: FunctionComponent<{
	open: boolean
	onClose: () => void
	src?: string
}> = ({open, onClose, src}) => {
	if (!open) return null

	return (
		<>
			<div className="modal__overlay modal__image-overlay" onClick={onClose} />
			<div className="modal__image-body">
				<img src={src} />
			</div>
		</>
	)
}

export default ImageModal
