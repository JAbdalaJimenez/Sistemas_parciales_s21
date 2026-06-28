const fs = require('fs');

const text = fs.readFileSync('questions.txt', 'utf8');
const questions = [];
const regex = /Pregunta\s*\d+\s*(.*?)(?=A\))A\)\s*(.*?)(?=B\))B\)\s*(.*?)(?=C\))C\)\s*(.*?)(?=D\)|Respuesta correcta:)(?:D\)\s*(.*?))?Respuesta correcta:\s*([A-D])(?:\s*Justificación:\s*(.*?))?(?=\s*Pregunta\s*\d+|$)/gis;

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
