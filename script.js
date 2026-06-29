/* =========================================================================
   APRENDE INGLÉS CON PROFE CAIMÁN — lógica y datos
   Secciones: ABECEDARIO · NÚMEROS · PRONOMBRES · VERBOS · JUEGOS
   ========================================================================= */

/* ---------------------------------------------------------------------
   1. DATOS
   --------------------------------------------------------------------- */

const ALPHABET = [
  { letter: "A", word: "Apple", es: "Manzana" },
  { letter: "B", word: "Ball", es: "Pelota" },
  { letter: "C", word: "Cat", es: "Gato" },
  { letter: "D", word: "Dog", es: "Perro" },
  { letter: "E", word: "Elephant", es: "Elefante" },
  { letter: "F", word: "Fish", es: "Pez" },
  { letter: "G", word: "Grape", es: "Uva" },
  { letter: "H", word: "House", es: "Casa" },
  { letter: "I", word: "Ice cream", es: "Helado" },
  { letter: "J", word: "Juice", es: "Jugo" },
  { letter: "K", word: "Kite", es: "Cometa" },
  { letter: "L", word: "Lion", es: "León" },
  { letter: "M", word: "Moon", es: "Luna" },
  { letter: "N", word: "Nest", es: "Nido" },
  { letter: "O", word: "Orange", es: "Naranja" },
  { letter: "P", word: "Pencil", es: "Lápiz" },
  { letter: "Q", word: "Queen", es: "Reina" },
  { letter: "R", word: "Rain", es: "Lluvia" },
  { letter: "S", word: "Sun", es: "Sol" },
  { letter: "T", word: "Tree", es: "Árbol" },
  { letter: "U", word: "Umbrella", es: "Sombrilla" },
  { letter: "V", word: "Violin", es: "Violín" },
  { letter: "W", word: "Water", es: "Agua" },
  { letter: "X", word: "Xylophone", es: "Xilófono" },
  { letter: "Y", word: "Yo-yo", es: "Yoyo" },
  { letter: "Z", word: "Zebra", es: "Cebra" },
];

const PRONOUNS = [
  { person: "1ª sing.", subjEn: "I", subjEs: "yo", objEn: "me", objEs: "me", possAdjEn: "my", possAdjEs: "mi", possPronEn: "mine", possPronEs: "mío" },
  { person: "2ª sing.", subjEn: "you", subjEs: "tú", objEn: "you", objEs: "te", possAdjEn: "your", possAdjEs: "tu", possPronEn: "yours", possPronEs: "tuyo" },
  { person: "3ª sing. (m)", subjEn: "he", subjEs: "él", objEn: "him", objEs: "lo", possAdjEn: "his", possAdjEs: "su", possPronEn: "his", possPronEs: "suyo" },
  { person: "3ª sing. (f)", subjEn: "she", subjEs: "ella", objEn: "her", objEs: "la", possAdjEn: "her", possAdjEs: "su", possPronEn: "hers", possPronEs: "suyo" },
  { person: "3ª sing. (n)", subjEn: "it", subjEs: "eso / ello", objEn: "it", objEs: "lo", possAdjEn: "its", possAdjEs: "su", possPronEn: "its", possPronEs: "suyo" },
  { person: "1ª plural", subjEn: "we", subjEs: "nosotros", objEn: "us", objEs: "nos", possAdjEn: "our", possAdjEs: "nuestro", possPronEn: "ours", possPronEs: "nuestro" },
  { person: "3ª plural", subjEn: "they", subjEs: "ellos / ellas", objEn: "them", objEs: "los / las", possAdjEn: "their", possAdjEs: "su", possPronEn: "theirs", possPronEs: "suyo" },
];

