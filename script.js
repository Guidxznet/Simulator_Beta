/**
 * 1. Mega Base de Datos de Tests
 * Cada test tiene su ID, sus categorías (con colores específicos) y sus preguntas.
 */
const database = {
  moral: {
    title: "Brújula Ética Universal",
    categories: {
      virtue: { 
        title: "Ética de la Virtud (Aristóteles)", 
        description: "Inspirada en la Antigua Grecia. No te fijas solo en las reglas, sino en el carácter. Buscas el 'punto medio' y actuar como una persona honorable y balanceada.", 
        color: "#ffffff" // Blanco Puro
      },
      stoicism: { 
        title: "Estoicismo (Zenón y Epicteto)", 
        description: "Te enfocas en lo que puedes controlar. Priorizas la razón sobre la emoción y buscas la ataraxia (paz mental) aceptando el destino con fortaleza.", 
        color: "#4682B4" // Azul Acero
      },
      deontology: { 
        title: "Deontología (Immanuel Kant)", 
        description: "Crees en imperativos categóricos. Una acción es correcta si puede convertirse en una ley universal. El deber está por encima de cualquier deseo personal.", 
        color: "#FF8C00" // Naranja Quemado
      },
      utilitarianism: { 
        title: "Utilitarismo (John Stuart Mill)", 
        description: "La moral es cálculo. La mejor acción es la que genera la mayor felicidad neta para el mayor número de personas involucradas.", 
        color: "#FFD700" // Dorado
      },
      nihilism: { 
        title: "Nihilismo Moral (Friedrich Nietzsche)", 
        description: "Cuestionas los valores impuestos. Crees que la 'moral tradicional' es una cadena y que el individuo debe crear sus propios valores (Ubermensch).", 
        color: "#4B0082" // Índigo / Violeta Oscuro
      },
      contractualism: { 
        title: "Contractualismo (Thomas Hobbes / Rawls)", 
        description: "La moral es un acuerdo social. Actuamos bien porque hemos aceptado un contrato para evitar el caos y garantizar la convivencia justa.", 
        color: "#2E8B57" // Verde Bosque
      },
      existentialism: { 
        title: "Existencialismo (Jean-Paul Sartre)", 
        description: "Estamos 'condenados a ser libres'. No hay un libro de reglas; tú eres el único responsable de definir tu moral a través de tus elecciones.", 
        color: "rgb(121, 121, 123)" // Gris Medio
      },
      hedonism: { 
        title: "Hedonismo Ético (Epicuro)", 
        description: "El bien supremo es el placer y la ausencia de dolor. Pero ojo, buscas el placer duradero (intelectual y tranquilo), no el exceso momentáneo.", 
        color: "#DC143C" // Carmesí
      }
    },
    questions: [
      { 
        text: "Un amigo cercano confiesa un crimen. Si lo entregas, haces justicia; si callas, eres leal.", 
        options: [
          { text: "Lo entrego, el deber ante la ley es universal.", type: "deontology" },
          { text: "Callo, la lealtad personal es mi virtud suprema.", type: "virtue" },
          { text: "Depende de si su captura beneficia a la sociedad.", type: "utilitarianism" }
        ]
      },
      { 
        text: "Te ofrecen un puesto de poder donde puedes ayudar a muchos, pero debes aceptar sobornos para llegar ahí.", 
        options: [
          { text: "Acepto, el beneficio final de muchos justifica el acto.", type: "utilitarianism" },
          { text: "Rechazo, un hombre virtuoso no se corrompe.", type: "virtue" },
          { text: "No importa, el poder es solo un juego de voluntades.", type: "nihilism" }
        ]
      },
      { 
        text: "Vives en una sociedad injusta. ¿Qué motiva tu obediencia?", 
        options: [
          { text: "El contrato social que firmamos para evitar el caos.", type: "contractualism" },
          { text: "Mi libertad absoluta de elegir mi propio camino.", type: "existentialism" },
          { text: "La indiferencia racional; acepto lo que no puedo cambiar.", type: "stoicism" }
        ]
      },
      { 
        text: "Tienes la oportunidad de vengarte de alguien que te hizo mucho daño sin ser descubierto.", 
        options: [
          { text: "No lo hago, busco la paz mental y no dejarme llevar.", type: "stoicism" },
          { text: "Lo hago si eso me quita el dolor y me da placer.", type: "hedonism" },
          { text: "La venganza es un concepto moral vacío que yo defino.", type: "existentialism" }
        ]
      },
      { 
        text: "Debes elegir entre salvar una obra de arte única de la humanidad o a un vagabundo desconocido.", 
        options: [
          { text: "Al vagabundo, la vida humana es un deber absoluto.", type: "deontology" },
          { text: "La obra de arte, su valor histórico da más felicidad a largo plazo.", type: "utilitarianism" },
          { text: "Elijo según lo que mi propio criterio de grandeza dicte.", type: "nihilism" }
        ]
      }
    ]
  },
  therian: {
    title: "Test: ¿Qué tan Therian eres?",
    categories: {
      human: { title: "Normal", description: "Estás fuertemente arraigado a tu experiencia humana y cotidiana.", color: "#808080" }, // Gris
      awakening: { title: "Furro", description: "Sientes una profunda curiosidad y conexión empática con los animales.", color: "#32cd32" }, // Verde lima
      therian: { title: "Therian", description: "Experimentas la vida con una profunda identificación espiritual o psicológica no humana.", color: "#8a2be2" } // Morado
    },
    questions: [
      { text: "Cuando caminas por un bosque denso, tú...", options: [{ text: "Siento que por fin he vuelto a casa.", type: "therian" }, { text: "Me relajo mucho, amo la naturaleza.", type: "awakening" }, { text: "Me preocupan los insectos y perderme.", type: "human" }] },
      { text: "¿Alguna vez has experimentado 'phantom shifts' (sentir orejas, cola o garras que no tienes)?", options: [{ text: "Sí, es una sensación muy familiar.", type: "therian" }, { text: "A veces creo sentir algo similar.", type: "awakening" }, { text: "Nunca, eso me suena muy extraño.", type: "human" }] },
      { text: "¿Cómo describirías tu instinto ante el peligro?", options: [{ text: "Tengo respuestas muy viscerales, como gruñir o correr a cuatro patas.", type: "therian" }, { text: "Mis sentidos se agudizan mucho.", type: "awakening" }, { text: "Grito, lloro o llamo a emergencias.", type: "human" }] },
      { text: "Si pudieras cambiar tu cuerpo permanentemente por el de tu animal favorito...", options: [{ text: "Lo haría sin dudarlo ni un segundo.", type: "therian" }, { text: "Lo pensaría, sería divertido intentar un tiempo.", type: "awakening" }, { text: "No, me gusta ser humano.", type: "human" }] },
      { text: "¿Sientes que naciste en la especie equivocada?", options: [{ text: "Totalmente, mi alma no es humana.", type: "therian" }, { text: "A veces me siento desconectado de la humanidad.", type: "awakening" }, { text: "No, soy humano y me siento como tal.", type: "human" }] }
    ]
  },
  gay: {
    title: "Medidor de Espectro",
    categories: {
      straight: { title: "Heterosexual", description: "Navegas por aguas muy tranquilas y tradicionales.", color: "#00ced1" }, // Cian
      bi: { title: "Bisexual", description: "Disfrutas de lo mejor de ambos mundos, el caos hermoso.", color: "#ff1493" }, // Rosa Profundo
      gay: { title: "Maricon", description: "Perteneces al imperio del arcoíris. ¡Brillas con luz propia!", color: "#ff00ff" } // Magenta
    },
    questions: [
      { text: "Cuando ves a alguien increíblemente atractivo de tu mismo género...", options: [{ text: "Me enamoro mentalmente y me pongo nervioso/a.", type: "gay" }, { text: "Admito que es muy atractivo/a, tal vez siento curiosidad.", type: "bi" }, { text: "Reconozco su belleza objetiva, pero sin atracción.", type: "straight" }] },
      { text: "¿Cómo es tu playlist ideal?", options: [{ text: "Lady Gaga, Charli XCX, íconos pop e himnos.", type: "gay" }, { text: "Un mix caótico de indie, rock y pop de los 2000.", type: "bi" }, { text: "Lo que suene en la radio o reggaetón normal.", type: "straight" }] },
      { text: "¿Alguna vez te atrajo un villano/a ficticio de tu mismo género?", options: [{ text: "Absolutamente, es mi tipo ideal.", type: "gay" }, { text: "Tal vez uno o dos me hicieron dudar.", type: "bi" }, { text: "No, me parecen geniales pero no atractivos.", type: "straight" }] },
      { text: "En una fiesta, ¿dónde te encuentras?", options: [{ text: "En el centro de la pista de baile dándolo todo.", type: "gay" }, { text: "En el sillón evaluando a todos en secreto.", type: "bi" }, { text: "Hablando de fútbol o trabajo con los demás.", type: "straight" }] },
      { text: "Eliges tu ropa basándote en...", options: [{ text: "Que se vea fabuloso y grite 'yo'.", type: "gay" }, { text: "Que sea alternativo, cómodo y un poco raro.", type: "bi" }, { text: "Jeans, camiseta, lo que esté limpio.", type: "straight" }] }
    ]
  },
  personality: {
    title: "Test de Personalidad",
    categories: {
      introvert: { title: "Introvertido", description: "Recargas tu energía estando a solas. Valoras las conexiones profundas.", color: "#4169e1" }, // Azul Real
      ambivert: { title: "Ambivertido", description: "Tienes el equilibrio perfecto. Te adaptas al grupo o a la soledad fácilmente.", color: "#ffbb00" }, // Amarillo
      extrovert: { title: "Extrovertido", description: "El mundo exterior es tu batería. Amas la atención y conocer gente nueva.", color: "#ff4500" } // Naranja rojizo
    },
    questions: [
      { text: "Es viernes por la noche tras una semana dura. Tú prefieres...", options: [{ text: "Ir a una gran fiesta a desestresarme.", type: "extrovert" }, { text: "Cena tranquila con un par de amigos.", type: "ambivert" }, { text: "Cama, pijama y maratón de Netflix solos.", type: "introvert" }] },
      { text: "En una reunión con gente que no conoces...", options: [{ text: "Soy el primero en romper el hielo y hablar.", type: "extrovert" }, { text: "Hablo si me hablan, me adapto al ritmo.", type: "ambivert" }, { text: "Me quedo callado y observo desde una esquina.", type: "introvert" }] },
      { text: "Cuando tienes un problema grave...", options: [{ text: "Necesito contárselo a todos para desahogarme.", type: "extrovert" }, { text: "Hablo solo con mi mejor amigo o pareja.", type: "ambivert" }, { text: "Me lo guardo e intento procesarlo en mi mente.", type: "introvert" }] },
      { text: "¿Qué opinas del trabajo en equipo?", options: [{ text: "Me encanta, las ideas fluyen mejor en grupo.", type: "extrovert" }, { text: "Está bien si todos hacen su parte.", type: "ambivert" }, { text: "Lo odio, prefiero controlar todo yo solo.", type: "introvert" }] },
      { text: "Si tu teléfono suena de repente con una llamada...", options: [{ text: "Contesto de inmediato con entusiasmo.", type: "extrovert" }, { text: "Depende de quién sea, a veces contesto.", type: "ambivert" }, { text: "Miro la pantalla con terror hasta que cuelgan.", type: "introvert" }] }
    ]
  }
};

