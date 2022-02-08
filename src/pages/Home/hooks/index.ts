import {useState} from "react"

const useHomePage = () => {
	const [viewScheduleOpen, setViewScheduleOpen] = useState(false)
	const [joinAllowlistType, setJoinAllowlistType] = useState<"top" | "001" | undefined>()

	return {
		viewScheduleOpen,
		joinAllowlistType,
		setViewScheduleOpen,
		setJoinAllowlistType
	}
}

export default useHomePage
