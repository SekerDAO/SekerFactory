import {FunctionComponent} from "react"
import "./index.scss"

const ImageModal: FunctionComponent<
	React.PropsWithChildren<{
		open: boolean
		onClose: () => void
		src?: string
		alt?: string
		video?: boolean
	}>
> = ({open, onClose, src, alt, video}) => {
	if (!open) return null

	return (
		<>
			<div className="modal__overlay modal__image-overlay" onClick={onClose} />
			<div className="modal__image-body">
				{video ? (
					<video muted autoPlay loop playsInline src={src} width="100%" />
				) : (
					<img src={src} alt={alt} />
				)}
			</div>
		</>
	)
}

export default ImageModal