/**
 * 2. Variables de Estado
 */
let currentTestId = "moral";
let currentQuestionIndex = 0;
let scores = {};
let currentQuestions = []; 
let userName = "";
let resultChartInstance = null;

/**
 * 3. Elementos del DOM
 */
const screens = document.querySelectorAll('.screen');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const glossaryScreen = document.getElementById('glossary-screen');

const userNameInput = document.getElementById('user-name');
const testSelector = document.getElementById('test-selector');
const questionCountSelect = document.getElementById('question-count');

const startBtn = document.getElementById('start-btn');
const glossaryBtn = document.getElementById('glossary-btn');
const backToStartBtn = document.getElementById('back-to-start-btn');
const restartBtn = document.getElementById('restart-btn');

const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const resultGreeting = document.getElementById('result-greeting');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

const glossaryTitle = document.getElementById('glossary-title');
const glossaryBody = document.getElementById('glossary-body');

/**
 * 4. Funciones
 */

// Mezclar arrays (algoritmo Fisher-Yates)
function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Cambiar de pantalla
function showScreen(screenElement) {
  screens.forEach(screen => screen.classList.remove('active'));
  setTimeout(() => screenElement.classList.add('active'), 50);
}

// Llenar el glosario
function showGlossary() {
  const selectedTest = testSelector.value;
  const testData = database[selectedTest];
  
  glossaryTitle.textContent = `Significados: ${testData.title}`;
  glossaryBody.innerHTML = ""; // Limpiar tabla
  
  // Generar filas basadas en las categorías de ese test
  for (const key in testData.categories) {
    const cat = testData.categories[key];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><div class="color-box" style="background-color: ${cat.color};"></div></td>
      <td style="font-weight: bold; color: ${cat.color}">${cat.title}</td>
      <td>${cat.description}</td>
    `;
    glossaryBody.appendChild(tr);
  }
  
  showScreen(glossaryScreen);
}

function startGame() {
  userName = userNameInput.value.trim() || "Viajero";
  currentTestId = testSelector.value;
  const testData = database[currentTestId];
  
  const numberOfQuestions = Math.min(parseInt(questionCountSelect.value, 10), testData.questions.length);
  
  currentQuestions = shuffleArray(testData.questions).slice(0, numberOfQuestions);
  
  // Inicializar scores dinámicamente según el test elegido
  scores = {};
  for (const key in testData.categories) {
    scores[key] = 0;
  }
  
  currentQuestionIndex = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const currentQ = currentQuestions[currentQuestionIndex];
  
  progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
  progressBar.style.width = `${((currentQuestionIndex) / currentQuestions.length) * 100}%`;

  questionText.textContent = currentQ.text;
  
  // Limpiar botones anteriores
  optionsContainer.innerHTML = "";
  
  // Generar botones dinámicamente (soporta 2 o 3 opciones)
  currentQ.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option.text;
    btn.dataset.type = option.type;
    btn.addEventListener('click', selectOption);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(event) {
  const selectedType = event.target.dataset.type;
  scores[selectedType]++;
  currentQuestionIndex++;
  
  if (currentQuestionIndex < currentQuestions.length) {
    quizScreen.classList.remove('active');
    setTimeout(() => {
      renderQuestion();
      quizScreen.classList.add('active');
    }, 300);
  } else {
    progressBar.style.width = '100%';
    setTimeout(showResults, 500);
  }
}

function showResults() {
  const testData = database[currentTestId];
  
  // Buscar categoría ganadora
  let dominantTrait = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const resultData = testData.categories[dominantTrait];
  
  resultGreeting.textContent = `¡${userName}, tu resultado es...`;
  resultTitle.textContent = resultData.title;
  resultTitle.style.color = resultData.color; // Pintar el título del color de la categoría
  resultDescription.textContent = resultData.description;
  
  drawChart(testData);
  showScreen(resultScreen);
}

function drawChart(testData) {
  const ctx = document.getElementById('result-chart').getContext('2d');
  if (resultChartInstance) resultChartInstance.destroy();

  // Extraer etiquetas, datos y colores dinámicamente de la base de datos
  const labels = [];
  const data = [];
  const backgroundColors = [];

  for (const key in testData.categories) {
    labels.push(testData.categories[key].title);
    data.push(scores[key]);
    backgroundColors.push(testData.categories[key].color);
  }

  resultChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors,
        borderColor: '#1a1a1d',
        borderWidth: 3,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#f5f5f5', font: { family: "'Segoe UI', Tahoma, sans-serif", size: 14 } }
        }
      }
    }
  });
}

/**
 * 5. Event Listeners
 */
startBtn.addEventListener('click', startGame);
glossaryBtn.addEventListener('click', showGlossary);
backToStartBtn.addEventListener('click', () => showScreen(startScreen));
restartBtn.addEventListener('click', () => showScreen(startScreen));