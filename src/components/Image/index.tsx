import {FunctionComponent, useState} from "react"
import "./index.scss"

const ImagePlaceholder: FunctionComponent<
	React.PropsWithChildren<{
		src?: string
		alt?: string
		className?: string
		width?: number | string
		height?: number | string
	}>
> = ({src, alt, className, width, height}) => {
	const [loaded, setLoaded] = useState(false)
	return (
		<>
			{(!loaded || !src) && <div className="image-placeholder" style={{width, height}} />}
			<img
				src={src}
				alt={alt}
				onLoad={() => setLoaded(true)}
				className={className}
				width={width}
				height={height}
			/>
		</>
	)
}

export default ImagePlaceholder
