// List of questions for the maths test

export interface QuestionData {
	question: string;
	options: string[];
	correct: string;
}

export const questionsData: QuestionData[] = [
	{
		question: 'Select the value of the digit 6 in the number 31.564',
		options: ['6/10', '6/100', '6/1000', '64/1'],
		correct: '6/100',
	},
	{
		question: 'Write 16 * (2 ^ 8) as a single power of 2',
		options: ['2', '2^12', '2^4', '2^2'],
		correct: '2^12',
	},
	{
		question: 'Solve for x: 2x + 5 = 15',
		options: ['5', '10', '15', '20'],
		correct: '5',
	},
	{
		question: 'If 4 numbers have a mean of 20, what is the total of the 4 numbers ?',
		options: ['20', '80', '5', '70'],
		correct: '80',
	},
	{
		question: 'What is 6 - 7 ?',
		options: ['1', '0', '-1', '-2'],
		correct: '-1',
	},
	{
		question: 'What is 0.006 / 0.02 ?',
		options: ['0.0003', '0.3', '0.03', '0.00003'],
		correct: '0.3',
	},
	{
		question: 'What is the square root of 49?',
		options: ['5', '6', '7', '8'],
		correct: '7',
	},
	{
		question: 'What is 7/9 - 2/5',
		options: ['5/4', '14/45', '4/45', '17/45'],
		correct: '17/45',
	},
	{
		question: 'What is 9 x 6?',
		options: ['52', '54', '56', '58'],
		correct: '54',
	},
	{
		question: 'What is 51,000,000 / 300 in standard form ?',
		options: ['17 x 10^4', '1.7 x 10^9', '17 x 10^8', '1.7 x 10^5'],
		correct: '1.7 x 10^5',
	},
	{
		question: 'Solve for x: 6x + 3 = 17 - x',
		options: ['5', '2', '4', '7'],
		correct: '2',
	},
	{
		question: 'What is 25% of 80?',
		options: ['15', '20', '25', '30'],
		correct: '20',
	},
	{
		question: 'What is the cube root of 27?',
		options: ['2', '3', '4', '5'],
		correct: '3',
	},
	{
		question: 'Calculate 2506 * 159, giving your answer to 1 significant figure.',
		options: ['400,000', '300,000', '398,454', '4'],
		correct: '400,000',
	},
	{
		question: 'The ratio of sheep to cows is 5:6. If there are 114 cows, how many sheep are there ?',
		options: ['108', '110', '95', '113'],
		correct: '95',
	},
	{
		question: 'What is 200 - 75?',
		options: ['115', '120', '125', '130'],
		correct: '125',
	},
	{
		question: 'In the following list of numbers, which of the statements is true ? 1 2 3 4 8 12 17 51 64 91',
		options: ['There are 3 mutliples of 3', 'There are only 3 factors of 12', 'There are 2 cube numbers', 'There are 4 prime numbers'],
		correct: 'There are 3 mutliples of 3',
	},
	{
		question: 'What is 40% of 50?',
		options: ['15', '20', '25', '30'],
		correct: '20',
	},
	{
		question: 'What is the square root of 81?',
		options: ['7', '8', '9', '10'],
		correct: '9',
	},
	{
		question: 'Find an expression for the n-th term of this sequence: 5 12 19 26 33',
		options: ['7n - 2', 'Add 7 to get the next term', '7n + 2', '5n + 7'],
		correct: '7n - 2',
	},
];
