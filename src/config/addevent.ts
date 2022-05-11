import seedImage from "../assets/images/seeds.png"
import {EventContent} from "../types/event"

/* eslint-disable */
export default {
	BASE_URL: "https://www.addevent.com/api/v1/oe/",
	TOKEN: process.env.REACT_APP_ADDEVENT_TOKEN
}

/* eslint-enable */

export const SUPPORT_UKRAINE_EVENT: EventContent = {
	id: "support_ukraine",
	title: "Seeds of Ukraine NFTs",
	eventname: "Seeds of Ukraine NFTs",
	description: `<p>
	Hundreds of thousands of Ukrainian people have fled their homes to seek refuge in
	neighboring European countries. Millions more are attempting to escape the chaos but
	are stranded on roadways due to traffic, abandoned cars, and lack of gas. Banks
	across the country have been overwhelmed and Ukrainians, who still rely heavily on
	cash payments, are unable to cover the costs of getting themselves out. The
	developer of this site — a member of Seker DAO and a good friend of all of ours — is
	currently in the midst of this struggle. The artist of this NFT, another DAO member,
	grew up in the Ukraine and has family there. This war hits close to home for all.
	Purchasing a print of this NFT will be your badge of support. 100% of the proceeds
	go to humanitarian aid for those trying to evacuate including the members of Seker
	Factory trapped in this conflict. We all thank you for your support.
</p>
<p>Please install MetaMask or WalletConnect before donating.</p>`,
	location: "Join Seker Factory in Supporting Ukraine",
	date_start: "Ongoing",
	date_start_time: "00:00",
	date_start_ampm: "AM",
	date_end: "Ongoing",
	date_end_time: "00:00",
	date_end_ampm: "AM",
	date_format: "",
	timezone: "",
	link_short: "",
	custom_data: {
		bannerSrc: seedImage
	},
	rrule: ""
}
