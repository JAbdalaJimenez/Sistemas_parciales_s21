// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { getDatabase, ref, set, get, push } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ9R_R2yESML9u4KNC8zT5AduVR5BzxVg",
    authDomain: "sistemaparciales.firebaseapp.com",
    databaseURL: "https://sistemaparciales-default-rtdb.firebaseio.com",
    projectId: "sistemaparciales",
    storageBucket: "sistemaparciales.firebasestorage.app",
    messagingSenderId: "165101756549",
    appId: "1:165101756549:web:5ad9923adda3f325d9c9ec",
    measurementId: "G-EPSG0Z11CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// ----------------------------------------------------
// STATE MANAGEMENT
// ----------------------------------------------------
let state = {
    view: 'dashboard', // 'dashboard', 'exam-selection', 'quiz', 'results'
    subjects: [],
    selectedSubject: null,
    selectedExam: null,
    quiz: {
        questions: [],
        currentIndex: 0,
        selectedOption: null,
        isEvaluated: false,
        correctCount: 0,
        incorrectCount: 0
    },
    attempts: []
};

const container = document.getElementById('app-container');

// ----------------------------------------------------
// DATABASE METHODS & SYNC
// ----------------------------------------------------
async function initializeDatabase() {
    try {
        const subjectsRef = ref(db, 'subjects');
        const subjectsSnap = await get(subjectsRef);
        if (!subjectsSnap.exists()) {
            const initialSubjects = {
                "1": {
                    id: 1,
                    name: "Análisis Matemático",
                    exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"]
                },
                "2": {
                    id: 2,
                    name: "Álgebra I",
                    exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"]
                }
            };
            await set(subjectsRef, initialSubjects);
        } else {
            const algebraSubjectRef = ref(db, 'subjects/2');
            const algebraSubjectSnap = await get(algebraSubjectRef);
            if (!algebraSubjectSnap.exists()) {
                await set(algebraSubjectRef, {
                    id: 2,
                    name: "Álgebra I",
                    exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"]
                });
            }
        }

        // Seed questions under /questions/1/Segundo Parcial
        const seedQuestionsRef = ref(db, 'questions/1/Segundo Parcial');
        const seedQuestionsSnap = await get(seedQuestionsRef);
        if (!seedQuestionsSnap.exists()) {
            await set(seedQuestionsRef, questionsData);
        }

        // Seed questions under /questions/2/Segundo Parcial
        const seedAlgebraRef = ref(db, 'questions/2/Segundo Parcial');
        const seedAlgebraSnap = await get(seedAlgebraRef);
        if (!seedAlgebraSnap.exists() || (Array.isArray(seedAlgebraSnap.val()) && seedAlgebraSnap.val().length < window.algebraQuestions.length)) {
            await set(seedAlgebraRef, window.algebraQuestions);
        }
    } catch (err) {
        console.error("Error al inicializar la base de datos (seeding):", err);
    }
}

