import { useState } from 'react';
import W12MHeader from './W12MHeader';
import W12MTextBox from "./W12MTextBox";
import W12MSelectBox from "./W12MSelectBox";
import W12MTextAreaBox from "./W12MTextAreaBox";
import TextBoxStructure from "../data/textbox-struct";
import SelectBoxStructure from "../data/selectbox-struct";
import TextAreaStructure from "../data/textarea-struct";

interface W12MFormProps {
	allTextBoxes: Array<TextBoxStructure>;
	allSelectBoxes: Array<SelectBoxStructure>;
	allTextAreaBoxes: Array<TextAreaStructure>;
  }

  const W12MForm: React.FC<W12MFormProps> = ({
	allTextBoxes,
	allSelectBoxes,
	allTextAreaBoxes,
  }) => {
	const [speciesTextBoxInfo, setSpeciesTextBoxInfo] = useState<string>("");
	const [planetTextBoxInfo, setPlanetTextBoxInfo] = useState<string>("");
	const [beingsTextBoxInfo, setBeingTextBoxInfo] = useState<string>("");
	const [selectBoxInfo, setSelectBoxInfo] = useState<string>("");
	const [textAreaBoxInfo, setTextAreaBoxInfo] = useState<string>("");
	const [dataOnSubmit, setDataOnSubmit] = useState<string>("");



	

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
