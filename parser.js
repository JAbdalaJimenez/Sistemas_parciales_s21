const fs = require('fs');

const text = fs.readFileSync('questions.txt', 'utf8');
const questions = [];
const regex = /Pregunta \d+(.*?)(?=A\))A\) (.*?)(?=B\))B\) (.*?)(?=C\))C\) (.*?)(?=D\)|Respuesta correcta:)(?:D\) (.*?))?Respuesta correcta: ([A-D])Justificación: (.*?)(?=Pregunta \d+|$)/gs;

let match;
let count = 1;
while ((match = regex.exec(text)) !== null) {
    let [full, q_text, a, b, c, d, correct, just] = match;
    
    q_text = q_text ? q_text.trim() : '';
    a = a ? a.trim() : '';
    b = b ? b.trim() : '';
    c = c ? c.trim() : '';
    d = d ? d.trim() : null;
    correct = correct ? correct.trim() : '';
    just = just ? just.trim() : '';

    const options = [
        { id: 'A', text: a },
        { id: 'B', text: b },
        { id: 'C', text: c }
    ];
    if (d) {
        options.push({ id: 'D', text: d });
    }

    questions.push({
        id: count,
        text: q_text,
        options,
        correctId: correct,
        justification: just
    });
    count++;
}

fs.writeFileSync('algebra_questions.json', JSON.stringify(questions, null, 4));
fs.writeFileSync('algebra_questions.js', 'export const algebraQuestions = ' + JSON.stringify(questions, null, 4) + ';\nwindow.algebraQuestions = algebraQuestions;');
console.log('Done! Count: ', questions.length);