async function loadDataFromFirebase() {
    try {
        await initializeDatabase();

        const subjectsSnap = await get(ref(db, 'subjects'));
        if (subjectsSnap.exists()) {
            const val = subjectsSnap.val();
            state.subjects = Array.isArray(val) ? val.filter(Boolean) : Object.values(val);
        } else {
            state.subjects = [
                { id: 1, name: "Análisis Matemático", exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"] },
                { id: 2, name: "Álgebra I", exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"] }
            ];
        }

        const attemptsSnap = await get(ref(db, 'attempts'));
        if (attemptsSnap.exists()) {
            const val = attemptsSnap.val();
            state.attempts = Object.values(val).sort((a, b) => b.timestamp - a.timestamp);
        }
        
        render();
    } catch (err) {
        console.error("Error al cargar datos de Firebase:", err);
        // Fallback local
        state.subjects = [
            { id: 1, name: "Análisis Matemático", exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"] },
            { id: 2, name: "Álgebra I", exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"] }
        ];
        render();
    }
}

// ----------------------------------------------------
// RENDER LOGIC
// ----------------------------------------------------
function render() {
    container.innerHTML = '';
    
    if (state.view === 'dashboard') {
        renderDashboard();
    } else if (state.view === 'exam-selection') {
        renderExamSelection();
    } else if (state.view === 'quiz') {
        renderQuiz();
    } else if (state.view === 'results') {
        renderResults();
    }

    // Trigger Lucide Icons
    lucide.createIcons();
    
    // Trigger MathJax re-render if loaded
    if (window.mathJaxLoaded) {
        MathJax.typesetPromise([container]).catch((err) => console.log(err.message));
    } else {
        window.MathJax.startup.promise = window.MathJax.startup.promise
            .then(() => MathJax.typesetPromise([container]))
            .catch((err) => console.log('MathJax Error:', err.message));
    }
}

// --- DASHBOARD VIEW ---
function renderDashboard() {
    const wrapper = document.createElement('div');
    wrapper.className = "fade-in max-w-2xl mx-auto space-y-8";
    
    let html = `
        <div class="border-b border-slate-200 pb-4">
            <h2 class="text-3xl font-bold text-navy-900 tracking-tight">Materias Disponibles</h2>
            <p class="text-slate-500 mt-2">Selecciona una materia para comenzar a practicar.</p>
        </div>
        <div class="grid gap-4">
    `;

    state.subjects.forEach(subject => {
        html += `
            <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-md hover:border-navy-500 transition-all flex items-center justify-between group" onclick="selectSubject(${subject.id})">
                <div class="flex items-center gap-4">
                    <div class="bg-navy-50 p-3 rounded-md text-navy-800 group-hover:bg-navy-800 group-hover:text-white transition-colors">
                        <i data-lucide="book" class="h-6 w-6"></i>
                    </div>
                    <span class="text-lg font-medium text-navy-900">${subject.name}</span>
                </div>
                <div class="flex items-center gap-3">
                    <button onclick="deleteSubject(event, ${subject.id}, '${subject.name.replace(/'/g, "\\'")}')" class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors" title="Eliminar materia">
                        <i data-lucide="trash-2" class="h-5 w-5"></i>
                    </button>
                    <i data-lucide="chevron-right" class="text-slate-400 group-hover:text-navy-500 transition-colors"></i>
                </div>
            </div>
        `;
    });

    html += `
        </div>
        
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 class="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4 font-bold flex items-center gap-1.5"><i data-lucide="shield-check" class="h-4.5 w-4.5 text-navy-800"></i> Añadir Materia y Preguntas (Admin)</h3>
            <form id="add-subject-form" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-500 uppercase mb-1">Nombre de la Materia</label>
                        <input type="text" id="subject-input" class="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 bg-white transition-shadow" placeholder="Ej. Álgebra Lineal" required>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-500 uppercase mb-1">Instancia de Examen</label>
                        <select id="subject-exam" class="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 bg-white transition-shadow" required>
                            <option value="Primer Parcial">Primer Parcial</option>
                            <option value="Segundo Parcial" selected>Segundo Parcial</option>
                            <option value="Final Integrador">Final Integrador</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-semibold text-slate-500 uppercase mb-1">Preguntas (Texto Normal o JSON Array)</label>
                    <textarea id="subject-questions" rows="6" class="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 font-mono text-xs bg-white transition-shadow" required></textarea>
                    <span class="text-[11px] text-slate-400">Pega un listado de preguntas. El sistema lo transformará automáticamente al formato necesario.</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <div>
                        <label class="block text-xs font-semibold text-slate-500 uppercase mb-1">Contraseña del Administrador</label>
                        <input type="password" id="admin-password" class="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 bg-white transition-shadow" placeholder="••••••••" required>
                    </div>
                    <button type="submit" class="w-full bg-navy-900 text-white px-6 py-2.5 rounded-md font-medium hover:bg-navy-800 transition-colors flex items-center justify-center gap-2">
                        <i data-lucide="plus" class="h-4 w-4"></i> Guardar Materia y Preguntas
                    </button>
                </div>
            </form>
        </div>
    `;

    // Add Recent Attempts Historial Section if we have attempts
    if (state.attempts && state.attempts.length > 0) {
        html += `
            <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                    <h3 class="text-lg font-bold text-navy-900 flex items-center gap-2">
                        <i data-lucide="history" class="text-gold-500 h-5 w-5"></i> Historial de Intentos Recientes
                    </h3>
                    <button onclick="clearHistory()" class="text-xs text-red-500 hover:text-red-700 font-medium transition-colors">
                        Borrar historial
                    </button>
                </div>
                <div class="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-2">
        `;
        
        state.attempts.forEach(att => {
            const date = new Date(att.timestamp).toLocaleString('es-AR', {
                day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
            });
            const percent = Math.round((att.correctCount / att.totalQuestions) * 100);
            const isApproved = percent >= 60;
            const statusClass = isApproved ? "text-green-600 bg-green-50" : "text-red-500 bg-red-50";
            const statusText = isApproved ? "Aprobado" : "Desaprobado";
            
            html += `
                <div class="py-3 flex items-center justify-between text-sm">
                    <div>
                        <div class="font-semibold text-slate-800">${att.subjectName}</div>
                        <div class="text-xs text-slate-400 mt-0.5">${att.examName} &bull; ${date}</div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="text-right">
                            <div class="font-bold text-slate-800">${att.correctCount}/${att.totalQuestions}</div>
                            <div class="text-xs text-slate-400 font-semibold">${percent}%</div>
                        </div>
                        <span class="px-2.5 py-1 rounded-full text-xs font-bold ${statusClass}">
                            ${statusText}
                        </span>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    wrapper.innerHTML = html;
    container.appendChild(wrapper);

    // Prefill the questions textarea with a template
    const defaultQuestionsTemplate = [
        {
            id: 1,
            text: "Si tenés la función $f(x) = x^2$, ¿cuál es su derivada $f'(x)$?",
            options: [
                { id: "A", text: "$f'(x) = 2x$" },
                { id: "B", text: "$f'(x) = x$" },
                { id: "C", text: "$f'(x) = 0$" }
            ],
            correctId: "A",
            justification: "Por la regla de derivación de potencias, la derivada de $x^n$ es $n \\cdot x^{n-1}$. Para $x^2$, la derivada da como resultado $2x$."
        }
    ];
    document.getElementById('subject-questions').value = JSON.stringify(defaultQuestionsTemplate, null, 2);

    // Re-bind add subject form event listener
    document.getElementById('add-subject-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const passwordInput = document.getElementById('admin-password');
        if (passwordInput.value !== 'Abdalajail2015') {
            alert('Contraseña incorrecta. No tienes permisos para añadir materias.');
            return;
        }

        const nameInput = document.getElementById('subject-input');
        const examSelect = document.getElementById('subject-exam');
        const questionsInput = document.getElementById('subject-questions');
        const examName = examSelect.value;
        const name = nameInput.value.trim();

        let parsedQuestions = [];
        try {
            const rawText = questionsInput.value.trim();
            if (rawText.startsWith('[')) {
                parsedQuestions = JSON.parse(rawText);
            } else {
                // Parse as plain text with Regex
                const regex = /Pregunta\s*\d+\s*([\s\S]*?)(?=\s*Pregunta\s*\d+|$)/gis;
                let match;
                while ((match = regex.exec(rawText)) !== null) {
                    let qBlock = match[1];
                    let ansMatch = qBlock.match(/Respuesta correcta:\s*([A-Z])/i);
                    let correct = ansMatch ? ansMatch[1].toUpperCase() : '';
                    
                    let justMatch = qBlock.match(/Justificaci[óo]n:\s*([\s\S]*)/i);
                    let just = justMatch ? justMatch[1].trim() : '';
                    
                    let beforeAns = qBlock.split(/Respuesta correcta:/i)[0];
                    let parts = beforeAns.split(/\s*([A-Z]\)\s*)/i);
                    let qText = parts[0].trim();
                    let options = [];
                    for (let i = 1; i < parts.length; i += 2) {
                        if (parts[i] && parts[i+1] !== undefined) {
                            options.push({
                                id: parts[i].replace(')', '').trim().toUpperCase(),
                                text: parts[i+1].trim()
                            });
                        }
                    }
                    
                    parsedQuestions.push({
                        id: 0, // will be reassigned
                        text: qText,
                        options: options,
                        correctId: correct,
                        justification: just
                    });
                }
            }

            if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
                throw new Error('No se encontraron preguntas válidas. Revisa el formato JSON o el texto plano.');
            }
            for (const q of parsedQuestions) {
                if (!q.text || !q.correctId || !Array.isArray(q.options) || q.options.length < 2) {
                    throw new Error('Faltan campos obligatorios en una o más preguntas.');
                }
            }
        } catch (err) {
            alert('Error al procesar las preguntas: ' + err.message);
            return;
        }

        if (name) {
            // Check for existing subject (case-insensitive) to avoid duplicates
            let existingSubject = state.subjects.find(s => s.name.toLowerCase() === name.toLowerCase());
            let subjectId;
            
            if (existingSubject) {
                subjectId = existingSubject.id;
                // If the subject exists but this exam instance doesn't, add it
                if (!existingSubject.exams.includes(examName)) {
                    existingSubject.exams.push(examName);
                }
            } else {
                subjectId = Date.now();
                existingSubject = {
                    id: subjectId,
                    name: name,
                    exams: [examName]
                };
                state.subjects.push(existingSubject);
            }

            render();

            try {
                // Guardar la materia actualizada
                await set(ref(db, `subjects/${subjectId}`), existingSubject);
                
                // Recuperar las preguntas existentes de esa materia y parcial (si existen)
                const questionsRef = ref(db, `questions/${subjectId}/${examName}`);
                const snapshot = await get(questionsRef);
                let finalQuestions = [];
                
                if (snapshot.exists()) {
                    let existingQs = snapshot.val();
                    if (Array.isArray(existingQs)) {
                        finalQuestions = existingQs.filter(Boolean);
                    } else if (typeof existingQs === 'object') {
                        finalQuestions = Object.values(existingQs);
                    }
                }
                
                // Reasignar IDs para evitar duplicados y agregar al array final
                const currentLength = finalQuestions.length;
                parsedQuestions.forEach((q, index) => {
                    q.id = currentLength + index + 1;
                    finalQuestions.push(q);
                });

                // Guardar el listado completo (existentes + nuevas)
                await set(questionsRef, finalQuestions);
                alert(`¡Materia "${existingSubject.name}" actualizada! Se agregaron ${parsedQuestions.length} preguntas nuevas a "${examName}".`);
            } catch (err) {
                console.error("Error al guardar en Firebase:", err);
                alert("Error al intentar guardar en la base de datos.");
            }
        }
    });
}

// --- EXAM SELECTION VIEW ---
function renderExamSelection() {
    const subject = state.subjects.find(s => s.id == state.selectedSubject);
    const wrapper = document.createElement('div');
    wrapper.className = "fade-in max-w-2xl mx-auto";
    
    let html = `
        <button onclick="goBack()" class="flex items-center gap-2 text-slate-500 hover:text-navy-900 mb-6 font-medium transition-colors">
            <i data-lucide="arrow-left" class="h-4 w-4"></i> Volver a materias
        </button>
        <div class="mb-8 border-b border-slate-200 pb-4">
            <h2 class="text-3xl font-bold text-navy-900 tracking-tight">${subject ? subject.name : ''}</h2>
            <p class="text-slate-500 mt-2">Selecciona la instancia a evaluar.</p>
        </div>
        <div class="grid gap-4">
    `;

    if (subject && subject.exams) {
        subject.exams.forEach(exam => {
            html += `
                <div class="bg-white border border-slate-200 rounded-lg p-5 shadow-sm cursor-pointer hover:shadow-md hover:border-gold-500 transition-all flex items-center justify-between group" onclick="startQuiz('${exam}')">
                    <div class="flex items-center gap-3">
                        <div class="bg-gold-50 p-2 rounded-md text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                            <i data-lucide="file-text" class="h-5 w-5"></i>
                        </div>
                        <span class="text-lg font-medium text-navy-900">${exam}</span>
                    </div>
                    <i data-lucide="play-circle" class="text-slate-300 group-hover:text-gold-500 h-6 w-6 transition-colors"></i>
                </div>
            `;
        });
    }

    html += `</div>`;
    wrapper.innerHTML = html;
    container.appendChild(wrapper);
}

// --- QUIZ VIEW ---
function renderQuiz() {
    const qState = state.quiz;
    const currentQ = qState.questions[qState.currentIndex];
    const subject = state.subjects.find(s => s.id == state.selectedSubject);
    
    if (!currentQ) {
        goBack();
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = "fade-in w-full max-w-3xl mx-auto flex flex-col min-h-[600px]";

    let html = `
        <!-- Quiz Header -->
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
                <div class="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1">${subject ? subject.name : ''} &bull; ${state.selectedExam}</div>
                <button onclick="goBack()" class="flex items-center gap-1 text-slate-400 hover:text-navy-900 text-sm font-medium transition-colors">
                    <i data-lucide="arrow-left" class="h-3 w-3"></i> Salir del examen
                </button>
            </div>
            <div class="text-right">
                <div class="text-2xl font-bold text-navy-900">${qState.currentIndex + 1} <span class="text-slate-400 text-lg">/ ${qState.questions.length}</span></div>
                <div class="flex gap-3 text-xs font-bold mt-1 justify-end">
                    <span class="text-green-600 flex items-center gap-0.5"><i data-lucide="check" class="h-3.5 w-3.5"></i> ${qState.correctCount}</span>
                    <span class="text-red-500 flex items-center gap-0.5"><i data-lucide="x" class="h-3.5 w-3.5"></i> ${qState.incorrectCount}</span>
                </div>
            </div>
        </div>

        <!-- Question Area -->
        <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-6 flex-grow flex flex-col justify-center">
            <h3 class="text-xl leading-relaxed text-navy-900 font-medium mb-8">${currentQ.text}</h3>
            
            <div class="grid gap-3" id="options-container">
    `;

    currentQ.options.forEach(opt => {
        let cardClass = "option-card border border-slate-200 rounded-lg p-4 cursor-pointer text-slate-700 font-medium flex items-center gap-4 relative overflow-hidden";
        let iconHtml = `<div class="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0 transition-colors"></div>`;
        
        if (qState.isEvaluated) {
            cardClass += " evaluated pointer-events-none";
            if (opt.id === currentQ.correctId) {
                cardClass += " correct";
                iconHtml = `<div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0"><i data-lucide="check" class="h-4 w-4"></i></div>`;
            } else if (opt.id === qState.selectedOption) {
                cardClass += " incorrect";
                iconHtml = `<div class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0"><i data-lucide="x" class="h-4 w-4"></i></div>`;
            } else {
                cardClass += " opacity-50";
            }
        } else {
            if (qState.selectedOption === opt.id) {
                cardClass += " selected";
                iconHtml = `<div class="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0"><div class="w-2.5 h-2.5 bg-white rounded-full"></div></div>`;
            }
        }

        html += `
            <div class="${cardClass}" onclick="selectOption('${opt.id}')">
                <div class="icon-container flex-shrink-0">${iconHtml}</div>
                <div class="flex-grow">${opt.text}</div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    if (qState.isEvaluated) {
        const isCorrect = qState.selectedOption === currentQ.correctId;
        const feedbackColor = isCorrect ? "bg-green-50 border-green-200 text-green-900" : "bg-red-50 border-red-200 text-red-900";
        const feedbackTitleColor = isCorrect ? "text-green-700" : "text-red-700";
        const feedbackIcon = isCorrect ? "check-circle" : "alert-circle";
        
        if (currentQ.justification) {
            html += `
                <div class="fade-in mb-6 ${feedbackColor} border rounded-xl p-6 shadow-sm">
                    <div class="flex items-center gap-2 mb-3 ${feedbackTitleColor}">
                        <i data-lucide="${feedbackIcon}" class="h-5 w-5"></i>
                        <h4 class="font-bold uppercase tracking-wider text-sm">Justificación Teórica</h4>
                    </div>
                    <div class="leading-relaxed">
                        ${currentQ.justification}
                    </div>
                </div>
            `;
        }
    }

    html += `
        <div class="mt-auto flex justify-end pb-4" id="action-btn-container">
            ${!qState.isEvaluated ? `
                <button id="confirm-btn" onclick="evaluateAnswer()" class="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-navy-800 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2" ${!qState.selectedOption ? 'disabled' : ''}>
                    <i data-lucide="check-square" class="h-5 w-5"></i> Confirmar Respuesta
                </button>
            ` : `
                <button onclick="nextQuestion()" class="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-gold-400 hover:shadow-md transition-all flex items-center gap-2">
                    ${qState.currentIndex < qState.questions.length - 1 ? 'Siguiente Pregunta <i data-lucide="arrow-right" class="h-5 w-5"></i>' : 'Finalizar Examen <i data-lucide="flag" class="h-5 w-5"></i>'}
                </button>
            `}
        </div>
    `;

    wrapper.innerHTML = html;
    container.appendChild(wrapper);
}

// --- RESULTS VIEW ---
function renderResults() {
    const subject = state.subjects.find(s => s.id == state.selectedSubject);
    const total = state.quiz.questions.length;
    const correct = state.quiz.correctCount;
    const incorrect = state.quiz.incorrectCount;
    const percent = Math.round((correct / total) * 100);
    
    const wrapper = document.createElement('div');
    wrapper.className = "fade-in max-w-2xl mx-auto py-8";

    let iconName = percent >= 60 ? "trophy" : "alert-circle";
    let iconColor = percent >= 60 ? "text-amber-500 bg-amber-50" : "text-slate-500 bg-slate-50";
    let statusText = percent >= 60 ? "¡Examen Aprobado!" : "A seguir estudiando";
    let statusSubtext = percent >= 60 ? "¡Buen trabajo! Lograste un rendimiento superior al 60%." : "No te preocupes, la práctica hace al maestro.";

    wrapper.innerHTML = `
        <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow-md flex flex-col items-center text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 ${iconColor}">
                <i data-lucide="${iconName}" class="h-10 w-10"></i>
            </div>
            
            <h2 class="text-3xl font-bold text-navy-900 tracking-tight">${statusText}</h2>
            <p class="text-slate-500 mt-2 max-w-md">${statusSubtext}</p>
            
            <!-- Score Details -->
            <div class="grid grid-cols-3 gap-6 my-8 w-full max-w-md border-t border-b border-slate-100 py-6">
                <div class="text-center">
                    <div class="text-3xl font-extrabold text-navy-900">${percent}%</div>
                    <div class="text-xs text-slate-400 font-semibold uppercase mt-1">Precisión</div>
                </div>
                <div class="text-center border-l border-r border-slate-100">
                    <div class="text-3xl font-extrabold text-green-600">${correct}</div>
                    <div class="text-xs text-slate-400 font-semibold uppercase mt-1">Correctas</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-extrabold text-red-500">${incorrect}</div>
                    <div class="text-xs text-slate-400 font-semibold uppercase mt-1">Incorrectas</div>
                </div>
            </div>
            
            <!-- Details per subject -->
            <div class="text-sm text-slate-500 mb-8">
                Materia: <strong class="text-navy-900">${subject ? subject.name : ''}</strong><br>
                Instancia: <strong class="text-navy-900">${state.selectedExam}</strong><br>
                Total de preguntas: <strong class="text-navy-900">${total}</strong>
            </div>

            <!-- Action buttons -->
            <div class="flex gap-4 w-full max-w-sm justify-center">
                <button onclick="restartQuiz()" class="flex-1 bg-navy-900 text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="refresh-cw" class="h-4 w-4"></i> Reintentar
                </button>
                <button onclick="exitQuizToDashboard()" class="flex-grow bg-slate-100 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="home" class="h-4 w-4"></i> Panel Principal
                </button>
            </div>
        </div>
    `;
    
    container.appendChild(wrapper);
}

// ----------------------------------------------------
// ACTIONS
// ----------------------------------------------------
function selectSubject(id) {
    state.selectedSubject = id;
    state.view = 'exam-selection';
    render();
}

function goBack() {
    if (state.view === 'quiz') {
        if (confirm("¿Estás seguro de salir del examen? Se perderá el progreso del intento.")) {
            state.view = 'exam-selection';
            state.quiz = { questions: [], currentIndex: 0, selectedOption: null, isEvaluated: false, correctCount: 0, incorrectCount: 0 };
        } else {
            return;
        }
    } else if (state.view === 'exam-selection') {
        state.view = 'dashboard';
        state.selectedSubject = null;
    }
    render();
}

async function startQuiz(examName) {
    state.selectedExam = examName;
    
    try {
        const questionsSnap = await get(ref(db, `questions/${state.selectedSubject}/${examName}`));
        if (questionsSnap.exists()) {
            const val = questionsSnap.val();
            state.quiz.questions = Array.isArray(val) ? val.filter(Boolean) : Object.values(val);
        } else {
            if (state.selectedSubject == 1 && examName === 'Segundo Parcial') {
                state.quiz.questions = [...questionsData];
            } else if (state.selectedSubject == 2 && examName === 'Segundo Parcial') {
                state.quiz.questions = [...window.algebraQuestions];
            } else {
                alert("No hay preguntas cargadas en la base de datos para esta instancia del examen.");
                return;
            }
        }
    } catch (err) {
        console.error("Error al obtener preguntas de Firebase:", err);
        if (state.selectedSubject == 1 && examName === 'Segundo Parcial') {
            state.quiz.questions = [...questionsData];
        } else if (state.selectedSubject == 2 && examName === 'Segundo Parcial') {
            state.quiz.questions = [...window.algebraQuestions];
        } else {
            alert("Error al conectar con la base de datos para cargar las preguntas.");
            return;
        }
    }

    // Mezclar las preguntas de forma aleatoria (Shuffle)
    if (state.quiz.questions && state.quiz.questions.length > 0) {
        for (let i = state.quiz.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state.quiz.questions[i], state.quiz.questions[j]] = [state.quiz.questions[j], state.quiz.questions[i]];
        }
        
        // Mezclar las opciones (respuestas) dentro de cada pregunta
        state.quiz.questions.forEach(q => {
            if (q.options && q.options.length > 0) {
                for (let i = q.options.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
                }
            }
        });
    }

    state.quiz.currentIndex = 0;
    state.quiz.selectedOption = null;
    state.quiz.isEvaluated = false;
    state.quiz.correctCount = 0;
    state.quiz.incorrectCount = 0;
    
    state.view = 'quiz';
    window.scrollTo(0,0);
    render();
}

function selectOption(optId) {
    if (state.quiz.isEvaluated) return;
    state.quiz.selectedOption = optId;
    
    const currentQ = state.quiz.questions[state.quiz.currentIndex];
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        const children = optionsContainer.children;
        currentQ.options.forEach((opt, index) => {
            const el = children[index];
            let cardClass = "option-card border border-slate-200 rounded-lg p-4 cursor-pointer text-slate-700 font-medium flex items-center gap-4 relative overflow-hidden";
            let iconHtml = `<div class="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0 transition-colors"></div>`;
            
            if (opt.id === optId) {
                cardClass += " selected";
                iconHtml = `<div class="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0"><div class="w-2.5 h-2.5 bg-white rounded-full"></div></div>`;
            }
            
            el.className = cardClass;
            const iconContainer = el.querySelector('.icon-container');
            if (iconContainer) iconContainer.innerHTML = iconHtml;
        });
        
        const confirmBtn = document.getElementById('confirm-btn');
        if (confirmBtn) {
            confirmBtn.disabled = false;
        }
    } else {
        render();
    }
}

// Global mockup questions Data for fallback
const questionsData = [
    // Loaded dynamically in index.html, matching initial questionsData array.
];

function evaluateAnswer() {
    if (!state.quiz.selectedOption) return;
    state.quiz.isEvaluated = true;
    
    const currentQ = state.quiz.questions[state.quiz.currentIndex];
    if (state.quiz.selectedOption === currentQ.correctId) {
        state.quiz.correctCount++;
    } else {
        state.quiz.incorrectCount++;
    }
    
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        const children = optionsContainer.children;
        currentQ.options.forEach((opt, index) => {
            const el = children[index];
            let cardClass = "option-card border border-slate-200 rounded-lg p-4 cursor-pointer text-slate-700 font-medium flex items-center gap-4 relative overflow-hidden evaluated pointer-events-none";
            let iconHtml = `<div class="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0 transition-colors"></div>`;
            
            if (opt.id === currentQ.correctId) {
                cardClass += " correct";
                iconHtml = `<div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0"><i data-lucide="check" class="h-4 w-4"></i></div>`;
            } else if (opt.id === state.quiz.selectedOption) {
                cardClass += " incorrect";
                iconHtml = `<div class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0"><i data-lucide="x" class="h-4 w-4"></i></div>`;
            } else {
                cardClass += " opacity-50";
            }
            
            el.className = cardClass;
            const iconContainer = el.querySelector('.icon-container');
            if (iconContainer) iconContainer.innerHTML = iconHtml;
        });
        
        const isCorrect = state.quiz.selectedOption === currentQ.correctId;
        const feedbackColor = isCorrect ? "bg-green-50 border-green-200 text-green-900" : "bg-red-50 border-red-200 text-red-900";
        const feedbackTitleColor = isCorrect ? "text-green-700" : "text-red-700";
        const feedbackIcon = isCorrect ? "check-circle" : "alert-circle";
        
        if (currentQ.justification) {
            const feedbackHtml = `
                <div class="fade-in mb-6 ${feedbackColor} border rounded-xl p-6 shadow-sm" id="feedback-container">
                    <div class="flex items-center gap-2 mb-3 ${feedbackTitleColor}">
                        <i data-lucide="${feedbackIcon}" class="h-5 w-5"></i>
                        <h4 class="font-bold uppercase tracking-wider text-sm">Justificación Teórica</h4>
                    </div>
                    <div class="leading-relaxed">
                        ${currentQ.justification}
                    </div>
                </div>
            `;
            optionsContainer.parentElement.insertAdjacentHTML('beforeend', feedbackHtml);
        }
        
        const btnContainer = document.getElementById('action-btn-container');
        if (btnContainer) {
            btnContainer.innerHTML = `
                <button onclick="nextQuestion()" class="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-gold-400 hover:shadow-md transition-all flex items-center gap-2">
                    ${state.quiz.currentIndex < state.quiz.questions.length - 1 ? 'Siguiente Pregunta <i data-lucide="arrow-right" class="h-5 w-5"></i>' : 'Finalizar Examen <i data-lucide="flag" class="h-5 w-5"></i>'}
                </button>
            `;
        }
        
        lucide.createIcons();
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    } else {
        render();
    }
}

function nextQuestion() {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
        state.quiz.currentIndex++;
        state.quiz.selectedOption = null;
        state.quiz.isEvaluated = false;
        window.scrollTo(0,0);
        render();
    } else {
        finishQuiz();
    }
}

