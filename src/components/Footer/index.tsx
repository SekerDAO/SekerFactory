import {FunctionComponent, useState} from "react"
import Stepper from "../Stepper"
import {GenesisStep, PhaseOne, PhaseThree, PhaseTwo} from "./components/Steps"
import "./index.scss"

const Footer: FunctionComponent = () => {
	const [currentStepIdx, setCurrentStepIdx] = useState(0)
	const steps = [
		{title: "Genesis", content: <GenesisStep />},
		{title: "Phase 1", content: <PhaseOne />},
		{title: "Phase 2", content: <PhaseTwo />},
		{title: "Phase 3", content: <PhaseThree />}
	]
	const currentStep = steps[currentStepIdx]
	return (
		<footer className="footer">
			<section className="footer__heading">
				<h1>Roadmap</h1>
				<Stepper currentStepIndex={currentStepIdx} steps={steps} onStepClick={setCurrentStepIdx} />
			</section>
			<section className="footer__content">{currentStep.content}</section>
			<section className="footer__bottom">
				<p>© Seker Factory 2022</p>
			</section>
		</footer>
	)
}

export default Footer
