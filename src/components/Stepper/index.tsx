import {FunctionComponent, ReactElement} from "react"
import "./styles.scss"

const Stepper: FunctionComponent<
	React.PropsWithChildren<{
		steps: {title: string; content?: ReactElement}[]
		currentStepIndex: number
		onStepClick: (stepId: number) => void
	}>
> = ({steps, currentStepIndex, onStepClick}) => (
	<>
		<div className="stepper">
			{steps.map(({title}, index) => {
				const isCurrentStep = index === currentStepIndex
				return (
					<div
						key={index}
						onClick={() => onStepClick(index)}
						className={`stepper__step${isCurrentStep ? " stepper__step--current" : ""}`}
					>
						<p>{title}</p>
						{isCurrentStep ? (
							<div className="stepper__step-icon stepper__step-icon--current" />
						) : (
							<div className="stepper__step-icon" />
						)}
					</div>
				)
			})}
		</div>
	</>
)

export default Stepper