// 50 verbos comunes — presente, pasado, traducción y si es regular o irregular
const VERBS = [
  { base: "be", past: ["was", "were"], es: "ser / estar", regular: false },
  { base: "have", past: ["had"], es: "tener", regular: false },
  { base: "do", past: ["did"], es: "hacer", regular: false },
  { base: "go", past: ["went"], es: "ir", regular: false },
  { base: "get", past: ["got"], es: "obtener / conseguir", regular: false },
  { base: "make", past: ["made"], es: "hacer / fabricar", regular: false },
  { base: "know", past: ["knew"], es: "saber / conocer", regular: false },
  { base: "think", past: ["thought"], es: "pensar", regular: false },
  { base: "take", past: ["took"], es: "tomar", regular: false },
  { base: "see", past: ["saw"], es: "ver", regular: false },
  { base: "come", past: ["came"], es: "venir", regular: false },
  { base: "want", past: ["wanted"], es: "querer", regular: true },
  { base: "look", past: ["looked"], es: "mirar", regular: true },
  { base: "use", past: ["used"], es: "usar", regular: true },
  { base: "find", past: ["found"], es: "encontrar", regular: false },
  { base: "give", past: ["gave"], es: "dar", regular: false },
  { base: "tell", past: ["told"], es: "decir / contar", regular: false },
  { base: "work", past: ["worked"], es: "trabajar", regular: true },
  { base: "call", past: ["called"], es: "llamar", regular: true },
  { base: "try", past: ["tried"], es: "intentar", regular: true },
  { base: "ask", past: ["asked"], es: "preguntar", regular: true },
  { base: "need", past: ["needed"], es: "necesitar", regular: true },
  { base: "feel", past: ["felt"], es: "sentir", regular: false },
  { base: "become", past: ["became"], es: "convertirse en", regular: false },
  { base: "leave", past: ["left"], es: "dejar / salir", regular: false },
  { base: "put", past: ["put"], es: "poner", regular: false },
  { base: "mean", past: ["meant"], es: "significar", regular: false },
  { base: "keep", past: ["kept"], es: "mantener / guardar", regular: false },
  { base: "let", past: ["let"], es: "dejar / permitir", regular: false },
  { base: "begin", past: ["began"], es: "comenzar / empezar", regular: false },
  { base: "seem", past: ["seemed"], es: "parecer", regular: true },
  { base: "help", past: ["helped"], es: "ayudar", regular: true },
  { base: "talk", past: ["talked"], es: "hablar", regular: true },
  { base: "turn", past: ["turned"], es: "girar / voltear", regular: true },
  { base: "start", past: ["started"], es: "empezar / comenzar", regular: true },
  { base: "show", past: ["showed"], es: "mostrar", regular: true },
  { base: "hear", past: ["heard"], es: "oír / escuchar", regular: false },
  { base: "play", past: ["played"], es: "jugar", regular: true },
  { base: "run", past: ["ran"], es: "correr", regular: false },
  { base: "move", past: ["moved"], es: "mover(se)", regular: true },
  { base: "like", past: ["liked"], es: "gustar", regular: true },
  { base: "live", past: ["lived"], es: "vivir", regular: true },
  { base: "believe", past: ["believed"], es: "creer", regular: true },
  { base: "bring", past: ["brought"], es: "traer", regular: false },
  { base: "happen", past: ["happened"], es: "suceder / pasar", regular: true },
  { base: "write", past: ["wrote"], es: "escribir", regular: false },
  { base: "sit", past: ["sat"], es: "sentarse", regular: false },
  { base: "stand", past: ["stood"], es: "estar de pie / parar", regular: false },
  { base: "lose", past: ["lost"], es: "perder", regular: false },
  { base: "pay", past: ["paid"], es: "pagar", regular: false },
];

// ---- Generación de números 1-100 en inglés y español ----
const EN_ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const EN_TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function numberToEnglish(n) {
  if (n === 100) return "one hundred";
  if (n < 20) return EN_ONES[n];
  const t = Math.floor(n / 10), o = n % 10;
  return EN_TENS[t] + (o ? "-" + EN_ONES[o] : "");
}

const ES_UNO_19 = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez",
  "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
const ES_VEINTI = ["veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco",
  "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
const ES_DECENAS = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];

