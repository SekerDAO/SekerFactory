import {FunctionComponent, PropsWithChildren} from "react"
import "./index.scss"

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

const Grid: FunctionComponent<
	PropsWithChildren<{
		size?: GridSize
		xs?: GridSize
		sm?: GridSize
		lg?: GridSize
		xl?: GridSize
		row?: boolean
		container?: boolean
		className?: string
		Component?: keyof JSX.IntrinsicElements
		innerRef?: (node: HTMLDivElement) => void
		minHeight?: string
	}>
> = ({
	children,
	innerRef,
	container,
	size,
	row,
	xs,
	sm,
	lg,
	xl,
	className,
	Component = "div",
	minHeight
}) => {
	const baseProps = {
		className: `${container ? "container " : row ? "row " : `col-${size} `}${
			xs ? `col-xs-${xs} ` : ""
		}${sm ? `col-sm-${sm} ` : ""}${lg ? `col-lg-${lg} ` : ""} ${xl ? `col-xl-${xl} ` : ""}${
			className ?? ""
		}`,
		style: {
			minHeight
		}
	}

	if (Component === "div") {
		return (
			<div {...baseProps} ref={innerRef}>
				{children}
			</div>
		)
	} else if (Component === "section") {
		return (
			<section {...baseProps} ref={innerRef}>
				{children}
			</section>
		)
	}
	return <Component {...baseProps}>{children}</Component>
}

export default Grid
