import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Award } from "lucide-react";
import { toast } from "sonner";

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

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

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

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;

    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success("Ճիշտ է! 🎉");
    } else {
      toast.error("Սխալ է");
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setShowResult(true);
        setShowNameInput(true);
      }
    }, 1500);
  };

  const saveToLeaderboard = () => {
    if (!playerName.trim()) {
      toast.error("Խndրում ենք մուտքագրել ձեր անունը");
      return;
    }

    const newEntry: LeaderboardEntry = {
      name: playerName,
      score: score,
      date: new Date().toLocaleDateString("hy-AM")
    };

    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setLeaderboard(updatedLeaderboard);
    localStorage.setItem("vasco-quiz-leaderboard", JSON.stringify(updatedLeaderboard));
    setShowNameInput(false);
    toast.success("Ձեր արդյունքը պահպանված է!");
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setPlayerName("");
    setShowNameInput(false);
  };

  const getButtonVariant = (index: number) => {
    if (!answered) return "outline";
    if (index === questions[currentQuestion].correctAnswer) return "default";
    if (index === selectedAnswer) return "destructive";
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

        {!showResult ? (
          <div className="card-elegant p-8 animate-fade-in">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Հարց {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  Միավորներ: {score}
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
                  disabled={answered}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="card-elegant p-8 text-center">
              <Trophy className="h-20 w-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Վիկտորինան ավարտված է!
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Ձեր միավորը: <span className="text-primary font-bold">{score}</span> / {questions.length}
              </p>
              <p className="text-lg mb-6">
                {score === questions.length
                  ? "🎉 Շնորհավորում ենք! Դուք գերազանց գիտեք Վասկո դա Գամայի պատմությունը!"
                  : score >= questions.length / 2
                  ? "👏 Լավ է! Բայց կարող եք ավելին սովորել։"
                  : "📚 Փորձեք նորից և սովորեք ավելին!"}
              </p>

              {showNameInput ? (
                <div className="max-w-sm mx-auto mb-6">
                  <input
                    type="text"
                    placeholder="Մուտքագրեք ձեր անունը"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground mb-3"
                    onKeyPress={(e) => e.key === "Enter" && saveToLeaderboard()}
                  />
                  <Button onClick={saveToLeaderboard} className="w-full">
                    Պահպանել արդյունքը
                  </Button>
                </div>
              ) : (
                <Button onClick={resetQuiz} size="lg" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Խաղալ նորից
                </Button>
              )}
            </div>

            {/* Leaderboard */}
            {leaderboard.length > 0 && (
              <div className="card-elegant p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Առաջատարներ</h3>
                </div>
                <div className="space-y-3">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        index === 0
                          ? "bg-primary/20 border-2 border-primary"
                          : "bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-primary">#{index + 1}</span>
                        <span className="font-medium text-foreground">{entry.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground">{entry.score} / {questions.length}</div>
                        <div className="text-xs text-muted-foreground">{entry.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