function numberToSpanish(n) {
  if (n === 100) return "cien";
  if (n < 20) return ES_UNO_19[n];
  if (n < 30) return ES_VEINTI[n - 20];
  const t = Math.floor(n / 10), o = n % 10;
  return o === 0 ? ES_DECENAS[t] : ES_DECENAS[t] + " y " + ES_UNO_19[o];
}

const NUMBERS = [];
for (let i = 1; i <= 100; i++) {
  NUMBERS.push({ value: i, en: numberToEnglish(i), es: numberToSpanish(i) });
}

/* ---------------------------------------------------------------------
   2. UTILIDADES
   --------------------------------------------------------------------- */

const qs = (sel, parent = document) => parent.querySelector(sel);
const qsa = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(array, count) {
  return shuffle(array).slice(0, count);
}

/* ---------------------------------------------------------------------
   3. RENDER — ABECEDARIO
   --------------------------------------------------------------------- */

function renderAlphabet() {
  const grid = qs("#alphabet-grid");
  grid.innerHTML = ALPHABET.map((item, i) => `
    <button class="flip-card" type="button" data-index="${i}" aria-label="Letra ${item.letter}. Pulsa para ver la traducción.">
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <span class="big-letter">${item.letter}</span>
          <span class="word-en">${item.word}</span>
        </div>
        <div class="flip-face flip-back">
          <span class="word-es">${item.es}</span>
          <small>${item.word} → ${item.es}</small>
        </div>
      </div>
    </button>
  `).join("");

  qsa(".flip-card", grid).forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("is-flipped"));
  });
}

/* ---------------------------------------------------------------------
   4. RENDER — NÚMEROS (pestañas por decena)
   --------------------------------------------------------------------- */

function renderNumbers() {
  const tabsWrap = qs("#decade-tabs");
  const grid = qs("#numbers-grid");
  const decadeLabels = ["1–10", "11–20", "21–30", "31–40", "41–50", "51–60", "61–70", "71–80", "81–90", "91–100"];

  tabsWrap.innerHTML = decadeLabels.map((label, i) =>
    `<button class="decade-tab${i === 0 ? " active" : ""}" type="button" data-decade="${i}">${label}</button>`
  ).join("");

  function showDecade(i) {
    const start = i * 10 + 1;
    const end = Math.min(start + 9, 100);
    const slice = NUMBERS.filter(n => n.value >= start && n.value <= end);
    grid.innerHTML = slice.map(n => `
      <div class="number-card">
        <div class="num">${n.value}</div>
        <div class="num-en">${n.en}</div>
        <div class="num-es">${n.es}</div>
      </div>
    `).join("");
    qsa(".decade-tab", tabsWrap).forEach((btn, idx) => btn.classList.toggle("active", idx === i));
  }

  qsa(".decade-tab", tabsWrap).forEach(btn => {
    btn.addEventListener("click", () => showDecade(Number(btn.dataset.decade)));
  });

  showDecade(0);
}

/* ---------------------------------------------------------------------
   5. RENDER — PRONOMBRES
   --------------------------------------------------------------------- */

function renderPronouns() {
  const body = qs("#pronouns-body");
  body.innerHTML = PRONOUNS.map(p => `
    <tr>
      <td>${p.person}</td>
      <td><div class="cell-en">${p.subjEn}</div><div class="cell-es">${p.subjEs}</div></td>
      <td><div class="cell-en">${p.objEn}</div><div class="cell-es">${p.objEs}</div></td>
      <td><div class="cell-en">${p.possAdjEn}</div><div class="cell-es">${p.possAdjEs}</div></td>
      <td><div class="cell-en">${p.possPronEn}</div><div class="cell-es">${p.possPronEs}</div></td>
    </tr>
  `).join("");
}

/* ---------------------------------------------------------------------
   6. RENDER — VERBOS (con buscador)
   --------------------------------------------------------------------- */

