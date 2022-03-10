import {EventContent} from "../types/event"

export const isEventUpcoming = (event: EventContent): boolean =>
	event && new Date(event.date_start) > new Date()

export const getDateReadable = (event: EventContent): string | undefined => {
	if (!event) {
		return
	}
	const startDate = new Date(event.date_start)
	const endDate = new Date(event.date_end)

	const startMonth = startDate.getMonth()
	const endMonth = endDate.getMonth()

	if (startMonth === endMonth) {
		return `${startDate.toLocaleString("en-US", {
			month: "short"
		})}. ${startDate.getDate()}-${endDate.getDate()}, ${startDate.getFullYear()}`
	}
	return `${startDate.toLocaleString("en-US", {
		month: "short"
	})}. ${startDate.getDate()} - ${endDate.toLocaleString("en-US", {
		month: "short"
	})}. ${endDate.getDate()}, ${startDate.getFullYear()}`
}

export const openRSVPForm = (event: EventContent): void => {
	window.open(event.link_short, "_blank")
}
