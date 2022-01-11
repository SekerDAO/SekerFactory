import {FunctionComponent, ReactElement} from "react"
import {ReactComponent as StepDotCurrentIcon} from "../../assets/icons/step-dot-current.svg"
import {ReactComponent as StepDotDoneIcon} from "../../assets/icons/step-dot-done.svg"
import {ReactComponent as StepDotNextIcon} from "../../assets/icons/step-dot-next.svg"
import "./styles.scss"

const Stepper: FunctionComponent<{
	steps: {title: string; content: ReactElement}[]
	currentStepIndex: number
	onStepClick: (stepId: number) => void
	StepContentWrapper?: FunctionComponent
}> = ({steps, currentStepIndex, onStepClick, StepContentWrapper}) => {
	const currentStep = steps[currentStepIndex]
	return (
		<>
			<div className="stepper">
				{steps.map(({title}, index) => {
					const stepDone = index < currentStepIndex
					const isCurrentStep = index === currentStepIndex
					return (
						<div
							key={index}
							onClick={() => onStepClick(index)}
							className={`stepper__step${
								stepDone ? " stepper__step--done" : isCurrentStep ? " stepper__step--current" : ""
							}`}
						>
							<h3>{title}</h3>
							{stepDone ? (
								<StepDotDoneIcon width="20px" height="20px" />
							) : isCurrentStep ? (
								<StepDotCurrentIcon width="20px" height="20px" />
							) : (
								<StepDotNextIcon width="20px" height="20px" />
							)}
						</div>
					)
				})}
			</div>
			{StepContentWrapper ? (
				<StepContentWrapper>{currentStep.content}</StepContentWrapper>
			) : (
				currentStep.content
			)}
		</>
	)
}

export default Stepper