function renderVerbs() {
  const body = qs("#verbs-body");
  const countEl = qs("#verb-count");
  const searchInput = qs("#verb-search");

  function draw(filterText) {
    const f = (filterText || "").trim().toLowerCase();
    const rows = VERBS.filter(v =>
      !f || v.base.includes(f) || v.es.toLowerCase().includes(f) || v.past.some(p => p.includes(f))
    );
    body.innerHTML = rows.map((v, i) => `
      <tr>
        <td>${i + 1}</td>
        <td class="cell-en">${v.base}</td>
        <td class="cell-en">${v.past.join(" / ")}</td>
        <td class="cell-es">${v.es}</td>
        <td><span class="tag ${v.regular ? "regular" : "irregular"}">${v.regular ? "Regular" : "Irregular"}</span></td>
      </tr>
    `).join("");
    countEl.textContent = `${rows.length} de ${VERBS.length} verbos`;
  }

  draw("");
  searchInput.addEventListener("input", e => draw(e.target.value));
}

/* ---------------------------------------------------------------------
   7. JUEGOS — selector de tarjetas
   --------------------------------------------------------------------- */

function setupGamePicker() {
  qsa(".game-cartridge").forEach(card => {
    card.querySelector("button").addEventListener("click", () => {
      const target = card.dataset.game;
      qsa(".game-stage").forEach(s => s.classList.remove("active"));
      qs(`#${target}`).classList.add("active");
      qs(`#${target}`).scrollIntoView({ behavior: "smooth", block: "start" });
      if (target === "game-numbers") startNumberQuiz();
      if (target === "game-memory") startMemoryGame();
      if (target === "game-tense") startTenseGame();
    });
  });

  qsa(".close-game").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".game-stage").classList.remove("active");
    });
  });
}

/* ---------------------------------------------------------------------
   8. JUEGO 1 — Quiz numérico
   --------------------------------------------------------------------- */

const numberQuizState = { round: 0, score: 0, total: 8, current: null };

function startNumberQuiz() {
  numberQuizState.round = 0;
  numberQuizState.score = 0;
  numberQuizState.sequence = sample(NUMBERS, numberQuizState.total);
  qs("#game-numbers .game-score").textContent = `Puntos: 0 / ${numberQuizState.total}`;
  nextNumberQuestion();
}

function nextNumberQuestion() {
  const stage = qs("#game-numbers");
  const { round, total, sequence } = numberQuizState;

  if (round >= total) {
    qs("#numbers-progress-fill").style.width = "100%";
    showFinalBanner(stage, numberQuizState.score, total, () => startNumberQuiz());
    return;
  }

  const target = sequence[round];
  numberQuizState.current = target;

  const distractors = sample(NUMBERS.filter(n => n.value !== target.value), 3);
  const options = shuffle([target, ...distractors]);

  qs("#numbers-progress-fill").style.width = `${(round / total) * 100}%`;

  stage.querySelector(".game-body").innerHTML = `
    <p class="quiz-prompt">¿Cómo se dice <strong>"${target.es}"</strong> en inglés?</p>
    <div class="quiz-options">
      ${options.map(o => `<button class="quiz-option" type="button" data-value="${o.value}">${o.en}</button>`).join("")}
    </div>
    <p class="feedback-line" id="number-feedback"></p>
  `;

  qsa(".quiz-option", stage).forEach(btn => {
    btn.addEventListener("click", () => handleNumberAnswer(btn, target.value, stage));
  });
}

function handleNumberAnswer(btn, correctValue, stage) {
  const chosen = Number(btn.dataset.value);
  const feedback = qs("#number-feedback", stage);
  qsa(".quiz-option", stage).forEach(b => (b.disabled = true));

  if (chosen === correctValue) {
    btn.classList.add("correct");
    feedback.textContent = "¡Correcto! 🐊";
    feedback.className = "feedback-line good";
    numberQuizState.score++;
  } else {
    btn.classList.add("wrong");
    qsa(".quiz-option", stage).forEach(b => {
      if (Number(b.dataset.value) === correctValue) b.classList.add("correct");
    });
    feedback.textContent = "Casi... ¡sigue practicando!";
    feedback.className = "feedback-line bad";
  }

  qs("#game-numbers .game-score").textContent = `Puntos: ${numberQuizState.score} / ${numberQuizState.total}`;

  setTimeout(() => {
    numberQuizState.round++;
    nextNumberQuestion();
  }, 1100);
}

