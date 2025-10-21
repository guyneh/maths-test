"use client"

import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CelebratoryGraphic() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
      />
      <Card className="w-full text-center">
        <CardHeader>
          <CardTitle className="text-3xl text-green-600">
            🎉 Congratulations! 🎉
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-2">Perfect Score!</p>
          <p className="text-muted-foreground">
            You answered all questions correctly!
          </p>
        </CardContent>
      </Card>
    </>
  )
}
