import fetchJsonp from "fetch-jsonp"
import {useState, FormEventHandler, Dispatch, SetStateAction} from "react"
import config from "../../../config/mailchimp"

const useSubscribeForm = (): {
	email: string
	setEmail: Dispatch<SetStateAction<string>>
	handleSubmit: FormEventHandler<HTMLFormElement>
	handleSubscribeToNewsletter: (_email: string) => Promise<{_success: boolean; _error: string}>
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
		const {_success, _error} = await handleSubscribeToNewsletter(email)
		setSuccess(_success)
		setError(_error)
	}

	const handleSubscribeToNewsletter = async (_email: string) => {
		let _success = false
		let _error = ""
		await fetchJsonp(`${formActionUrl}&EMAIL=${_email}`, {
			jsonpCallback: "c"
		})
			.then(response => response.json())
			.then(data => {
				if (data.result !== "success") {
					_success = false
					if (data.msg.includes("already subscribed to list")) {
						_error = "Woops! You already subscribed :)"
					} else {
						_error = data.msg
					}
				} else {
					_success = true
				}
			})
			.catch(() => {
				_success = false
				_error = "Unkown error occured. Please, try later"
			})

		return {_success, _error}
	}

	return {
		formActionUrl,
		handleSubmit,
		handleSubscribeToNewsletter,
		email,
		setEmail,
		success,
		error
	}
}

export default useSubscribeForm
