const fs = require('fs');

const indexHtmlPath = 'C:\\Users\\usuario\\Desktop\\SistemaPracticaParciales\\index.html';
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Read parsed questions
const parsedQuestions = JSON.parse(fs.readFileSync('C:\\Users\\usuario\\Desktop\\SistemaPracticaParciales\\parsed_questions.json', 'utf8'));

// Format parsed questions to JS code
const additionalQuestionsCode = parsedQuestions.map(q => `            {
                id: ${q.id}, text: ${JSON.stringify(q.text)},
                options: [ { id: "A", text: ${JSON.stringify(q.options[0].text)} }, { id: "B", text: ${JSON.stringify(q.options[1].text)} }, { id: "C", text: ${JSON.stringify(q.options[2].text)} } ],
                correctId: "${q.correctId}", justification: ${JSON.stringify(q.justification)}
            }`).join(',\n') + '\n        ];';

// Append to questionsData
html = html.replace(/}\n\s*];/m, '},\n' + additionalQuestionsCode);

// 2. Change Add Subject HTML to be collapsible
const oldHtmlSection = `<div class="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <h3 class="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4 font-bold flex items-center gap-1.5"><i data-lucide="shield-check" class="h-4.5 w-4.5 text-navy-800"></i> Añadir Materia y Preguntas (Admin)</h3>
                    <form id="add-subject-form" class="space-y-4">`;

const newHtmlSection = `<div class="bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
                    <button type="button" class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors rounded-lg" onclick="document.getElementById('admin-panel-content').classList.toggle('hidden'); lucide.createIcons();">
                        <h3 class="text-sm font-semibold text-slate-600 uppercase tracking-wider font-bold flex items-center gap-1.5"><i data-lucide="shield-check" class="h-4.5 w-4.5 text-navy-800"></i> Añadir Materia y Preguntas (Admin)</h3>
                        <i data-lucide="chevron-down" class="text-slate-400"></i>
                    </button>
                    <div id="admin-panel-content" class="p-6 pt-0 hidden">
                        <form id="add-subject-form" class="space-y-4">`;

html = html.replace(oldHtmlSection, newHtmlSection);

// Close the div after the form
const oldFormEnd = `</button>
                        </div>
                    </form>
                </div>`;

const newFormEnd = `</button>
                        </div>
                    </form>
                    </div>
                </div>`;
html = html.replace(oldFormEnd, newFormEnd);

// Add parseQuestionsText function above renderDashboard
const parseFunction = `        // Text to JSON parser for questions
        function parseQuestionsText(text) {
            try {
                const json = JSON.parse(text);
                if (Array.isArray(json)) return json;
            } catch(e) {}
        
            const questions = [];
            const blocks = text.split(/(?=\\b\\d+\\.\\s)/).map(b => b.trim()).filter(b => b);
            
            let idCounter = 1;
            for (let block of blocks) {
                let qTextMatch = block.match(/^\\d+\\.\\s*(.*?)(?=A\\))/s);
                let qText = qTextMatch ? qTextMatch[1].trim() : "";
        
                let optAMatch = block.match(/A\\)\\s*(.*?)(?=B\\))/s);
                let optBMatch = block.match(/B\\)\\s*(.*?)(?=C\\))/s);
                let optCMatch = block.match(/C\\)\\s*(.*?)(?=Respuesta Correcta:)/si);
        
                let respMatch = block.match(/Respuesta Correcta:\\s*([A-C])/i);
                
                let justMatch = block.match(/Justificaci\\u00f3n.*?\\:\\s*(.*)$/si);
                if (!justMatch) justMatch = block.match(/Justificación.*?\\:\\s*(.*)$/si);
                if (!justMatch) justMatch = block.match(/Justificación(?:[^:]*):?\\s*(.*)$/si);
        
                if (qText && optAMatch && optBMatch && optCMatch && respMatch) {
                    questions.push({
                        id: idCounter++,
                        text: qText.replace(/\\n/g, ' '),
                        options: [
                            { id: "A", text: optAMatch[1].trim().replace(/\\n/g, ' ') },
                            { id: "B", text: optBMatch[1].trim().replace(/\\n/g, ' ') },
                            { id: "C", text: optCMatch[1].trim().replace(/\\n/g, ' ') }
                        ],
                        correctId: respMatch[1].toUpperCase(),
                        justification: justMatch ? justMatch[1].trim().replace(/\\n/g, ' ') : "Sin justificación."
                    });
                }
            }
            return questions;
        }

        // --- DASHBOARD VIEW ---`;

