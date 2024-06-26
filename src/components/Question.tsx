// Component to display the specific maths question and the available options, and to handle the user's answer

import React from 'react';

interface QuestionProps {
	question: string;
	options: string[];
	onSelect: (option: string) => void;
	selectedOption: string | null;
}

const Question: React.FC<QuestionProps> = ({ question, options, onSelect, selectedOption }) => {
	return (
		<div className="options-container">
			{options.map((option, index) => (
				<div key={index}>
					<label>
						<input
							type="radio"
							name={question}
							value={option}
							checked={selectedOption === option}
							onChange={() => onSelect(option)}
						/>
						{option}
					</label>
				</div>
			))}
		</div>
	);
};

export default Question;
