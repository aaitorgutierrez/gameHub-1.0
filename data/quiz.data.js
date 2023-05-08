export const dataQuiz = () => {
    const questions = [
        {
            questions: "¿En qué año fueron los ultimos Juegos Olímpicos",
            answers: [
                {text: "2021", correct: false},
                {text: "2020", correct: true},
                {text: "2019", correct: false},
                {text: "2022", correct: false},
            ],
        },
    
        {
            questions: "¿Qué cantante es famoso por tener muchos hijos?",
            answers: [
                {text: "Enrique Iglesias", correct: false},
                {text: "Becky G", correct: false},
                {text: "Julio Iglesias", correct: true},
                {text: "Omar Montes", correct: false},
            ]
        },
    
        {
            questions: "¿Cuál es la comunidad autónoma de España con mas vacas?",
            answers: [
                {text: "Asturias", correct: false},
                {text: "Castilla y León", correct: true},
                {text: "Galicia", correct: false},
                {text: "Vizcaya", correct: false},
            ]
        },
    
        {
            questions: "¿Cuantos atomos tiene el H2O?",
            answers: [
                {text: "1", correct: false},
                {text: "0", correct: false},
                {text: "2", correct: false},
                {text: "3", correct: true},
            ]
        }
    ]
}
