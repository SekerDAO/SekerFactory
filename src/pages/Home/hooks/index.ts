import {useState} from "react"

const useHomePage = () => {
	const [viewScheduleOpen, setViewScheduleOpen] = useState(false)
	const [joinAllowlistType, setJoinAllowlistType] = useState<"TOP" | "001" | undefined>()

	return {
		viewScheduleOpen,
		joinAllowlistType,
		setViewScheduleOpen,
		setJoinAllowlistType
	}
}

export default useHomePage
