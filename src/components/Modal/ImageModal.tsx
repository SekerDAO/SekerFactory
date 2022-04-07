import {FunctionComponent} from "react"
import "./index.scss"

const ImageModal: FunctionComponent<{
	open: boolean
	onClose: () => void
	src?: string
	video?: boolean
}> = ({open, onClose, src, video}) => {
	if (!open) return null

	return (
		<>
			<div className="modal__overlay modal__image-overlay" onClick={onClose} />
			<div className="modal__image-body">
				{video ? <video muted autoPlay loop src={src} width="100%" /> : <img src={src} />}
			</div>
		</>
	)
}

export default ImageModal
