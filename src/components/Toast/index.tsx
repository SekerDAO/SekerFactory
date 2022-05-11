import {FunctionComponent} from "react"
import {toast} from "react-toastify"

const ErrorToast: FunctionComponent<{message: string}> = ({message}) => (
	<div className="toast">{message}</div>
)

const WarningToast: FunctionComponent<{message: string}> = ({message}) => (
	<div className="toast">{message}</div>
)

const InfoToast: FunctionComponent<{message: string}> = ({message}) => (
	<div className="toast">{message}</div>
)

const SuccessToast: FunctionComponent<{message: string}> = ({message}) => (
	<div className="toast">{message}</div>
)

export const toastError = (message: string): void => {
	toast.error(<ErrorToast message={message} />, {hideProgressBar: true})
}

export const toastWarning = (message: string): void => {
	toast.warning(<WarningToast message={message} />, {hideProgressBar: true})
}

export const toastSuccess = (message: string): void => {
	toast.success(<SuccessToast message={message} />, {hideProgressBar: true})
}

export const toastInfo = (message: string): void => {
	toast.info(<InfoToast message={message} />, {hideProgressBar: true})
}
