import fetchJsonp from "fetch-jsonp"
import {useState, FormEventHandler, Dispatch, SetStateAction} from "react"
import config from "../../../../../config/mailchimp"

const useAllowlist = ({
	joinAllowlistType,
	setJoinAllowlistType
}: {
	joinAllowlistType: "top" | "001" | undefined
	setJoinAllowlistType: Dispatch<SetStateAction<"top" | "001" | undefined>>
}) => {
	const [email, setEmail] = useState("")
	const [wallet, setWallet] = useState("")
	const [social, setSocial] = useState("")
	const [error, setError] = useState("")
	const [success, setSuccess] = useState(false)
	const formActionUrl = `https://${config.ALLOWLIST_FORM.DOMAIN}/subscribe/post-json?u=${config.ALLOWLIST_FORM.U}&amp;id=${config.ALLOWLIST_FORM.ID}`

	const handleClose = () => {
		setJoinAllowlistType(undefined)
		setEmail("")
		setWallet("")
		setSocial("")
		setError("")
		setSuccess(false)
	}
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		setError("")
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
						setError("Woops! You already joined allowlist :)")
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
		formActionUrl,
		handleClose
	}
}

export default useAllowlist