/* ---------------------------------------------------------------------
   9. JUEGO 2 — Memorama EN-ES
   --------------------------------------------------------------------- */

const MEMORY_PAIRS = [
  { en: "I", es: "yo" },
  { en: "you", es: "tú" },
  { en: "he", es: "él" },
  { en: "she", es: "ella" },
  { en: "we", es: "nosotros" },
  { en: "they", es: "ellos" },
  { en: "cat", es: "gato" },
  { en: "dog", es: "perro" },
];

const memoryState = { cards: [], openIndices: [], matches: 0, moves: 0, locked: false };

function buildMemoryDeck() {
  const deck = [];
  MEMORY_PAIRS.forEach((pair, i) => {
    deck.push({ pairId: i, label: pair.en, lang: "en" });
    deck.push({ pairId: i, label: pair.es, lang: "es" });
  });
  return shuffle(deck);
}

function startMemoryGame() {
  memoryState.cards = buildMemoryDeck();
  memoryState.openIndices = [];
  memoryState.matches = 0;
  memoryState.moves = 0;
  memoryState.locked = false;
  renderMemoryGrid();
  updateMemoryStats();
}

function renderMemoryGrid() {
  const grid = qs("#memo-grid");
  grid.innerHTML = memoryState.cards.map((c, i) => `
    <button class="memo-card" type="button" data-index="${i}" aria-label="Carta oculta. Pulsa para revelar">?</button>
  `).join("");

  qsa(".memo-card", grid).forEach(btn => {
    btn.addEventListener("click", () => onMemoryCardClick(Number(btn.dataset.index)));
  });
}

function updateMemoryStats() {
  const matchesText = `${memoryState.matches} / ${MEMORY_PAIRS.length}`;
  qs("#memo-moves").textContent = memoryState.moves;
  qs("#memo-matches-head").textContent = matchesText;
  qs("#memo-matches-stats").textContent = matchesText;
}

function onMemoryCardClick(index) {
  if (memoryState.locked) return;
  const btn = qs(`.memo-card[data-index="${index}"]`);
  if (!btn || btn.classList.contains("revealed") || btn.classList.contains("matched")) return;

  btn.classList.add("revealed");
  btn.textContent = memoryState.cards[index].label;
  btn.setAttribute("aria-label", `Carta revelada: ${memoryState.cards[index].label}`);
  memoryState.openIndices.push(index);

  if (memoryState.openIndices.length === 2) {
    memoryState.locked = true;
    memoryState.moves++;
    updateMemoryStats();
    const [a, b] = memoryState.openIndices;
    const cardA = memoryState.cards[a], cardB = memoryState.cards[b];

    if (cardA.pairId === cardB.pairId && cardA.lang !== cardB.lang) {
      setTimeout(() => {
        const cardElA = qs(`.memo-card[data-index="${a}"]`);
        const cardElB = qs(`.memo-card[data-index="${b}"]`);
        cardElA.classList.add("matched");
        cardElB.classList.add("matched");
        cardElA.setAttribute("aria-label", `Pareja encontrada: ${cardElA.textContent}`);
        cardElB.setAttribute("aria-label", `Pareja encontrada: ${cardElB.textContent}`);
        memoryState.matches++;
        memoryState.openIndices = [];
        memoryState.locked = false;
        updateMemoryStats();
        if (memoryState.matches === MEMORY_PAIRS.length) {
          setTimeout(() => {
            const stage = qs("#game-memory");
            stage.querySelector(".game-body").insertAdjacentHTML("beforeend",
              `<div class="final-banner">¡Memoria de cocodrilo! Completaste el memorama en ${memoryState.moves} intentos. 🐊</div>`);
          }, 300);
        }
      }, 500);
    } else {
      setTimeout(() => {
        [a, b].forEach(idx => {
          const c = qs(`.memo-card[data-index="${idx}"]`);
          c.classList.remove("revealed");
          c.textContent = "?";
          c.setAttribute("aria-label", "Carta oculta. Pulsa para revelar");
        });
        memoryState.openIndices = [];
        memoryState.locked = false;
      }, 700);
    }
  }
}

