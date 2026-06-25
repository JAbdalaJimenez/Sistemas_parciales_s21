const fs = require('fs');

const algebraQuestions = JSON.parse(fs.readFileSync('algebra_questions.json', 'utf8'));
const algebraString = 'const algebraQuestions = ' + JSON.stringify(algebraQuestions, null, 4) + ';\n';

function inject(file) {
    let content = fs.readFileSync(file, 'utf8');

    // Add initialSubjects
    content = content.replace(
        /const initialSubjects = {\s*"1": {\s*id: 1,\s*name: "Análisis Matemático",\s*exams: \["Primer Parcial", "Segundo Parcial", "Final Integrador"\]\s*}\s*};/,
        `const initialSubjects = {
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
                    };`
    );

    // Add fallback subjects
    content = content.replace(
        /state\.subjects = \[\s*{\s*id: 1,\s*name: "Análisis Matemático",\s*exams: \["Primer Parcial", "Segundo Parcial", "Final Integrador"\]\s*}\s*\];/g,
        `state.subjects = [
                    { id: 1, name: "Análisis Matemático", exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"] },
                    { id: 2, name: "Álgebra I", exams: ["Primer Parcial", "Segundo Parcial", "Final Integrador"] }
                ];`
    );

    // Add DB Seeding for Algebra
    content = content.replace(
        /const seedQuestionsRef = ref\(db, 'questions\/1\/Segundo Parcial'\);\s*const seedQuestionsSnap = await get\(seedQuestionsRef\);\s*if \(!seedQuestionsSnap\.exists\(\)\) {\s*await set\(seedQuestionsRef, questionsData\);\s*}/,
        `const seedQuestionsRef = ref(db, 'questions/1/Segundo Parcial');
                const seedQuestionsSnap = await get(seedQuestionsRef);
                if (!seedQuestionsSnap.exists()) {
                    await set(seedQuestionsRef, questionsData);
                }

                const seedAlgebraRef = ref(db, 'questions/2/Segundo Parcial');
                const seedAlgebraSnap = await get(seedAlgebraRef);
                if (!seedAlgebraSnap.exists()) {
                    await set(seedAlgebraRef, algebraQuestions);
                }`
    );

    // Inject algebraQuestions array right before questionsData
    if (!content.includes('const algebraQuestions =')) {
        content = content.replace(
            /const questionsData = \[/,
            algebraString + '\n        const questionsData = ['
        );
    }

    // Fix the fallback for startQuiz
    content = content.replace(
        /if \(state\.selectedSubject == 1 && examName === 'Segundo Parcial'\) {\s*state\.quiz\.questions = \[\.\.\.questionsData\];\s*} else {/g,
        `if (state.selectedSubject == 1 && examName === 'Segundo Parcial') {
                state.quiz.questions = [...questionsData];
            } else if (state.selectedSubject == 2 && examName === 'Segundo Parcial') {
                state.quiz.questions = [...algebraQuestions];
            } else {`
    );

    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
}

inject('index.html');
inject('script.js');
