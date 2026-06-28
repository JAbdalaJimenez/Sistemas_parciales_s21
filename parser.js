const fs = require('fs');

const text = fs.readFileSync('questions.txt', 'utf8');
const questions = [];
const regex = /Pregunta\s*\d+\s*([\s\S]*?)(?=\s*Pregunta\s*\d+|$)/gis;

let match;
let count = 1;
while ((match = regex.exec(text)) !== null) {
    let qBlock = match[1];
    let ansMatch = qBlock.match(/Respuesta correcta:\s*([A-Z])/i);
    let correct = ansMatch ? ansMatch[1].toUpperCase() : '';
    
    let justMatch = qBlock.match(/Justificaci[óo]n:\s*([\s\S]*)/i);
    let just = justMatch ? justMatch[1].trim() : '';
    
    let beforeAns = qBlock.split(/Respuesta correcta:/i)[0];
    let parts = beforeAns.split(/\s*([A-F]\s*\))\s*/i);
    let qText = parts[0].trim();
    let options = [];
    for (let i = 1; i < parts.length; i += 2) {
        if (parts[i] && parts[i+1] !== undefined) {
            options.push({
                id: parts[i].replace(/[^A-Za-z]/g, '').toUpperCase(),
                text: parts[i+1].trim()
            });
        }
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
