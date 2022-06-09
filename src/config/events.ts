import Ukraine from "../abi/Ukraine.json"
import s1CohortBanner from "../assets/images/Event_S1ArtistCohort_Application.png"
import sekerClubSaturdayBanner from "../assets/images/Event_SekerClub.png"
import vervSeriesBanner from "../assets/images/Event_VERVSeries_v2.png"
import vervBanner from "../assets/images/Event_VERV_v2.png"
import s1CohortImage from "../assets/images/season1_cohortapplications.png"
import seedBanner from "../assets/images/seeds.png"
import seedImage from "../assets/images/seedsofukrainenft.png"
import sekerClubSaturdayImage from "../assets/images/sekerclubsaturdays.png"
import vervImage from "../assets/images/verv.png"
import vervSeriesImage from "../assets/images/verv_solstice.png"
import config from "./eth"

export type EventDate = {
	date_start?: string
	date_start_time?: string
	date_start_ampm?: "AM" | "PM"
	date_end?: string
	date_end_time?: string
	date_end_ampm?: "AM" | "PM"
	date_format?: string
}

export type EventData = {
	id: string
	title: string
	description: string
	description2?: string
	image: string
	subPageImage: string
	location?: string
	dates: EventDate[]
	mint?: {
		address: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		abi: any
		etherValue: string
		buttonText?: string
	}
	showMoreInfo: boolean
	showDescription: boolean
	links: {
		title: string
		url: string
	}[]
}

