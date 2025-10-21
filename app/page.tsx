"use client"

import { useState, useEffect } from 'react'
import { questionsData, QuestionData } from '@/data/questions'
import Question from '@/components/Question'
import CelebratoryGraphic from '@/components/CelebratoryGraphic'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator } from 'lucide-react'

// Number of questions to display
const NUM_QUESTIONS = 5

// Function to get random questions from the pool
function getRandomQuestions(count: number): QuestionData[] {
  const shuffled = [...questionsData].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count).map(q => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5)
  }))
}

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  // Initialize quiz when started
  useEffect(() => {
    if (quizStarted && questions.length === 0) {
      const selectedQuestions = getRandomQuestions(NUM_QUESTIONS)
      setQuestions(selectedQuestions)
      setAnswers(new Array(NUM_QUESTIONS).fill(''))
    }
  }, [quizStarted, questions.length])

  const handleStart = () => {
    setQuizStarted(true)
  }

  const handleSelectAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    let correctCount = 0
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correctCount++
      }
    })
    setScore(correctCount)
    setSubmitted(true)
  }

  const handleRetake = () => {
    setQuizStarted(false)
    setCurrentQuestionIndex(0)
    setAnswers([])
    setQuestions([])
    setSubmitted(false)
    setScore(0)
  }

  const isPerfectScore = score === questions.length

  // Start screen
  if (!quizStarted) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Calculator className="w-12 h-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-4xl mb-2">GCSE Maths Test</CardTitle>
            <CardDescription className="text-lg">
              Test your GCSE mathematics knowledge
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              You will be asked <strong>{NUM_QUESTIONS} random questions</strong> from our question pool.
            </p>
            <p className="text-muted-foreground">
              Select the correct answer for each question and submit your answers at the end.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleStart} size="lg" className="px-8">
              Begin Test
            </Button>
          </CardFooter>
        </Card>
      </main>
    )
  }

  // Results screen
  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-full max-w-2xl">
          {isPerfectScore ? (
            <CelebratoryGraphic />
          ) : (
            <Card className="w-full text-center">
              <CardHeader>
                <CardTitle className="text-3xl">Test Complete!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {score}/{questions.length}
                </div>
                <p className="text-xl text-muted-foreground">
                  {score === questions.length
                    ? "Perfect! You got all questions correct!"
                    : `You scored ${Math.round((score / questions.length) * 100)}%`}
                </p>
              </CardContent>
            </Card>
          )}
          <div className="mt-6 flex justify-center">
            <Button onClick={handleRetake} variant="outline" size="lg">
              Retake Test
            </Button>
          </div>
        </div>
      </main>
    )
  }

  // Quiz screen
  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const canSubmit = answers.every(answer => answer !== '')

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-2xl space-y-6">
        {/* Progress indicator */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        {currentQuestion && (
          <Question
            question={currentQuestion}
            selectedOption={answers[currentQuestionIndex]}
            onSelect={handleSelectAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        )}

        {/* Navigation */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center gap-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                variant="outline"
              >
                Previous
              </Button>

              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentQuestionIndex
                        ? 'bg-primary'
                        : answers[index]
                        ? 'bg-primary/50'
                        : 'bg-secondary'
                    }`}
                    aria-label={`Go to question ${index + 1}`}
                  />
                ))}
              </div>

              {isLastQuestion ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  variant="default"
                >
                  Submit Test
                </Button>
              ) : (
                <Button onClick={handleNext} variant="default">
                  Next
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
