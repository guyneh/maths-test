"use client"

import { QuestionData } from '@/data/questions'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface QuestionProps {
  question: QuestionData
  selectedOption: string
  onSelect: (option: string) => void
  questionNumber: number
  totalQuestions: number
}

export default function Question({
  question,
  selectedOption,
  onSelect,
  questionNumber,
  totalQuestions,
}: QuestionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">
          Question {questionNumber} of {totalQuestions}
        </CardTitle>
        <p className="text-base font-normal mt-4">{question.question}</p>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption} onValueChange={onSelect}>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-base"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
