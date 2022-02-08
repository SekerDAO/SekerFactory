import fetchJsonp from "fetch-jsonp"
import {useState, FormEventHandler} from "react"
import config from "../../../../../config/mailchimp"

const useAllowlist = (joinAllowlistType: "top" | "001" | undefined) => {
	const [email, setEmail] = useState("")
	const [wallet, setWallet] = useState("")
	const [social, setSocial] = useState("")
	const [error, setError] = useState("")
	const [success, setSuccess] = useState(false)

	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		let clearanceCard = "001 Clearance Cards"
		if (joinAllowlistType === "top") {
			clearanceCard = "Top Clearance Cards"
		}
		await fetchJsonp(
			`${formActionUrl}&EMAIL=${email}&WALLET=${wallet}&SOCIALLINK=${social}&CARD=${clearanceCard}`,
			{
				jsonpCallback: "c"
			}
		)
			.then(response => response.json())
			.then(data => {
				if (data.result !== "success") {
					setSuccess(false)
					if (data.msg.includes("already subscribed to list")) {
						setError("Woops! You already subscribed :)")
					} else {
						setError(data.msg)
					}
				} else {
					setSuccess(true)
				}
			})
			.catch(() => {
				setSuccess(false)
				setError("Unkown error occured. Please, try later")
			})
	}
	const formActionUrl = `https://${config.ALLOWLIST_FORM.DOMAIN}/subscribe/post-json?u=${config.ALLOWLIST_FORM.U}&amp;id=${config.ALLOWLIST_FORM.ID}`
	return {
		email,
		setEmail,
		wallet,
		setWallet,
		social,
		setSocial,
		error,
		success,
		handleSubmit,
		formActionUrl
	}
}

export default useAllowlist
