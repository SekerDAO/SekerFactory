export interface EventContent {
	id: string
	title: string
	description: string
	location: string
	date_start: string
	date_end: string
	date_format: string
	timezone: string
	link_short: string
	custom_data?: {
		bannerSrc?: string
		streamUrl?: string
		recordingUrl?: string
	} | null
}
