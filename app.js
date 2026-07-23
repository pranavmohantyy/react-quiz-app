const questions = require('./questions.json');

const DifficultyFilter = () => {
    const [difficulty, setDifficulty] = React.useState('Easy');
    const [streak, setStreak] = React.useState(0);
    const [score, setScore] = React.useState(0);
    let timer = 10;
    if (difficulty === 'Medium') timer = 20;
    else if (difficulty === 'Hard') timer = 30;

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setStreak(streak + 1);
            setScore(score + 1);
        } else {
            setStreak(0);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key >= '1' && event.key <= '4') {
            const answerIndex = parseInt(event.key) - 1;
            const isCorrect = questions[currentQuestion].correctAnswer === answerIndex;
            handleAnswer(isCorrect);
        } else if (event.key === ' ') {
            // proceed to next question
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            {/* Quiz UI rendering here */}
        </div>
    );
};

export default DifficultyFilter;