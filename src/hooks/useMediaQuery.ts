import {useEffect, useState} from "react"

const useMediaQuery = (query: string): boolean => {
	const getMatches = (_query: string): boolean => {
		// Prevents SSR issues
		if (typeof window !== "undefined") {
			return window.matchMedia(_query).matches
		}
		return false
	}

	const [matches, setMatches] = useState<boolean>(getMatches(query))

	const handleChange = () => {
		setMatches(getMatches(query))
	}

	useEffect(() => {
		const matchMedia = window.matchMedia(query)
		handleChange()
		matchMedia.addEventListener("change", handleChange)

		return () => {
			matchMedia.removeEventListener("change", handleChange)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query])

	return matches
}

export default useMediaQuery
