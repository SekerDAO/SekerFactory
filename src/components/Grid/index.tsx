import {FunctionComponent, PropsWithChildren} from "react"
import "./index.scss"

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

const Grid: FunctionComponent<
	PropsWithChildren<{
		size?: GridSize
		row?: boolean
		className?: string
		Component?: keyof JSX.IntrinsicElements
	}>
> = ({children, size, row, className, Component = "div"}) => (
	<Component className={`${row ? "row " : `col-${size} `}${className ?? ""}`}>{children}</Component>
)

export default Grid
