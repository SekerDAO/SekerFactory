import {EventDate} from "../config/events"
import {EventContent} from "../types/event"

export const formatReadableAddress = (address?: string | null): string =>
	address ? `${address.slice(0, 7)}...${address.slice(-4)}` : ""

export const isEventUpcoming = (event: EventContent): boolean =>
	event && (new Date(event.date_start) > new Date() || event.rrule.includes("BYDAY=FR"))

export const getDateReadable = (date: EventDate): string | undefined => {
	if (!(date.date_start && date.date_end)) {
		return
	}
	const startDate = new Date(date.date_start)
	const endDate = new Date(date.date_end)

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
		})} ${startDate.getDate()} - ${endDate.getDate()}, ${startDate.getFullYear()}`
	}
	return `${startDate.toLocaleString("en-US", {
		month: "long"
	})} ${startDate.getDate()} - ${endDate.toLocaleString("en-US", {
		month: "long"
	})} ${endDate.getDate()}, ${startDate.getFullYear()}`
}

export const getTimeReadable = (date: EventDate): string | undefined => {
	if (!(date.date_start_time && date.date_end_time)) {
		return
	}
	let ampmStartHours = parseInt(date.date_start_time)
	let ampmEndHours = parseInt(date.date_end_time)

	if (ampmStartHours > 12) {
		ampmStartHours -= 12
	}
	if (ampmEndHours > 12) {
		ampmEndHours -= 12
	}
	return `${ampmStartHours}${date.date_start_ampm} - ${ampmEndHours}${date.date_end_ampm}`
}
