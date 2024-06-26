// Main page

import React, { useState, useEffect } from 'react';
import './App.css';

import Question from './components/Question';
import CelebratoryGraphic from './components/CelebratoryGraphic';
import { questionsData, QuestionData } from './data/questions';

// Function to shuffle an array (for questions and options)
const shuffleArray = <T,>(array: T[]): T[] => {
	return array.sort(() => 0.5 - Math.random());
}

// Shuffle and retrieve a number of random questions from the questionsData array
const getRandomQuestions = (questions: QuestionData[], count: number): QuestionData[] => {
	const shuffledQuestions = shuffleArray(questions);
	const selectedQuestions = shuffledQuestions.slice(0, count);

	// Shuffle options order for each selected question
	return selectedQuestions.map(question => ({
		...question,
		options: shuffleArray(question.options)
	}));
}

const App: React.FC = () => {
	// Number of questions to display in the quiz
	const numQuestions = 5;

	// States to manage the current question index, the user's answers, and whether the user has submitted their answers
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedQuestions, setSelectedQuestions] = useState<QuestionData[]>([]);
	const [answers, setAnswers] = useState<(string | null)[]>(Array(numQuestions).fill(null));
	const [submitted, setSubmitted] = useState(false);
	const [started, setStarted] = useState(false);

	// Select a number random questions when the component mounts
	useEffect(() => {
		setSelectedQuestions(getRandomQuestions(questionsData, numQuestions));
	}, []);

	// Handle the user's answer to the current question
	const handleSelect = (option: string) => {
		const newAnswers = [...answers];
		newAnswers[currentQuestionIndex] = option;
		setAnswers(newAnswers);
	}

	// Handle navigating between questions
	const handleNext = () => {
		setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
	}
	const handlePrevious = () => {
		setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
	}

	// Handle submitting the answers
	const handleSubmit = () => {
		setSubmitted(true);
	}

	// Handle restarting the quiz
	const handleRetake = () => {
		setAnswers(Array(numQuestions).fill(null));
		setCurrentQuestionIndex(0);
		setSubmitted(false);
		setStarted(false)
		setSelectedQuestions(getRandomQuestions(questionsData, numQuestions));
	}

	// Calculate the number of correct answers
	const numCorrect = answers.filter((answer, index) => answer === questionsData[index].correct).length;
	const allCorrect = numCorrect === numQuestions;

	return (
		<div className="app-container">
			{started && (
				<div className="header-container">
					<h1 className="header-title">GCSE Maths Test</h1>
				</div>
			)}
			<div className="container">
				{!started ? (
					<div>
						<h1>GCSE Maths Test</h1>
						<p>{numQuestions} questions to answer</p>
						<button onClick={() => setStarted(true)}>Begin</button>
					</div>
				) : submitted ? (
					allCorrect ? (
						<CelebratoryGraphic />
					) : (
						<div>
							<h1>You scored {numCorrect} out of {numQuestions}</h1>
							<h3>Try again!</h3>
							<button onClick={handleRetake}>Retake</button>
						</div>
					)
				) : (
					<div className="question-container">
						{selectedQuestions.length > 0 && (
							<>
								<h2 className="question-heading">Question {currentQuestionIndex + 1}</h2>
								<p className="question-text">{selectedQuestions[currentQuestionIndex].question}</p>
								<Question
									question={selectedQuestions[currentQuestionIndex].question}
									options={selectedQuestions[currentQuestionIndex].options}
									onSelect={handleSelect}
									selectedOption={answers[currentQuestionIndex]}
								/>
							</>
						)}
						<div className="button-container">
							{currentQuestionIndex > 0 && (
								<button className="button-left" onClick={handlePrevious}>Previous</button>
							)}
							{currentQuestionIndex < selectedQuestions.length - 1 ? (
								<button className="button-right" onClick={handleNext} disabled={!answers[currentQuestionIndex]}>Next</button>
							) : (
								<button className="button-right" onClick={handleSubmit} disabled={!answers[currentQuestionIndex]}>Submit</button>
							)}
						</div>
					</div>
				)}
				{started && (
					<button className="restart-button" onClick={handleRetake}>Back to Home</button>
				)}
			</div>
		</div>
	);
};

export default App;