html = html.replace('        // --- DASHBOARD VIEW ---', parseFunction);

// Replace the parsing logic inside the form submit
const oldParsingLogic = `                let parsedQuestions = [];
                try {
                    parsedQuestions = JSON.parse(questionsInput.value.trim());
                    if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
                        throw new Error('El JSON debe ser un array no vacío de preguntas.');
                    }
                    for (const q of parsedQuestions) {
                        if (!q.text || !q.correctId || !q.justification || !Array.isArray(q.options) || q.options.length < 2) {
                            throw new Error('Cada pregunta del JSON debe contener: text, correctId, justification, y un array de options.');
                        }
                    }
                } catch (err) {
                    alert('Error en el formato de preguntas (JSON): ' + err.message);
                    return;
                }`;

const newParsingLogic = `                let parsedQuestions = [];
                try {
                    parsedQuestions = parseQuestionsText(questionsInput.value.trim());
                    if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
                        throw new Error('El texto no tiene un formato válido de JSON ni de preguntas en texto plano.');
                    }
                    for (const q of parsedQuestions) {
                        if (!q.text || !q.correctId || !q.justification || !Array.isArray(q.options) || q.options.length < 2) {
                            throw new Error('Cada pregunta debe contener: text, correctId, justification, y options.');
                        }
                    }
                } catch (err) {
                    alert('Error al procesar preguntas: ' + err.message);
                    return;
                }`;

html = html.replace(oldParsingLogic, newParsingLogic);

// Change label to indicate normal text is accepted
html = html.replace('Preguntas (Formato JSON Array)', 'Preguntas (Texto Normal o JSON Array)');
html = html.replace('Pega un listado de preguntas respetando este formato JSON. Puedes usar la plantilla cargada por defecto.', 'Pega un listado de preguntas. El sistema lo transformará automáticamente al formato necesario.');

fs.writeFileSync(indexHtmlPath, html);

// ------------------------------------
// Also update data.js for consistency
// ------------------------------------
const dataJsPath = 'C:\\Users\\usuario\\Desktop\\SistemaPracticaParciales\\data.js';
if (fs.existsSync(dataJsPath)) {
    let dataJs = fs.readFileSync(dataJsPath, 'utf8');
    const additionalQuestionsCodeDataJs = parsedQuestions.map(q => `    {
        id: ${q.id}, text: ${JSON.stringify(q.text)},
        options: [ { id: "A", text: ${JSON.stringify(q.options[0].text)} }, { id: "B", text: ${JSON.stringify(q.options[1].text)} }, { id: "C", text: ${JSON.stringify(q.options[2].text)} } ],
        correctId: "${q.correctId}", justification: ${JSON.stringify(q.justification)}
    }`).join(',\n') + '\n];';
    dataJs = dataJs.replace(/}\n];/m, '},\n' + additionalQuestionsCodeDataJs);
    fs.writeFileSync(dataJsPath, dataJs);
}

// Update script.js as well
const scriptJsPath = 'C:\\Users\\usuario\\Desktop\\SistemaPracticaParciales\\script.js';
if (fs.existsSync(scriptJsPath)) {
    let scriptJs = fs.readFileSync(scriptJsPath, 'utf8');
    scriptJs = scriptJs.replace(oldHtmlSection, newHtmlSection);
    scriptJs = scriptJs.replace(oldFormEnd, newFormEnd);
    scriptJs = scriptJs.replace('        // --- DASHBOARD VIEW ---', parseFunction);
    scriptJs = scriptJs.replace(oldParsingLogic, newParsingLogic);
    scriptJs = scriptJs.replace('Preguntas (Formato JSON Array)', 'Preguntas (Texto Normal o JSON Array)');
    scriptJs = scriptJs.replace('Pega un listado de preguntas respetando este formato JSON. Puedes usar la plantilla cargada por defecto.', 'Pega un listado de preguntas. El sistema lo transformará automáticamente al formato necesario.');
    fs.writeFileSync(scriptJsPath, scriptJs);
}

console.log("All updates complete!");