/* ---------------------------------------------------------------------
   10. JUEGO 3 — Pasado o presente (reto de verbos)
   --------------------------------------------------------------------- */

const tenseState = { round: 0, score: 0, total: 8, sequence: [] };

function startTenseGame() {
  tenseState.round = 0;
  tenseState.score = 0;
  tenseState.sequence = sample(VERBS, tenseState.total);
  qs("#game-tense .game-score").textContent = `Puntos: 0 / ${tenseState.total}`;
  nextTenseQuestion();
}

function nextTenseQuestion() {
  const stage = qs("#game-tense");
  const { round, total, sequence } = tenseState;

  if (round >= total) {
    qs("#tense-progress-fill").style.width = "100%";
    showFinalBanner(stage, tenseState.score, total, () => startTenseGame());
    return;
  }

  const verb = sequence[round];

  qs("#tense-progress-fill").style.width = `${(round / total) * 100}%`;

  stage.querySelector(".game-body").innerHTML = `
    <div class="tense-card">
      <p>¿Cuál es el <strong>pasado</strong> de este verbo?</p>
      <div class="tense-verb">${verb.base}</div>
      <div class="tense-verb-es">(${verb.es})</div>
      <div class="tense-form">
        <input type="text" id="tense-input" placeholder="Escribe en inglés..." autocomplete="off" />
        <button type="button" id="tense-submit">Comprobar</button>
      </div>
      <p class="reveal-line" id="tense-feedback"></p>
    </div>
  `;

  const input = qs("#tense-input", stage);
  const submit = qs("#tense-submit", stage);
  input.focus();

  function checkAnswer() {
    if (submit.disabled) return;
    submit.disabled = true;
    input.disabled = true;
    const value = input.value.trim().toLowerCase();
    const feedback = qs("#tense-feedback", stage);
    const correct = verb.past.some(p => p.toLowerCase() === value);

    if (correct) {
      feedback.textContent = "¡Correcto! 🐊";
      feedback.style.color = "var(--swamp)";
      tenseState.score++;
    } else {
      feedback.textContent = `La respuesta correcta es: ${verb.past.join(" / ")}`;
      feedback.style.color = "var(--coral)";
    }
    qs("#game-tense .game-score").textContent = `Puntos: ${tenseState.score} / ${tenseState.total}`;

    setTimeout(() => {
      tenseState.round++;
      nextTenseQuestion();
    }, 1400);
  }

  submit.addEventListener("click", checkAnswer);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") checkAnswer();
  });
}

/* ---------------------------------------------------------------------
   11. Pantalla final compartida por los juegos de puntaje
   --------------------------------------------------------------------- */

function showFinalBanner(stage, score, total, onRestart) {
  let message;
  const ratio = score / total;
  if (ratio === 1) message = "¡Perfecto! Eres un maestro del inglés. 🏆";
  else if (ratio >= 0.7) message = "¡Muy bien hecho! Sigue así. 🐊";
  else if (ratio >= 0.4) message = "¡Buen intento! Repasa un poco más.";
  else message = "¡Sigue practicando, tú puedes! 💪";

  stage.querySelector(".game-body").innerHTML = `
    <div class="final-banner">
      <p>Puntaje final: ${score} / ${total}</p>
      <p>${message}</p>
    </div>
    <div class="game-footer-actions">
      <button type="button" class="btn btn-primary" id="restart-${stage.id}">Jugar otra vez</button>
    </div>
  `;
  qs(`#restart-${stage.id}`).addEventListener("click", onRestart);
}

/* ---------------------------------------------------------------------
   12. INICIALIZACIÓN
   --------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderAlphabet();
  renderNumbers();
  renderPronouns();
  renderVerbs();
  setupGamePicker();

  qs("#year") && (qs("#year").textContent = new Date().getFullYear());
});
