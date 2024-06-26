// List of questions for the maths test

export interface QuestionData {
	question: string;
	options: string[];
	correct: string;
}

export const questionsData: QuestionData[] = [
	{
		question: 'What is 2 + 2?',
		options: ['3', '4', '5', '6'],
		correct: '4',
	},
	{
		question: 'What is 3 x 3?',
		options: ['6', '9', '12', '15'],
		correct: '9',
	},
	{
		question: 'What is 4 + 4?',
		options: ['6', '7', '8', '9'],
		correct: '8',
	},
	{
		question: 'What is 5 x 5?',
		options: ['20', '25', '30', '10'],
		correct: '25',
	},
	{
		question: 'What is 6 - 7?',
		options: ['1', '0', '-1', '-2'],
		correct: '-1',
	},
];