# GCSE Maths Test

A modern, interactive GCSE maths quiz built with Next.js 14, TypeScript, and shadcn/ui components.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **shadcn/ui** - Beautiful, accessible UI components built with Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **React Confetti** - Celebratory animations for perfect scores

## Features

- 🎯 Random question selection from a pool of 20 GCSE maths questions
- 📊 Progress tracking with visual indicators
- ✅ Interactive multiple-choice questions with radio buttons
- 🎉 Confetti celebration for perfect scores
- 📱 Fully responsive design
- ♿ Accessible UI components
- 🎨 Modern, clean interface with gradient backgrounds

## Project Structure

```
maths-test/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main quiz page with state management
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── radio-group.tsx
│   │   └── label.tsx
│   ├── Question.tsx        # Question display component
│   └── CelebratoryGraphic.tsx  # Success celebration component
├── data/
│   └── questions.ts        # Question pool (20 GCSE questions)
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

### Key Files

**`data/questions.ts`**
- Contains the pool of all GCSE maths questions as an array of objects
- Each question includes: question text, 4 multiple choice options, and the correct answer
- Topics include: decimals, powers, algebra, statistics, fractions, percentages, sequences
- To add more questions, simply add objects to the array with the same format

**`app/page.tsx`**
- Main quiz component with state management
- Randomly selects 5 questions from the question pool
- Handles quiz flow: start screen → questions → results
- Shuffles answer options for each question
- Displays celebratory graphic for 100% scores

**`components/Question.tsx`**
- Displays a single question with radio button options
- Uses shadcn/ui RadioGroup for accessible selection
- Shows question number and progress

**`components/CelebratoryGraphic.tsx`**
- Displays congratulations message with full-screen confetti
- Automatically adapts to window size changes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/guyneh/maths-test.git
   ```

2. Navigate to the project directory:
   ```bash
   cd maths-test
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000/maths-test](http://localhost:3000/maths-test) in your browser

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, suitable for deployment to GitHub Pages or any static hosting service.

## Live Demo

🔗 [https://guyneh.github.io/maths-test/](https://guyneh.github.io/maths-test/)

## Customization

### Change Number of Questions

Edit `NUM_QUESTIONS` in `app/page.tsx`:
```typescript
const NUM_QUESTIONS = 5 // Change to any number up to 20
```

### Add More Questions

Add new question objects to the array in `data/questions.ts`:
```typescript
{
  question: 'Your question here?',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correct: 'Option 1',
}
```

### Customize Theme

Modify CSS variables in `app/globals.css` to change colors and styling.

## License

This project is open source and available under the MIT License.
