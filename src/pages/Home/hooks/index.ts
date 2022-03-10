import {useState, Dispatch, SetStateAction} from "react"

export type AllowlistType = "TOP" | "001" | undefined
type HomePageState = {
	viewScheduleOpen: boolean
	joinAllowlistType: AllowlistType
	setViewScheduleOpen: Dispatch<SetStateAction<boolean>>
	setJoinAllowlistType: Dispatch<SetStateAction<AllowlistType>>
}
const useHomePage = (): HomePageState => {
	const [viewScheduleOpen, setViewScheduleOpen] = useState(false)
	const [joinAllowlistType, setJoinAllowlistType] = useState<AllowlistType>()

	return {
		viewScheduleOpen,
		joinAllowlistType,
		setViewScheduleOpen,
		setJoinAllowlistType
	}
}

export default useHomePage
