import {FunctionComponent, PropsWithChildren} from "react"
import "./index.scss"

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

const Grid: FunctionComponent<
	PropsWithChildren<{
		size?: GridSize
		row?: boolean
		className?: string
		Component?: keyof JSX.IntrinsicElements
		innerRef?: (node: HTMLDivElement) => void
		minHeight?: string
	}>
> = ({children, innerRef, size, row, className, Component = "div", minHeight}) => {
	const baseProps = {
		className: `${row ? "row " : `col-${size} `}${className ?? ""}`,
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
