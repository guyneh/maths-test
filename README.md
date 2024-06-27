# Maths tester
A simple GCSE maths quiz built with React using Typescript

## Project Structure:
`src/data/questions.ts`:
-   Contains the pool of all GCSE maths questions used in the quiz as an array of objects
-   Each question is an object with the question text, 4 multiple choice options and one correct answer
-   To add more questions, simply add an object to the end of the array with the same format

`src/components`:
-   `Question.tsx`: Displays a single question with multiple choice options
-   `CelebratoryGraphic.tsx`: Displays a celebratory graphic if the user gets all questions correct

`src/App.tsx`:
-   Main component that sets up the quiz
-   Randomly selects a specified number of questions from the question pool (alter numQuestions for more/less questions)
-   Handles the state of the quiz (current question index, user's answers, submission etc.)
-   Displays the questions and the celebratory graphic if the user gets 100%

`src/App.css`:
-   CSS styles for buttons, containers and other elements


## Dependencies:
- TypeScript
- react
- react-confetti


## Demo:
### Live Demo:
https://guyneh.github.io/maths-test/

### Run locally:
1.  Clone the repository in your terminal:
    -   git clone https://github.com/guyneh/maths-test.git

2. Navigate to the project directory:
    -   cd maths-test

3. Install dependencies:
    -   npm install

4. Start development server:
    -   npm start

5. Open your browser and go to http://localhost:3000 to view the app