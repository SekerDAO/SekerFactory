import fetchJsonp from "fetch-jsonp"
import {useState, FormEventHandler, Dispatch, SetStateAction} from "react"
import useSubscribeForm from "../../../../../components/Subscribe/hooks"
import config from "../../../../../config/mailchimp"

const useAllowlist = ({
	joinAllowlistType,
	setJoinAllowlistType
}: {
	joinAllowlistType: "TOP" | "001" | undefined
	setJoinAllowlistType: Dispatch<SetStateAction<"TOP" | "001" | undefined>>
}) => {
	const [email, setEmail] = useState("")
	const [wallet, setWallet] = useState("")
	const [error, setError] = useState("")
	const [success, setSuccess] = useState(false)
	const [shouldSubscribeToNewsletter, setShouldSubscribeToNewsletter] = useState(true)
	const {handleSubscribeToNewsletter} = useSubscribeForm()
	const getFormActionUrl = () => {
		if (joinAllowlistType) {
			return `https://${config.ALLOWLIST_FORM[joinAllowlistType].DOMAIN}/subscribe/post-json?u=${config.ALLOWLIST_FORM[joinAllowlistType].U}&amp;id=${config.ALLOWLIST_FORM[joinAllowlistType].ID}`
		}
	}

	const handleClose = () => {
		setJoinAllowlistType(undefined)
		setEmail("")
		setWallet("")
		setError("")
		setSuccess(false)
	}
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		setError("")
		await fetchJsonp(`${getFormActionUrl()}&EMAIL=${email}&WALLET=${wallet}`, {
			jsonpCallback: "c"
		})
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

		if (shouldSubscribeToNewsletter) {
			const {_success, _error} = await handleSubscribeToNewsletter(email)
			if (_error === "Woops! You already subscribed :)") {
				// Not a big deal if user already subscribed to the newsletter - just ignore the error
				setSuccess(true)
				setError("")
			} else {
				setSuccess(_success)
				setError(_error)
			}
		}
	}
	return {
		email,
		setEmail,
		wallet,
		setWallet,
		error,
		success,
		handleSubmit,
		formActionUrl: getFormActionUrl(),
		handleClose,
		shouldSubscribeToNewsletter,
		setShouldSubscribeToNewsletter
	}
}

export default useAllowlist
