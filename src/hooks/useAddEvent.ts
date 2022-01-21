import {useState, useEffect} from "react"
import config from "../config/addevent"
import {EventContent} from "../types/event"

type Params = {
	upcoming?: string
	sort?: string | string[] | null
}
export const useEvents = ({upcoming}: Params) => {
	const [events, setEvents] = useState<EventContent[]>([])
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getEvents = async () => {
			let params = ""
			if (upcoming) {
				params = params.concat("&upcoming=", upcoming)
			}
			setLoading(true)
			await fetch(`${config.BASE_URL}events/list/?token=${config.TOKEN}${params}`)
				.then(response => response.json())
				.then(data => {
					setEvents(data.events)
					setLoading(false)
				})
				.catch(err => {
					setLoading(false)
					setError(err)
				})
		}

		getEvents()
	}, [])
	return {
		events,
		loading,
		error
	}
}

export const useEvent = (id?: string) => {
	const [event, setEvent] = useState<EventContent>()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getEvent = async () => {
			setLoading(true)
			await fetch(`${config.BASE_URL}events/event/?token=${config.TOKEN}&event_id=${id}`)
				.then(response => response.json())
				.then(data => {
					setEvent(data.event)
					setLoading(false)
				})
				.catch(err => {
					setLoading(false)
					setError(err)
				})
		}

		getEvent()
	}, [])
	return {
		event,
		loading,
		error
	}
}