export const events: EventData[] = [
	{
		id: "verv",
		title: "VERV: A Mixed Reality Solstice Experience",
		description: `<p>
    Join us for an unforgettable, members-only night of immersive digital magic – with 
    transformative live performances, tantalizing food and craft cocktails, new interactive
     digital art, and much more – to conclude our s.0 artist cohort.
    </p>`,
		description2: `<p>Guestlist open:<br/> Fri | June 3, 2022</p>`,
		image: vervBanner,
		subPageImage: vervImage,
		location: "Seker Factory 001 (Los Angeles)",
		dates: [
			{
				date_start: "06/21/2022",
				date_start_time: "19:00:00",
				date_start_ampm: "PM",
				date_end: "06/21/2022",
				date_end_time: "22:00:00",
				date_end_ampm: "PM",
				date_format: "MM/DD/YYYY"
			}
		],
		links: [
			{
				title: "RSVP",
				url: "https://www.addevent.com/event/JQ13973574"
			}
		],
		showMoreInfo: true,
		showDescription: false
	},
	{
		id: "verv_solstice_series",
		title: "The VERV Solstice Series",
		description: `<p>Unable to attend <b>VERV: A Mixed Reality Solstice Experience?</b><br/> 
    You can still experience the magic of Seker Factory 001's summer solstice creations through 
    our Solstice Series.</p>`,
		description2: `<p><b>Open to public.</b><br/>
    Event is 18+.<br/>
    RSVP is required.<br/><br/>
    Tickets go on sale:<br/>
    Fri | June 3, 2022</p>`,
		image: vervSeriesBanner,
		subPageImage: vervSeriesImage,
		location: "836 S Los Angeles Street Los Angeles, CA 90014",
		dates: [
			{
				date_start: "06/18/2022",
				date_start_time: "20:00:00",
				date_start_ampm: "PM",
				date_end: "06/18/2022",
				date_end_time: "12:00:00",
				date_end_ampm: "AM",
				date_format: "MM/DD/YYYY"
			},
			{
				date_start: "06/25/2022",
				date_start_time: "20:00:00",
				date_start_ampm: "PM",
				date_end: "06/25/2022",
				date_end_time: "12:00:00",
				date_end_ampm: "AM",
				date_format: "MM/DD/YYYY"
			}
		],
		links: [
			{
				title: "June 18th Tickets",
				url: "https://www.eventbrite.com/e/verv-solstice-series-opening-saturday-tickets-360588659387"
			},
			{
				title: "June 25th Tickets",
				url: "https://www.eventbrite.com/e/verv-solstice-series-closing-saturday-tickets-360968224677"
			}
		],
		showDescription: false,
		showMoreInfo: true
	},
	{
		id: "s1_cohort",
		title: "Now Accepting s.1 Cohort Applications",
		description: `<p>Interested in having access to all of our technical and creative 
    resources and showcasing your work at Seker Factory? We believe in democratic, 
    community-based curation, and each of our seasonal artist cohorts are voted on by DAO members. 
    <b>Applications are open to all forms of digital creators.</b><br/><br/>
    Steps to apply:<br/><br/>
    1). Purchase any Seker Factory Clearance Card to become a DAO member. 
    You can do so on the homepage.<br/><br/>
    2). Upgrade your membership to level 1 (voting member) by proving humanity. 
    You can do so by attending any of our events or by joining our Discord and requesting 
    leveling in our "LVL Clearance Cards" channel.<br/><br/>
    3). Submit an application before the deadline. You can do so on the homepage or via "Apply" 
    in the top navigation menu.</p>`,
		image: s1CohortBanner,
		subPageImage: s1CohortImage,
		dates: [
			{
				date_start: "05/23/2022",
				date_end: "06/06/2022",
				date_format: "MM/DD/YYYY"
			}
		],
		links: [
			{
				title: "Apply Now",
				url: "https://docs.google.com/forms/d/e/1FAIpQLSf6EpkzVMPe05mW1ijIFbQQFIr62-einO_h54FpceMoNmitmA/viewform"
			}
		],
		showDescription: false,
		showMoreInfo: true
	},
	{
		id: "sekerclub_saturdays",
		title: "SekerClub Saturdays",
		description: `<p>Walk through the gates of SekerClub on Saturdays and descend into the 
    entrancing vibes of the digital necropolis. You can dance the night away and experience the 
    Seker Factory Metaverse Portal in-person or from the comfort of your own home through VRChat.
    <br/><br/> 
    <b>More excitingly, as Seker Factory Clearance Card members, you can earn our ERC-20 tokens 
    (SEKER) for attending (via IRL/VR). So grab a card and don't miss the chance to earn while 
    you party!</b><br/><br/>
    For more information on the next SekerClub event, follow us on Instagram and 
    Twitter or join our Discord! Events are 21+. RSVP is required.</p>`,
		image: sekerClubSaturdayBanner,
		subPageImage: sekerClubSaturdayImage,
		dates: [
			{
				date_start: "07/02/2022",
				date_start_time: "20:00:00",
				date_start_ampm: "PM",
				date_end: "07/03/2022",
				date_end_time: "02:00:00",
				date_end_ampm: "AM",
				date_format: "MM/DD/YYYY"
			}
		],
		links: [],
		showMoreInfo: true,
		showDescription: false
	},
	{
		id: "support_ukraine",
		title: "Seeds of Ukraine NFTs",
		description: `<p>
    Hundreds of thousands of Ukrainian people have fled their homes to seek refuge in
	  neighboring European countries. Millions more are attempting to escape the chaos but
	  are stranded on roadways due to traffic, abandoned cars, and lack of gas. Banks
	  across the country have been overwhelmed and Ukrainians, who still rely heavily on
	  cash payments, are unable to cover the costs of getting themselves out. The
	  developer of this site — a member of Seker DAO and a good friend of all of ours — is
	  currently in the midst of this struggle. The artist of this NFT, another DAO member,
	  grew up in the Ukraine and has family there. This war hits close to home for all.
	  <br/><br/>
	  Purchasing a print of this NFT will be your badge of support. 100% of the proceeds
	  go to humanitarian aid for those trying to evacuate including the members of Seker
	  Factory trapped in this conflict. We all thank you for your support.
    </p>`,
		image: seedBanner,
		subPageImage: seedImage,
		mint: {
			address: config.SUPPORT_UKRAINE_CONTRACT_ADDRESS,
			abi: Ukraine.abi,
			etherValue: "0.05",
			buttonText: "Donate"
		},
		showMoreInfo: true,
		showDescription: false,
		links: [],
		dates: []
	}
]
