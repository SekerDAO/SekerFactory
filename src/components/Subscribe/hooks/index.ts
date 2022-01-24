import fetchJsonp from "fetch-jsonp"
import {useState, FormEventHandler, Dispatch, SetStateAction} from "react"
import config from "../../../config/mailchimp"

const useSubscribeForm = (): {
	email: string
	setEmail: Dispatch<SetStateAction<string>>
	handleSubmit: FormEventHandler<HTMLFormElement>
	formActionUrl: string
	success: boolean
	error: string
} => {
	const [email, setEmail] = useState("")
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState("")

	// https://stackoverflow.com/questions/8425701/ajax-mailchimp-signup-form-integration
	const formActionUrl = `https://${config.SUBSCRIBE_FORM.DOMAIN}/subscribe/post-json?u=${config.SUBSCRIBE_FORM.U}&amp;id=${config.SUBSCRIBE_FORM.ID}`
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		await fetchJsonp(`${formActionUrl}&EMAIL=${email}`, {
			jsonpCallback: "c"
		})
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

	return {
		formActionUrl,
		handleSubmit,
		email,
		setEmail,
		success,
		error
	}
}

export default useSubscribeForm
