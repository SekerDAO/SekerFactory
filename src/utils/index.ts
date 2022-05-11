import {EventContent} from "../types/event"

export const formatReadableAddress = (address?: string | null): string =>
	address ? `${address.slice(0, 7)}...${address.slice(-4)}` : ""

export const isEventUpcoming = (event: EventContent): boolean =>
	event && (new Date(event.date_start) > new Date() || event.rrule.includes("BYDAY=FR"))

export const getDateReadable = (event: EventContent): string | undefined => {
	if (!event) {
		return
	}
	const startDate = new Date(event.date_start)
	const endDate = new Date(event.date_end)

	const startMonth = startDate.getMonth()
	const endMonth = endDate.getMonth()

	if (startDate.getDate() === endDate.getDate()) {
		return `${startDate.toLocaleString("en-US", {
			month: "long"
		})} ${startDate.getDate()}, ${startDate.getFullYear()}`
	}

	if (startMonth === endMonth) {
		return `${startDate.toLocaleString("en-US", {
			month: "long"
		})} ${startDate.getDate()}-${endDate.getDate()}, ${startDate.getFullYear()}`
	}
	return `${startDate.toLocaleString("en-US", {
		month: "long"
	})} ${startDate.getDate()} - ${endDate.toLocaleString("en-US", {
		month: "long"
	})} ${endDate.getDate()}, ${startDate.getFullYear()}`
}

export const getTimeReadable = (event: EventContent): string => {
	let ampmStartHours = parseInt(event.date_start_time)
	let ampmEndHours = parseInt(event.date_end_time)

	if (ampmStartHours > 12) {
		ampmStartHours -= 12
	}
	if (ampmEndHours > 12) {
		ampmEndHours -= 12
	}
	return `${ampmStartHours}${event.date_start_ampm} - ${ampmEndHours}${event.date_end_ampm}`
}

export const openRSVPForm = (event: EventContent): void => {
	window.open(event.link_short, "_blank")
}