async function finishQuiz() {
    state.view = 'results';
    
    const attempt = {
        subjectId: state.selectedSubject,
        subjectName: state.subjects.find(s => s.id == state.selectedSubject)?.name || "Materia",
        examName: state.selectedExam,
        correctCount: state.quiz.correctCount,
        incorrectCount: state.quiz.incorrectCount,
        totalQuestions: state.quiz.questions.length,
        timestamp: Date.now()
    };

    // Add attempt to local state list
    state.attempts.unshift(attempt);
    render();

    // Save to Firebase
    try {
        const attemptsRef = ref(db, 'attempts');
        await push(attemptsRef, attempt);
    } catch (err) {
        console.error("Error al guardar el intento en Firebase:", err);
    }
}

function restartQuiz() {
    state.quiz.currentIndex = 0;
    state.quiz.selectedOption = null;
    state.quiz.isEvaluated = false;
    state.quiz.correctCount = 0;
    state.quiz.incorrectCount = 0;
    state.view = 'quiz';
    window.scrollTo(0,0);
    render();
}

function exitQuizToDashboard() {
    state.view = 'dashboard';
    state.selectedSubject = null;
    state.selectedExam = null;
    state.quiz = { questions: [], currentIndex: 0, selectedOption: null, isEvaluated: false, correctCount: 0, incorrectCount: 0 };
    render();
}

