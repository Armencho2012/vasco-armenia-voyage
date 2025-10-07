import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Award, ChevronDown, ChevronUp } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
}

interface UserAnswer {
  questionIndex: number;
  selectedAnswer: number;
  correctAnswer: number;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [playerName, setPlayerName] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const questions: Question[] = [
    {
      question: "Երբ է Վասկո դա Գաման ծնվել?",
      options: ["1450", "1460", "1470", "1480"],
      correctAnswer: 1
    },
    {
      question: "Որ երկրի համար էր նա արկածախնդրում?",
      options: ["Իսպանիա", "Պորտուգալիա", "Անգլիա", "Ֆրանսիա"],
      correctAnswer: 1
    },
    {
      question: "Որ տարի սկսվեց նրա առաջին ճամփորդությունը դեպի Հնդկաստան?",
      options: ["1492", "1495", "1497", "1500"],
      correctAnswer: 2
    },
    {
      question: "Որ քաղաքում է Վասկո դա Գաման առաջին անգամ ժամանել Հնդկաստանում?",
      options: ["Մումբայ", "Գոա", "Կալիկութ", "Կոչին"],
      correctAnswer: 2
    },
    {
      question: "Քանի նավ ուներ դա Գամայի առաջին արշավախումբը?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2
    },
    {
      question: "Ինչպիսի գլխավոր ապրանքներ էր փնտրում դա Գաման Հնդկաստանում?",
      options: ["Ոսկի", "Համեմունքներ", "Մետաքս", "Զբոսանավեր"],
      correctAnswer: 1
    },
    {
      question: "Որ տարի մահացավ Վասկո դա Գաման?",
      options: ["1520", "1522", "1524", "1526"],
      correctAnswer: 2
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem("vasco-quiz-leaderboard");
    if (saved) {
      setLeaderboard(JSON.parse(saved));
    }
  }, []);

