import {useState, useEffect} from "react"
import summerSolsticeBanner from "../assets/images/Event_SummerSolstice.png"
import daoPartyBanner from "../assets/images/SekerFactory_DAOParty.png"
import daoMeetingBanner from "../assets/images/dao-meeting-banner.png"
import exhibitOneEventBanner from "../assets/images/exhibit-1-banner.png"
import featuredEventBanner from "../assets/images/featured-event-banner.png"
import config from "../config/addevent"
import {EventContent} from "../types/event"

type Params = {
	upcoming?: string
	sort?: string | (string | null)[] | null | undefined
}
export const useEvents = ({
	upcoming
}: Params): {events: EventContent[]; error: string | undefined; loading: boolean} => {
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
					const _events: EventContent[] = data.events.map((event: EventContent) => {
						if (event.eventname === "Post-ETH Denver Defrost Meet-Up") {
							return {
								...event,
								custom_data: {
									bannerSrc: featuredEventBanner
								}
							}
						}
						if (event.eventname === "DAO Meetings") {
							return {
								...event,
								custom_data: {
									bannerSrc: daoMeetingBanner
								}
							}
						}
						if (event.eventname === "Exhibit 1") {
							return {
								...event,
								custom_data: {
									bannerSrc: exhibitOneEventBanner
								}
							}
						}
						if (event.eventname === "DAO Party") {
							return {
								...event,
								custom_data: {
									bannerSrc: daoPartyBanner
								}
							}
						}

						if (event.eventname === "Summer Solstice") {
							return {
								...event,
								custom_data: {
									bannerSrc: summerSolsticeBanner
								}
							}
						}
						return event
					})
					setEvents(_events)
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

export const useEvent = (
	id?: string
): {event: EventContent | undefined; error: string | undefined; loading: boolean} => {
	const [event, setEvent] = useState<EventContent>()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getEvent = async () => {
			setLoading(true)
			await fetch(`${config.BASE_URL}events/event/?token=${config.TOKEN}&event_id=${id}`)
				.then(response => response.json())
				.then(data => {
					let _event = {...data.event}
					if (_event.eventname === "Post-ETH Denver Defrost Meet-Up") {
						_event = {
							...event,
							custom_data: {
								bannerSrc: featuredEventBanner
							}
						}
					}
					if (_event.eventname === "DAO Meetings") {
						_event = {
							...event,
							custom_data: {
								bannerSrc: daoMeetingBanner
							}
						}
					}
					if (_event.eventname === "Exhibit 1") {
						_event = {
							...event,
							custom_data: {
								bannerSrc: exhibitOneEventBanner
							}
						}
					}
					setEvent(_event)
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