async function clearHistory() {
    if (confirm("¿Estás seguro de que querés borrar todo tu historial de intentos?")) {
        state.attempts = [];
        render();
        try {
            await set(ref(db, 'attempts'), null);
        } catch (err) {
            console.error("Error al borrar el historial en Firebase:", err);
        }
    }
}

async function deleteSubject(event, id, name) {
    if (event) event.stopPropagation();

    const password = prompt(`Introduce la contraseña para eliminar la materia "${name}" y todas sus preguntas asociadas:`);
    if (password === null) return; // User cancelled
    
    if (password !== 'Abdalajail2015') {
        alert('Contraseña incorrecta. No tienes permiso para eliminar materias.');
        return;
    }

    if (confirm(`¿Estás seguro de que deseas eliminar permanentemente la materia "${name}"?`)) {
        // Update local state
        state.subjects = state.subjects.filter(s => s.id != id);
        render();

        // Delete from Firebase
        try {
            await set(ref(db, `subjects/${id}`), null);
            await set(ref(db, `questions/${id}`), null);
            alert(`Materia "${name}" eliminada correctamente.`);
        } catch (err) {
            console.error("Error al eliminar la materia de Firebase:", err);
            alert("Error al eliminar de la base de datos.");
        }
    }
}

// Bind all functions to window to ensure HTML onclick attributes keep working in ES module mode
window.selectSubject = selectSubject;
window.goBack = goBack;
window.startQuiz = startQuiz;
window.selectOption = selectOption;
window.evaluateAnswer = evaluateAnswer;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.exitQuizToDashboard = exitQuizToDashboard;
window.clearHistory = clearHistory;
window.deleteSubject = deleteSubject;

// Initialize App by loading data from Firebase
loadDataFromFirebase();
