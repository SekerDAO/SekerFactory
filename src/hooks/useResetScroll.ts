import {useLayoutEffect} from "react"
import {useLocation} from "react-router-dom"

const useResetScroll = (): void => {
	const {pathname} = useLocation()
	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
}

export default useResetScroll
