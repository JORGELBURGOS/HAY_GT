// Datos de evaluación
const evaluationData = {
    knowHow: {
        technical: {
            A: [38, 43, 50, 50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152],
            B: [50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200],
            C: [66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264],
            D: [87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350],
            E: [115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460],
            F: [152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608],
            G: [200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800],
            H: [264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800, 800, 920, 1056]
        },
        communication: {
            1: 0,
            2: 1,
            3: 2
        },
        integration: {
            1: 0,
            2: 1,
            3: 2,
            4: 3,
            5: 4
        }
    },
    
    problemSolving: {
        complexity: {
            1: [0.1, 0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76],
            2: [0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87],
            3: [0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0],
            4: [0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15],
            5: [0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15, 1.32]
        },
        thinkingFreedom: {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7
        }
    },
    
    responsibility: {
        freedom: {
            A: [8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57],
            B: [12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87],
            C: [19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132],
            D: [29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200],
            E: [43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304],
            F: [66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460],
            G: [100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700],
            H: [152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700, 800, 920, 1056]
        },
        impactNature: {
            R: 0,
            C: 1,
            S: 2,
            P: 3
        },
        magnitude: {
            N: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4
        }
    },
    
    jobLevels: [
        { 
            min: 0, 
            max: 50, 
            level: "Nivel 1 - Operativo", 
            description: "Puestos operativos básicos con tareas rutinarias y supervisión directa. Requieren conocimientos elementales y habilidades específicas limitadas."
        },
        { 
            min: 51, 
            max: 115, 
            level: "Nivel 2 - Técnico", 
            description: "Puestos técnicos o especializados que requieren conocimientos específicos. Trabajo bajo supervisión general con cierta autonomía en tareas técnicas."
        },
        { 
            min: 116, 
            max: 200, 
            level: "Nivel 3 - Profesional", 
            description: "Puestos profesionales o de supervisión que requieren conocimientos avanzados y capacidad para resolver problemas complejos. Pueden supervisar a otros."
        },
        { 
            min: 201, 
            max: 350, 
            level: "Nivel 4 - Gerencia Media", 
            description: "Puestos de gerencia media con responsabilidad sobre departamentos o áreas funcionales. Requieren capacidad de liderazgo y toma de decisiones estratégicas."
        },
        { 
            min: 351, 
            max: 528, 
            level: "Nivel 5 - Alta Gerencia", 
            description: "Puestos de alta gerencia con responsabilidad sobre múltiples áreas o funciones. Toma de decisiones que afectan a toda la organización."
        },
        { 
            min: 529, 
            max: 800, 
            level: "Nivel 6 - Directivo", 
            description: "Puestos directivos con responsabilidad estratégica global. Establecen políticas y objetivos organizacionales a largo plazo."
        },
        { 
            min: 801, 
            max: 1400, 
            level: "Nivel 7 - Alta Dirección", 
            description: "Puestos de alta dirección (CEO, Presidentes) con responsabilidad total sobre la organización. Toman decisiones que definen el rumbo estratégico y visión de la empresa."
        }
    ],
    
    profileTypes: {
        "P4": { name: "Perfil Corto P4", description: "Puntos PS > Puntos AC (Ratio > 0.87)" },
        "P3": { name: "Perfil Corto P3", description: "Puntos PS > Puntos AC (Ratio > 0.76)" },
        "P2": { name: "Perfil Corto P2", description: "Puntos PS > Puntos AC (Ratio > 0.66)" },
        "P1": { name: "Perfil Corto P1", description: "Puntos PS > Puntos AC (Ratio > 0.57)" },
        "LEVEL": { name: "Perfil Balanceado", description: "Puntos AC = Puntos PS (Ratio entre 0.5 y 0.57)" },
        "A1": { name: "Perfil Corto A1", description: "Puntos AC > Puntos PS (Ratio > 0.43)" },
        "A2": { name: "Perfil Corto A2", description: "Puntos AC > Puntos PS (Ratio > 0.38)" },
        "A3": { name: "Perfil Corto A3", description: "Puntos AC > Puntos PS (Ratio > 0.33)" },
        "A4": { name: "Perfil Corto A4", description: "Puntos AC > Puntos PS (Ratio ≤ 0.33)" }
    }
};

// Variables globales
window.currentEvaluation = null;
window.evaluationCharts = {
    levelDistribution: null,
    scoreDistribution: null
};

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    const container = document.querySelector('.notification-container');
    if (container) {
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
}