  const startQuiz = () => {
    if (!playerName.trim()) {
      return;
    }
    setQuizStarted(true);
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    
    // Store the answer
    const newAnswer: UserAnswer = {
      questionIndex: currentQuestion,
      selectedAnswer: answerIndex,
      correctAnswer: questions[currentQuestion].correctAnswer
    };
    setUserAnswers([...userAnswers, newAnswer]);

    // Move to next question after a brief delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Calculate final score
        const finalScore = [...userAnswers, newAnswer].filter(
          a => a.selectedAnswer === a.correctAnswer
        ).length;
        saveToLeaderboard(finalScore);
        setShowResult(true);
      }
    }, 500);
  };

  const saveToLeaderboard = (finalScore: number) => {
    const newEntry: LeaderboardEntry = {
      name: playerName,
      score: finalScore,
      date: new Date().toLocaleDateString("hy-AM")
    };

    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setLeaderboard(updatedLeaderboard);
    localStorage.setItem("vasco-quiz-leaderboard", JSON.stringify(updatedLeaderboard));
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setPlayerName("");
    setQuizStarted(false);
    setUserAnswers([]);
  };

  const calculateScore = () => {
    return userAnswers.filter(a => a.selectedAnswer === a.correctAnswer).length;
  };

  const getButtonVariant = (index: number) => {
    if (selectedAnswer === null) return "outline";
    if (selectedAnswer === index) return "default";
    return "outline";
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Վիկտորինա
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 animate-fade-in">
          Փորձարկեք ձեր գիտելիքները Վասկո դա Գամայի մասին
        </p>

        {!quizStarted ? (
          <div className="card-elegant p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Սկսենք վիկտորինան
            </h2>
            <p className="text-muted-foreground mb-6 text-center">
              Մուտքագրեք ձեր անունը՝ սկսելու վիկտորինան
            </p>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Ձեր անունը"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground mb-4 text-lg"
                onKeyPress={(e) => e.key === "Enter" && startQuiz()}
                autoFocus
              />
              <Button 
                onClick={startQuiz} 
                className="w-full"
                size="lg"
                disabled={!playerName.trim()}
              >
                Սկսել վիկտորինան
              </Button>
            </div>
          </div>
        ) : !showResult ? (
          <div className="card-elegant p-8 animate-fade-in">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Հարց {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  Խաղացող: {playerName}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full smooth-transition"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={getButtonVariant(index)}
                  className="w-full justify-start text-left h-auto py-4 px-6 text-lg"
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {/* Results Card */}
            <div className="card-elegant p-8 text-center">
              <Trophy className="h-20 w-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Շնորհավորում ենք, {playerName}!
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Ձեր միավորը: <span className="text-primary font-bold">{calculateScore()}</span> / {questions.length}
              </p>
              <p className="text-lg mb-6">
                {calculateScore() === questions.length
                  ? "🎉 Շնորհավորում ենք! Դուք գերազանց գիտեք Վասկո դա Գամայի պատմությունը!"
                  : calculateScore() >= questions.length / 2
                  ? "👏 Լավ է! Բայց կարող եք ավելին սովորել։"
                  : "📚 Փորձեք նորից և սովորեք ավելին!"}
              </p>

              <Button onClick={resetQuiz} size="lg" className="gap-2">
                <RotateCcw className="h-5 w-5" />
                Խաղալ նորից
              </Button>
            </div>

            {/* Answer Review */}
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Ձեր պատասխանները
              </h3>
              <div className="space-y-4">
                {userAnswers.map((answer, index) => {
                  const isCorrect = answer.selectedAnswer === answer.correctAnswer;
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        isCorrect
                          ? "bg-green-50 border-green-500 dark:bg-green-950/30"
                          : "bg-red-50 border-red-500 dark:bg-red-950/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{isCorrect ? "✓" : "✗"}</span>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground mb-2">
                            {questions[answer.questionIndex].question}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Ձեր պատասխան: <span className={isCorrect ? "text-green-600 dark:text-green-400 font-medium" : "text-red-600 dark:text-red-400 font-medium"}>
                              {questions[answer.questionIndex].options[answer.selectedAnswer]}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                              Ճիշտ պատասխան: {questions[answer.questionIndex].options[answer.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leaderboard Toggle */}
            <div className="card-elegant p-8">
              <Button
                onClick={() => setShowLeaderboard(!showLeaderboard)}
                variant="outline"
                className="w-full justify-between text-lg py-6"
              >
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="font-bold">Առաջատարների աղյուսակ (Լավագույն 10)</span>
                </div>
                {showLeaderboard ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </Button>

              {showLeaderboard && leaderboard.length > 0 && (
                <div className="mt-6 space-y-3 animate-fade-in">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        entry.name === playerName && entry.score === calculateScore()
                          ? "bg-primary/20 border-2 border-primary"
                          : index === 0
                          ? "bg-yellow-100 border-2 border-yellow-500 dark:bg-yellow-950/30 dark:border-yellow-600"
                          : index === 1
                          ? "bg-gray-100 border-2 border-gray-400 dark:bg-gray-800 dark:border-gray-600"
                          : index === 2
                          ? "bg-orange-100 border-2 border-orange-500 dark:bg-orange-950/30 dark:border-orange-600"
                          : "bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-2xl font-bold ${
                          index === 0 ? "text-yellow-600 dark:text-yellow-400" :
                          index === 1 ? "text-gray-600 dark:text-gray-400" :
                          index === 2 ? "text-orange-600 dark:text-orange-400" :
                          "text-primary"
                        }`}>
                          {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                        </span>
                        <span className="font-medium text-foreground">{entry.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground">{entry.score} / {questions.length}</div>
                        <div className="text-xs text-muted-foreground">{entry.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {showLeaderboard && leaderboard.length === 0 && (
                <p className="text-center text-muted-foreground mt-6">
                  Առաջատարների ցուցակը դեռ դատարկ է։
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