// Función para cambiar de sección
function goToSection(sectionId) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    const stepNumber = sectionId.split('-')[0];
    const step = document.querySelector(`.step[data-step="${stepNumber}"]`);
    if (step) {
        step.classList.add('active');
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para cambiar entre contenidos principales
function showContent(contentId) {
    document.querySelectorAll('#evaluationContent, #evaluationsContent, #reportsContent, #settingsContent').forEach(content => {
        content.classList.add('hidden-content');
    });
    
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.remove('hidden-content');
    }
    
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`#${contentId.replace('Content', 'Link')}`);
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }
    
    if (contentId === 'evaluationsContent') {
        loadEvaluationsList();
    } else if (contentId === 'reportsContent') {
        loadReports();
    }
}

// Función para cargar la lista de evaluaciones
function loadEvaluationsList() {
    const evaluationsList = document.getElementById('evaluationsList');
    if (!evaluationsList) return;
    
    evaluationsList.innerHTML = '<p>Cargando evaluaciones...</p>';
    
    setTimeout(() => {
        const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        
        if (evaluations.length === 0) {
            evaluationsList.innerHTML = '<p>No hay evaluaciones guardadas.</p>';
            return;
        }
        
        evaluationsList.innerHTML = '';
        
        evaluations.forEach(evaluation => {
            const evaluationItem = document.createElement('div');
            evaluationItem.className = 'evaluation-item';
            evaluationItem.innerHTML = `
                <div class="evaluation-info">
                    <h3>${evaluation.jobTitle}</h3>
                    <p>Nivel: ${evaluation.level.level} | Puntaje: ${evaluation.scores.total} | Fecha: ${new Date(evaluation.evaluationDate).toLocaleDateString()}</p>
                </div>
                <div class="evaluation-actions">
                    <button class="btn btn-secondary view-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                    <button class="btn btn-secondary export-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-download"></i> Exportar
                    </button>
                    <button class="btn btn-secondary delete-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            `;
            evaluationsList.appendChild(evaluationItem);
        });
        
        document.querySelectorAll('.view-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                viewEvaluation(evaluationId);
            });
        });
        
        document.querySelectorAll('.export-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                exportSavedEvaluation(evaluationId);
            });
        });
        
        document.querySelectorAll('.delete-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                deleteEvaluation(evaluationId);
            });
        });
    }, 500);
}

// Función para eliminar una evaluación
function deleteEvaluation(id) {
    if (confirm('¿Está seguro que desea eliminar esta evaluación?')) {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        evaluations = evaluations.filter(e => e.id !== id);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        showNotification('Evaluación eliminada correctamente', 'success');
        loadEvaluationsList();
    }
}

// Función para ver una evaluación guardada
function viewEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    
    showContent('evaluationContent');
    goToSection('results-section');
    
    document.getElementById('totalScore').textContent = evaluation.scores.total;
    document.getElementById('jobLevel').textContent = evaluation.level.level;
    document.getElementById('levelDescription').textContent = evaluation.level.description;
    document.getElementById('jobDescriptionResult').textContent = evaluation.jobTitle;
    
    animateProgressCircle(evaluation.scores.total);
    document.getElementById('knowHowScore').textContent = `${evaluation.scores.knowHow} pts`;
    document.getElementById('problemSolvingScore').textContent = `${evaluation.scores.problemSolving} pts`;
    document.getElementById('responsibilityScore').textContent = `${evaluation.scores.responsibility} pts`;
    
    const profileType = determineProfileType(evaluation.scores.knowHow, evaluation.scores.problemSolving);
    const profileInfo = evaluationData.profileTypes[profileType];
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    
    animateProgressBars({
        knowHow: evaluation.scores.knowHow,
        problemSolving: evaluation.scores.problemSolving,
        responsibility: evaluation.scores.responsibility
    });
    
    window.currentEvaluation = evaluation;
}

// Función para determinar el Perfil Corto
function determineProfileType(knowHowScore, problemSolvingScore) {
    const ratio = problemSolvingScore / knowHowScore;
    
    if (ratio > 0.87) return "P4";
    if (ratio > 0.76) return "P3";
    if (ratio > 0.66) return "P2";
    if (ratio > 0.57) return "P1";
    if (ratio >= 0.5 && ratio <= 0.57) return "LEVEL";
    if (ratio > 0.43) return "A1";
    if (ratio > 0.38) return "A2";
    if (ratio > 0.33) return "A3";
    return "A4";
}

// Función para cargar reportes
function loadReports() {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    
    if (evaluations.length === 0) {
        document.getElementById('reportsContainer').innerHTML = '<p>No hay suficientes datos para generar reportes.</p>';
        return;
    }
    
    const levelCounts = {};
    const scores = evaluations.map(e => e.scores.total);
    
    evaluationData.jobLevels.forEach(level => {
        levelCounts[level.level] = evaluations.filter(e => 
            e.scores.total >= level.min && e.scores.total <= level.max
        ).length;
    });
    
    createLevelDistributionChart(levelCounts);
    createScoreDistributionChart(scores);
}

// Función para crear gráfico de distribución por nivel
function createLevelDistributionChart(levelCounts) {
    const ctx = document.getElementById('levelDistributionChart').getContext('2d');
    
    if (window.evaluationCharts.levelDistribution) {
        window.evaluationCharts.levelDistribution.destroy();
    }
    
    const labels = Object.keys(levelCounts);
    const data = Object.values(levelCounts);
    const backgroundColors = [
        '#4361ee', '#3f37c9', '#4cc9f0', '#4895ef', '#560bad',
        '#b5179e', '#f72585'
    ];
    
    window.evaluationCharts.levelDistribution = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Distribución por Nivel',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// Función para crear gráfico de distribución de puntajes
function createScoreDistributionChart(scores) {
    const ctx = document.getElementById('scoreDistributionChart').getContext('2d');
    
    if (window.evaluationCharts.scoreDistribution) {
        window.evaluationCharts.scoreDistribution.destroy();
    }
    
    const ranges = [
        '0-200', '201-400', '401-600', '601-800', '801-1000', '1001-1200', '1201-1400'
    ];
    
    const counts = ranges.map(range => {
        const [min, max] = range.split('-').map(Number);
        return scores.filter(score => score >= min && score <= max).length;
    });
    
    window.evaluationCharts.scoreDistribution = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ranges,
            datasets: [{
                label: 'Número de Evaluaciones',
                data: counts,
                backgroundColor: '#4361ee',
                borderColor: '#3f37c9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Evaluaciones'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Rango de Puntajes'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de Puntajes',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// Función para calcular el puntaje de Know-How
function calculateKnowHowScore() {
    const technicalLevel = document.getElementById('technicalCompetence').value;
    const communicationLevel = document.getElementById('communicationLevel').value;
    const integrationScope = document.getElementById('integrationScope').value;
    
    if (!technicalLevel || !communicationLevel || !integrationScope) {
        showNotification('Por favor complete todos los campos de Know-How', 'error');
        return null;
    }
    
    const commIndex = evaluationData.knowHow.communication[communicationLevel];
    const intIndex = evaluationData.knowHow.integration[integrationScope];
    const techScores = evaluationData.knowHow.technical[technicalLevel];
    
    const totalIndex = commIndex + intIndex;
    const adjustedIndex = Math.min(totalIndex, techScores.length - 1);
    
    return techScores[adjustedIndex];
}

// Función para calcular el puntaje de Solución de Problemas
function calculateProblemSolvingScore(knowHowScore) {
    const complexityLevel = document.getElementById('problemComplexity').value;
    const thinkingFreedom = document.getElementById('thinkingFreedom').value;
    
    if (!complexityLevel || !thinkingFreedom || !knowHowScore) {
        showNotification('Por favor complete todos los campos de Solución de Problemas', 'error');
        return null;
    }
    
    const complexityFactors = evaluationData.problemSolving.complexity[complexityLevel];
    const freedomIndex = evaluationData.problemSolving.thinkingFreedom[thinkingFreedom];
    const adjustedIndex = Math.min(freedomIndex, complexityFactors.length - 1);
    
    const percentage = complexityFactors[adjustedIndex];
    return Math.round(knowHowScore * percentage);
}

// Función para calcular el puntaje de Responsabilidad
function calculateResponsibilityScore() {
    const freedomLevel = document.getElementById('actionFreedom').value;
    const impactNature = document.getElementById('impactNature').value;
    const magnitude = document.getElementById('impactMagnitude').value;
    
    if (!freedomLevel || !impactNature || !magnitude) {
        showNotification('Por favor complete todos los campos de Responsabilidad', 'error');
        return null;
    }
    
    const freedomScores = evaluationData.responsibility.freedom[freedomLevel];
    const natureIndex = evaluationData.responsibility.impactNature[impactNature];
    const magnitudeIndex = evaluationData.responsibility.magnitude[magnitude];
    
    const totalIndex = natureIndex + magnitudeIndex;
    const adjustedIndex = Math.min(totalIndex, freedomScores.length - 1);
    
    return freedomScores[adjustedIndex];
}

// Función para determinar el nivel del puesto
function determineJobLevel(totalScore) {
    for (const level of evaluationData.jobLevels) {
        if (totalScore >= level.min && totalScore <= level.max) {
            return level;
        }
    }
    return { 
        level: "No determinado", 
        description: "El puntaje calculado está fuera de los rangos predefinidos" 
    };
}

// Función para animar el círculo de progreso
function animateProgressCircle(score) {
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (score / 1400) * circumference;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
}

// Función para animar el conteo numérico
function animateNumberCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (element) {
        let current = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}

// Función para animar las barras de progreso
function animateProgressBars(scores) {
    const bars = [
        { id: 'knowhow-bar', value: scores.knowHow / 1056 * 100 },
        { id: 'problemsolving-bar', value: scores.problemSolving / 1056 * 100 },
        { id: 'responsibility-bar', value: scores.responsibility / 1400 * 100 }
    ];
    
    bars.forEach((bar, index) => {
        setTimeout(() => {
            const barElement = document.getElementById(bar.id);
            if (barElement) {
                barElement.style.width = `${bar.value}%`;
            }
        }, 300 * (index + 1));
    });
}

// Función para guardar evaluaciones en CSV
function saveEvaluationsToCSV(evaluations) {
    const headers = [
        'ID', 'Título del Puesto', 'Descripción', 'Responsabilidades', 
        'Fecha de Evaluación', 'Puntaje Total', 'Nivel', 'Perfil Corto',
        'Know-How', 'Solución de Problemas', 'Responsabilidad'
    ];
    
    const rows = evaluations.map(evaluation => {
        const profileType = determineProfileType(evaluation.scores.knowHow, evaluation.scores.problemSolving);
        const profileInfo = evaluationData.profileTypes[profileType];
        
        return [
            evaluation.id,
            `"${evaluation.jobTitle.replace(/"/g, '""')}"`,
            `"${(evaluation.jobDescription || '').replace(/"/g, '""')}"`,
            `"${(evaluation.jobResponsibilities || '').replace(/"/g, '""')}"`,
            new Date(evaluation.evaluationDate).toISOString(),
            evaluation.scores.total,
            `"${evaluation.level.level.replace(/"/g, '""')}"`,
            `"${profileInfo.name.replace(/"/g, '""')}"`,
            evaluation.scores.knowHow,
            evaluation.scores.problemSolving,
            evaluation.scores.responsibility
        ];
    });
    
    const csvContent = [headers, ...rows]
        .map(row => row.join(','))
        .join('\n');
    
    return csvContent;
}

// Función para descargar CSV
function downloadCSV(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

// Función para guardar evaluaciones en archivo CSV local
function saveEvaluationsToLocalCSV() {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    
    if (evaluations.length === 0) {
        showNotification('No hay evaluaciones para guardar', 'warning');
        return;
    }
    
    const csvContent = saveEvaluationsToCSV(evaluations);
    const filename = `evaluaciones_${new Date().toISOString().slice(0,10)}.csv`;
    
    downloadCSV(csvContent, filename);
    showNotification('Evaluaciones guardadas en archivo CSV', 'success');
}

// Función mejorada para guardar en LocalStorage
function saveEvaluationToLocal(data) {
    try {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        
        const profileType = determineProfileType(data.scores.knowHow, data.scores.problemSolving);
        const profileInfo = evaluationData.profileTypes[profileType];
        
        const evaluationWithMeta = {
            ...data,
            id: Date.now(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            profileType: profileType,
            profileName: profileInfo.name
        };
        
        evaluations.push(evaluationWithMeta);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        
        return { success: true, id: evaluationWithMeta.id };
    } catch (error) {
        console.error('Error al guardar en LocalStorage:', error);
        return { success: false, error: error.message };
    }
}

// Función para exportar una evaluación guardada
function exportSavedEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    
    exportEvaluation(evaluation);
}

// Función mejorada para exportar evaluación
function exportEvaluation(data, format = 'json') {
    try {
        let content, mimeType, extension;
        
        if (format === 'json') {
            content = JSON.stringify(data, null, 2);
            mimeType = 'application/json';
            extension = 'json';
        } else if (format === 'csv') {
            const headers = ['Campo', 'Valor'];
            const profileType = determineProfileType(data.scores.knowHow, data.scores.problemSolving);
            const profileInfo = evaluationData.profileTypes[profileType];
            
            const rows = [
                ['Puesto', data.jobTitle],
                ['Descripción', data.jobDescription],
                ['Responsabilidades', data.jobResponsibilities],
                ['Puntaje Total', data.scores.total],
                ['Nivel', data.level.level],
                ['Perfil Corto', profileInfo.name],
                ['Know-How', data.scores.knowHow],
                ['Solución Problemas', data.scores.problemSolving],
                ['Responsabilidad', data.scores.responsibility],
                ['Fecha Evaluación', new Date(data.evaluationDate).toLocaleDateString()]
            ];
            
            content = [headers, ...rows].map(row => 
                row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(',')
            ).join('\n');
            
            mimeType = 'text/csv';
            extension = 'csv';
        }
        
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `evaluacion_${data.jobTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        setTimeout(() => URL.revokeObjectURL(url), 100);
        
        return true;
    } catch (error) {
        console.error('Error al exportar evaluación:', error);
        showNotification('Error al exportar la evaluación', 'error');
        return false;
    }
}

// Función para generar PDF

const explanations = {
    technicalCompetence: {
        A: "Nivel A. Básico: Nociones elementales requeridas.",
        B: "Nivel B. Introductorio: Conocimiento de rutinas básicas.",
        C: "Nivel C. General: Aplicación de métodos y procedimientos.",
        D: "Nivel D. Avanzado: Conocimiento especializado.",
        E: "Nivel E. Especializado: Dominio teórico-práctico.",
        F: "Nivel F. Especialización Madura: Conocimiento profundo.",
        G: "Nivel G. Especialización Amplia: Autoridad reconocida.",
        H: "Nivel H. Referente: Liderazgo intelectual en la disciplina."
    },
    communicationLevel: {
        1: "Nivel 1. Comunica: Solicita y aporta información básica.",
        2: "Nivel 2. Razonamiento: Influencia con argumentos.",
        3: "Nivel 3. Cambio de comportamientos: Liderazgo efectivo.",
        4: "Nivel 4. Inspiración: Motiva y transforma equipos.",
        5: "Nivel 5. Comunicación Estratégica: Influencia externa.",
        6: "Nivel 6. Comunicación Institucional: Construcción cultural.",
        7: "Nivel 7. Voz Pública: Vocero organizacional."
    },
    integrationScope: {
        1: "T. Focalizado: Integración de tareas específicas.",
        2: "I. Específica: Supervisión de actividades.",
        3: "II. Homogénea: Integración de operaciones similares.",
        4: "III. Heterogénea: Funciones diversas.",
        5: "IV. Amplia: Integración estratégica.",
        6: "V. Ecosistemas: Interinstitucional.",
        7: "VI. Redes Abiertas: Multisectorial.",
        8: "VII. Visión Global: Internacional."
    },
    problemComplexity: {
        1: "Situaciones idénticas y repetitivas.",
        2: "Situaciones similares con modelos existentes.",
        3: "Situaciones variables que requieren adaptación.",
        4: "Situaciones nuevas que requieren creación.",
        5: "Situaciones sin precedentes o únicas."
    },
    thinkingFreedom: {
        A: "Rutina estricta: Instrucciones detalladas.",
        B: "Rutina: Prácticas estandarizadas.",
        C: "Semi-rutina: Procedimientos predefinidos.",
        D: "Estandarizado: Múltiples procedimientos.",
        E: "Definición clara: Políticas específicas.",
        F: "Definición amplia: Políticas generales.",
        G: "Definición genérica: Reglas generales.",
        H: "Abstracto: Marco normativo o valores."
    },
    actionFreedom: {
        A: "Control estricto: Supervisión permanente.",
        B: "Control: Instrucciones claras.",
        C: "Estandarizado: Procedimientos definidos.",
        D: "Regulación general: Políticas abiertas.",
        E: "Dirección: Gestión por objetivos.",
        F: "Dirección general: Gestión integral.",
        G: "Guía: Orientación estratégica.",
        H: "Guía estratégica: Basado en tendencias."
    },
    impactNature: {
        R: "Repetitivo: Impacto rutinario.",
        C: "Circunstancial: Impacto ocasional.",
        S: "Servicio: Impacto en servicios internos o externos.",
        P: "Primario: Impacto directo en los resultados."
    },
    impactMagnitude: {
        N: "No cuantificada: Impacto cualitativo.",
        1: "Muy pequeño: Área muy limitada.",
        2: "Pequeño: Área específica.",
        3: "Medio: Departamento o unidad.",
        4: "Grande: Organización completa."
    }
};


function generatePDF() {
    if (!window.currentEvaluation) {
        showNotification('No hay evaluación para generar PDF', 'error');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const profileType = determineProfileType(window.currentEvaluation.scores.knowHow, window.currentEvaluation.scores.problemSolving);
    const profileInfo = evaluationData.profileTypes[profileType];
    
    doc.setFontSize(20);
    doc.setTextColor(67, 97, 238);
    doc.text('Evaluación de Puesto', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Puesto: ${window.currentEvaluation.jobTitle}`, 20, 40);
    doc.text(`Fecha de evaluación: ${new Date(window.currentEvaluation.evaluationDate).toLocaleDateString()}`, 20, 50);
    
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Puesto:', 20, 70);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const descriptionLines = doc.splitTextToSize(window.currentEvaluation.jobDescription || 'No especificado', 170);
    doc.text(descriptionLines, 20, 80);
    
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Responsabilidades Principales:', 20, doc.previousAutoTable ? doc.previousAutoTable.finalY + 20 : 110);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const responsibilitiesLines = doc.splitTextToSize(window.currentEvaluation.jobResponsibilities || 'No especificado', 170);
    doc.text(responsibilitiesLines, 20, doc.previousAutoTable ? doc.previousAutoTable.finalY + 30 : 120);
    
    doc.setFontSize(16);
    doc.setTextColor(67, 97, 238);
    doc.text('Resultados de Evaluación', 20, doc.previousAutoTable ? doc.previousAutoTable.finalY + 50 : 150);
    
    doc.autoTable({
        startY: doc.previousAutoTable ? doc.previousAutoTable.finalY + 60 : 160,
        head: [['Componente', 'Puntaje']],
        body: [
            ['Know-How', window.currentEvaluation.scores.knowHow],
            ['Solución de Problemas', window.currentEvaluation.scores.problemSolving],
            ['Responsabilidad', window.currentEvaluation.scores.responsibility],
            ['TOTAL', window.currentEvaluation.scores.total]
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [67, 97, 238],
            textColor: [255, 255, 255]
        }
    });
    
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Perfil Corto:', 20, doc.lastAutoTable.finalY + 20);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Tipo: ${profileInfo.name}`, 20, doc.lastAutoTable.finalY + 30);
    doc.text(`Descripción: ${profileInfo.description}`, 20, doc.lastAutoTable.finalY + 40);
    
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Nivel:', 20, doc.lastAutoTable.finalY + 60);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const levelLines = doc.splitTextToSize(window.currentEvaluation.level.description, 170);
    doc.text(levelLines, 20, doc.lastAutoTable.finalY + 70);
    
    doc.save(`Evaluacion_${window.currentEvaluation.jobTitle.replace(/\s+/g, '_')}.pdf`);
    showNotification('PDF generado correctamente', 'success');
}

// Función para mostrar diálogo de opciones de guardado
function showSaveOptionsDialog() {
    const dialog = document.createElement('div');
    dialog.className = 'save-dialog';
    dialog.innerHTML = `
        <div class="dialog-content">
            <h3>Guardar Evaluación</h3>
            <p>Seleccione cómo desea guardar la evaluación:</p>
            <div class="options">
                <button id="saveLocalBtn" class="btn btn-option">
                    <i class="fas fa-laptop"></i> Solo en este navegador
                </button>
                <button id="saveCSVBtn" class="btn btn-option">
                    <i class="fas fa-file-csv"></i> Guardar en archivo CSV
                </button>
                <button id="saveBothBtn" class="btn btn-option">
                    <i class="fas fa-sync-alt"></i> En ambos formatos
                </button>
                <button id="saveCancelBtn" class="btn btn-cancel">
                    <i class="fas fa-times"></i> Cancelar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    document.getElementById('saveLocalBtn').addEventListener('click', () => {
        const result = saveEvaluationToLocal(window.currentEvaluation);
        handleSaveResult(result, 'local');
        dialog.remove();
    });
    
    document.getElementById('saveCSVBtn').addEventListener('click', () => {
        saveEvaluationsToLocalCSV();
        dialog.remove();
    });
    
    document.getElementById('saveBothBtn').addEventListener('click', () => {
        const localResult = saveEvaluationToLocal(window.currentEvaluation);
        saveEvaluationsToLocalCSV();
        
        if (localResult.success) {
            showNotification('Evaluación guardada en ambos formatos', 'success');
        } else {
            showNotification('Error al guardar localmente, pero CSV se generó', 'warning');
        }
        dialog.remove();
    });
    
    document.getElementById('saveCancelBtn').addEventListener('click', () => {
        dialog.remove();
    });
}

function handleSaveResult(result, type) {
    if (result.success) {
        const message = type === 'local' 
            ? 'Evaluación guardada localmente' 
            : 'Evaluación guardada en CSV';
        showNotification(message, 'success');
        
        if (document.getElementById('evaluationsContent') && !document.getElementById('evaluationsContent').classList.contains('hidden-content')) {
            loadEvaluationsList();
        }
    } else {
        showNotification(`Error al guardar ${type === 'local' ? 'localmente' : 'en CSV'}: ${result.error}`, 'error');
    }
}

// Función principal de evaluación
function evaluateJob() {
    // Validar campos requeridos primero
    const jobTitle = document.getElementById('jobTitle').value;
    if (!jobTitle) {
        showNotification('Por favor ingrese el nombre del puesto', 'error');
        return;
    }

    // Calcular puntajes
    const knowHowScore = calculateKnowHowScore();
    if (knowHowScore === null) return;
    
    const problemSolvingScore = calculateProblemSolvingScore(knowHowScore);
    if (problemSolvingScore === null) return;
    
    const responsibilityScore = calculateResponsibilityScore();
    if (responsibilityScore === null) return;
    
    const totalScore = knowHowScore + problemSolvingScore + responsibilityScore;
    const jobLevel = determineJobLevel(totalScore);
    const profileType = determineProfileType(knowHowScore, problemSolvingScore);
    const profileInfo = evaluationData.profileTypes[profileType];

    // Mostrar resultados (PERFIL CORTO VISIBLE)
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('jobLevel').textContent = jobLevel.level;
    document.getElementById('levelDescription').textContent = jobLevel.description;
    document.getElementById('jobDescriptionResult').textContent = jobTitle;
    
    // PERFIL CORTO - Sección nueva
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    document.getElementById('knowHowScore').textContent = `${knowHowScore} pts`;
    document.getElementById('problemSolvingScore').textContent = `${problemSolvingScore} pts`;
    document.getElementById('responsibilityScore').textContent = `${responsibilityScore} pts`;

    // Animaciones
    animateProgressCircle(totalScore);
    animateNumberCounter('totalScore', totalScore);
    animateProgressBars({
        knowHow: knowHowScore,
        problemSolving: problemSolvingScore,
        responsibility: responsibilityScore
    });

    // Guardar datos para exportar
    window.currentEvaluation = {
        jobTitle: jobTitle,
        jobDescription: document.getElementById('jobDescription').value,
        jobResponsibilities: document.getElementById('jobResponsibilities').value,
        evaluationDate: new Date().toISOString(),
        scores: {
            knowHow: knowHowScore,
            problemSolving: problemSolvingScore,
            responsibility: responsibilityScore,
            total: totalScore
        },
        level: jobLevel,
        profileType: profileType,
        profileName: profileInfo.name
    };

    // Ir a resultados
    goToSection('results-section');
}

// Función para resetear la evaluación
function resetEvaluation() {
    window.currentEvaluation = null;
    
    document.getElementById('jobTitle').value = '';
    document.getElementById('jobDescription').value = '';
    document.getElementById('jobResponsibilities').value = '';
    
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    
    document.getElementById('totalScore').textContent = '0';
    document.getElementById('jobLevel').textContent = 'Nivel 0';
    document.getElementById('levelDescription').textContent = '';
    document.getElementById('jobDescriptionResult').textContent = '';
    document.getElementById('knowHowScore').textContent = '0 pts';
    document.getElementById('problemSolvingScore').textContent = '0 pts';
    document.getElementById('responsibilityScore').textContent = '0 pts';
    document.getElementById('profileType').textContent = 'Perfil no determinado';
    document.getElementById('profileDescription').textContent = 'No se ha determinado el perfil corto';
    
    document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = '0%';
    });
    
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
    }
    
    goToSection('description-section');
}

// Añadir CSS para el diálogo de guardado
const saveDialogStyle = document.createElement('style');
saveDialogStyle.textContent = `
.save-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.save-dialog .dialog-content {
    background: white;
    padding: 25px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 30px rgba(0,0,0,0.2);
    animation: dialogFadeIn 0.3s ease;
}

@keyframes dialogFadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.save-dialog h3 {
    margin-top: 0;
    color: #4361ee;
}

.save-dialog .options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.btn-option {
    text-align: left;
    justify-content: flex-start;
    padding: 12px 15px;
    background: #f8f9fa;
    color: #1a1a2e;
    border: 1px solid #ddd;
}

.btn-option:hover {
    background: #e9ecef;
    transform: none;
}

.btn-option i {
    margin-right: 10px;
    width: 20px;
    text-align: center;
}

.btn-cancel {
    margin-top: 15px;
    background: transparent;
    color: #666;
}
`;
document.head.appendChild(saveDialogStyle);

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);
    
    document.getElementById('homeLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationContent');
    });
    
    document.getElementById('evaluationsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationsContent');
    });
    
    document.getElementById('reportsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('reportsContent');
    });
    
    document.getElementById('settingsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('settingsContent');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.getAttribute('data-step');
            goToSection(`${stepNumber}-section`);
        });
    });
    
    document.getElementById('nextToKnowHow')?.addEventListener('click', () => goToSection('knowhow-section'));
    document.getElementById('backToDescription')?.addEventListener('click', () => goToSection('description-section'));
    document.getElementById('nextToProblemSolving')?.addEventListener('click', () => goToSection('problem-solving-section'));
    document.getElementById('backToKnowHow')?.addEventListener('click', () => goToSection('knowhow-section'));
    document.getElementById('nextToResponsibility')?.addEventListener('click', () => goToSection('responsibility-section'));
    document.getElementById('backToProblemSolving')?.addEventListener('click', () => goToSection('problem-solving-section'));
    
    document.getElementById('evaluateBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        evaluateJob();
    });
    
    document.getElementById('saveBtn')?.addEventListener('click', () => {
        if (window.currentEvaluation) {
            showSaveOptionsDialog();
        } else {
            showNotification('No hay evaluación para guardar', 'error');
        }
    });
    
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        if (window.currentEvaluation) {
            exportEvaluation(window.currentEvaluation, 'json');
        } else {
            showNotification('No hay evaluación para exportar', 'error');
        }
    });
    
    document.getElementById('newEvalBtn')?.addEventListener('click', resetEvaluation);
    document.getElementById('newEvaluationBtn')?.addEventListener('click', resetEvaluation);
    document.getElementById('generatePdfBtn')?.addEventListener('click', generatePDF);
    document.getElementById('exportAllBtn')?.addEventListener('click', saveEvaluationsToLocalCSV);
    
    showContent('evaluationContent');
    goToSection('description-section');
});


document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', () => {
        const stepId = step.getAttribute('data-step');
        const sectionId = {
            '1': 'description-section',
            '2': 'knowhow-section',
            '3': 'problem-solving-section',
            '4': 'responsibility-section',
            '5': 'results-section'
        }[stepId];
        if (sectionId) goToSection(sectionId);
    });
});



function generatePDF() {
    if (!window.currentEvaluation) {
        showNotification('No hay evaluación para generar PDF', 'error');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const eval = window.currentEvaluation;

    const explanations = window.explanations;

    let y = 20;
    doc.setFontSize(20);
    doc.setTextColor(67, 97, 238);
    doc.text('Evaluación de Puesto', 105, y, { align: 'center' });
    y += 20;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Puesto: ${eval.jobTitle}`, 20, y); y += 10;
    doc.text(`Fecha de evaluación: ${new Date(eval.evaluationDate).toLocaleDateString()}`, 20, y); y += 10;

    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Puesto:', 20, y); y += 8;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const descLines = doc.splitTextToSize(eval.jobDescription || 'No especificado', 170);
    doc.text(descLines, 20, y); y += descLines.length * 7 + 5;

    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Responsabilidades Principales:', 20, y); y += 8;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const respLines = doc.splitTextToSize(eval.jobResponsibilities || 'No especificado', 170);
    doc.text(respLines, 20, y); y += respLines.length * 7 + 10;

    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Resultados de Evaluación:', 20, y); y += 10;

    doc.autoTable({
        startY: y,
        head: [['Componente', 'Puntaje']],
        body: [
            ['Know-How', eval.scores.knowHow],
            ['Solución de Problemas', eval.scores.problemSolving],
            ['Responsabilidad', eval.scores.responsibility],
            ['TOTAL', eval.scores.total]
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [67, 97, 238],
            textColor: [255, 255, 255]
        }
    });
    y = doc.lastAutoTable.finalY + 10;

    const profileInfo = window.evaluationData.profileTypes[eval.profileType];

    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Perfil Corto:', 20, y); y += 8;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Tipo: ${profileInfo.name}`, 20, y); y += 8;
    const profLines = doc.splitTextToSize(profileInfo.description, 170);
    doc.text(profLines, 20, y); y += profLines.length * 7 + 10;

    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Nivel:', 20, y); y += 8;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const levelLines = doc.splitTextToSize(eval.level.description, 170);
    doc.text(levelLines, 20, y); y += levelLines.length * 7 + 10;

    // Incluir explicaciones de selección
    doc.setFontSize(14);
    doc.setTextColor(67, 97, 238);
    doc.text('Explicaciones por Perspectiva:', 20, y); y += 10;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    const selections = {
        "Competencia Técnica": explanations.technicalCompetence[document.getElementById("technicalCompetence").value],
        "Nivel de Comunicación": explanations.communicationLevel[document.getElementById("communicationLevel").value],
        "Ámbito de Integración": explanations.integrationScope[document.getElementById("integrationScope").value],
        "Complejidad de Problemas": explanations.problemComplexity[document.getElementById("problemComplexity").value],
        "Libertad de Pensamiento": explanations.thinkingFreedom[document.getElementById("thinkingFreedom").value],
        "Libertad para Actuar": explanations.actionFreedom[document.getElementById("actionFreedom").value],
        "Naturaleza del Impacto": explanations.impactNature[document.getElementById("impactNature").value],
        "Magnitud del Impacto": explanations.impactMagnitude[document.getElementById("impactMagnitude").value]
    };

    for (const [key, val] of Object.entries(selections)) {
        const lines = doc.splitTextToSize(`${key}: ${val || 'No definido'}`, 170);
        doc.text(lines, 20, y);
        y += lines.length * 7;
    }

    doc.save(`Evaluacion_${eval.jobTitle.replace(/\s+/g, '_')}.pdf`);
    showNotification('PDF generado correctamente', 'success');
}
