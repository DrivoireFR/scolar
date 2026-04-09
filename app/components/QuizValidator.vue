<template>
  <div class="quiz-validator" :class="{ 'quiz-validator--compact': variant === 'compact' }">
    <!-- Quiz not started -->
    <div v-if="!quizStarted" class="quiz-start">
      <div class="quiz-start__content">
        <h3>Valide ta compréhension</h3>
        <p>{{ quizData.description }}</p>
        <p class="quiz-requirement">
          Seuil de réussite : <strong>{{ quizData.passingScorePercent }}%</strong>
        </p>
        <button @click="startQuiz" class="btn btn--primary">
          Commencer le quiz
        </button>
      </div>
    </div>

    <!-- Quiz in progress -->
    <div v-else-if="!quizCompleted" class="quiz-progress">
      <!-- Progress bar -->
      <div class="progress-section">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <p class="progress-text">Question {{ currentQuestionIndex + 1 }}/{{ quizData.questions.length }}</p>
      </div>

      <!-- Question -->
      <div class="question-card">
        <h4>{{ currentQuestion.prompt }}</h4>

        <!-- Single choice -->
        <div v-if="currentQuestion.type === 'single'" class="choices">
          <label
            v-for="choice in currentQuestion.choices"
            :key="choice.id"
            class="choice-label"
          >
            <input
              v-model="selectedAnswer"
              type="radio"
              :value="choice.id"
              @change="selectAnswer"
              class="choice-input"
            />
            <span class="choice-text">{{ choice.label }}</span>
          </label>
        </div>

        <!-- Multiple choice -->
        <div v-else-if="currentQuestion.type === 'multiple'" class="choices">
          <label
            v-for="choice in currentQuestion.choices"
            :key="choice.id"
            class="choice-label"
          >
            <input
              v-model="selectedAnswers"
              type="checkbox"
              :value="choice.id"
              @change="selectAnswer"
              class="choice-input"
            />
            <span class="choice-text">{{ choice.label }}</span>
          </label>
        </div>

        <!-- Boolean -->
        <div v-else-if="currentQuestion.type === 'boolean'" class="choices">
          <label
            v-for="choice in currentQuestion.choices"
            :key="choice.id"
            class="choice-label"
          >
            <input
              v-model="selectedAnswer"
              type="radio"
              :value="choice.id"
              @change="selectAnswer"
              class="choice-input"
            />
            <span class="choice-text">{{ choice.label }}</span>
          </label>
        </div>

        <!-- Feedback après réponse -->
        <div v-if="showFeedback" class="feedback" :class="{ 'feedback--correct': isCorrect, 'feedback--incorrect': !isCorrect }">
          <p>{{ isCorrect ? currentQuestion.feedback.correct : currentQuestion.feedback.incorrect }}</p>
        </div>

        <!-- Navigation buttons -->
        <div class="quiz-navigation">
          <button
            @click="previousQuestion"
            :disabled="currentQuestionIndex === 0"
            class="btn btn--secondary"
          >
            ← Précédent
          </button>

          <button
            v-if="!showFeedback"
            @click="selectAnswer"
            :disabled="!hasAnswered"
            class="btn btn--primary"
          >
            Valider
          </button>
          <button
            v-else
            @click="nextQuestion"
            class="btn btn--primary"
          >
            {{ currentQuestionIndex === quizData.questions.length - 1 ? 'Voir résultats' : 'Suivant' }} →
          </button>
        </div>
      </div>
    </div>

    <!-- Quiz completed -->
    <div v-else class="quiz-results">
      <div class="results-card" :class="{ 'results-card--passed': passed, 'results-card--failed': !passed }">
        <div class="results-emoji">
          {{ passed ? '🎉' : '⚠️' }}
        </div>

        <h3>{{ passed ? 'Bravo !' : 'À retravailler' }}</h3>

        <div class="score-display">
          <p class="score-value">{{ score }}/{{ quizData.questions.length }}</p>
          <p class="score-percent">{{ scorePercent }}%</p>
        </div>

        <div v-if="passed" class="passed-message">
          <p>Excellente compréhension ! Tu peux maintenant choisir une modalité pratique.</p>
        </div>

        <div v-else class="failed-message">
          <p>Tu n'as pas atteint le seuil de {{ quizData.passingScorePercent }}%. Réessaye !</p>
        </div>

        <div class="results-details">
          <h4>Détails par question</h4>
          <ul class="results-list">
            <li
              v-for="(result, idx) in answeredQuestions"
              :key="idx"
              :class="{ 'result--correct': result.isCorrect, 'result--incorrect': !result.isCorrect }"
            >
              <span class="result-icon">{{ result.isCorrect ? '✓' : '✗' }}</span>
              <span class="result-text">Question {{ idx + 1 }}: {{ quizData.questions[idx].prompt }}</span>
            </li>
          </ul>
        </div>

        <button @click="retakeQuiz" class="btn btn--secondary btn--large">
          Reprendre le quiz
        </button>

        <div v-if="passed" class="next-step">
          <p>Prêt à passer à la suite ?</p>
          <slot name="next-action"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface QuizQuestion {
  id: string
  type: 'single' | 'multiple' | 'boolean'
  prompt: string
  choices: Array<{ id: string; label: string }>
  correctChoiceIds: string[]
  points: number
  feedback: { correct: string; incorrect: string }
}

interface QuizData {
  version: number
  title: string
  description: string
  shuffleQuestions: boolean
  passingScorePercent: number
  questions: QuizQuestion[]
}

interface Props {
  quizData: QuizData
  storageKey?: string
  /** Panneau à hauteur limitée (~demi-écran), score mis en avant */
  variant?: 'default' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  storageKey: 'quiz-progress',
  variant: 'default',
})

const quizStarted = ref(false)
const quizCompleted = ref(false)
const currentQuestionIndex = ref(0)
const selectedAnswer = ref<string>('')
const selectedAnswers = ref<string[]>([])
const showFeedback = ref(false)
const answers = ref<Array<string | string[]>>([])

// Load progress from localStorage
const loadProgress = () => {
  if (typeof window === 'undefined') return
  const stored = localStorage.getItem(props.storageKey)
  if (stored) {
    const data = JSON.parse(stored)
    quizStarted.value = data.started
    quizCompleted.value = data.completed
    currentQuestionIndex.value = data.currentIndex
    answers.value = data.answers || []
  }
}

// Save progress to localStorage
const saveProgress = () => {
  if (typeof window === 'undefined') return
  localStorage.setItem(
    props.storageKey,
    JSON.stringify({
      started: quizStarted.value,
      completed: quizCompleted.value,
      currentIndex: currentQuestionIndex.value,
      answers: answers.value
    })
  )
}

const currentQuestion = computed(() => props.quizData.questions[currentQuestionIndex.value])

const hasAnswered = computed(() => {
  if (currentQuestion.value.type === 'multiple') {
    return selectedAnswers.value.length > 0
  }
  return selectedAnswer.value !== ''
})

const isCorrect = computed(() => {
  const correct = currentQuestion.value.correctChoiceIds
  if (currentQuestion.value.type === 'multiple') {
    return (
      selectedAnswers.value.length === correct.length &&
      selectedAnswers.value.every(a => correct.includes(a))
    )
  }
  return correct.includes(selectedAnswer.value)
})

const progressPercent = computed(() => {
  return Math.round(((currentQuestionIndex.value + 1) / props.quizData.questions.length) * 100)
})

const score = computed(() => {
  return answers.value.filter((_, idx) => {
    const q = props.quizData.questions[idx]
    const answer = answers.value[idx]
    if (q.type === 'multiple') {
      return (
        Array.isArray(answer) &&
        answer.length === q.correctChoiceIds.length &&
        answer.every(a => q.correctChoiceIds.includes(a))
      )
    }
    return q.correctChoiceIds.includes(answer as string)
  }).length
})

const scorePercent = computed(() => {
  return Math.round((score.value / props.quizData.questions.length) * 100)
})

const passed = computed(() => {
  return scorePercent.value >= props.quizData.passingScorePercent
})

const answeredQuestions = computed(() => {
  return answers.value.map((answer, idx) => {
    const q = props.quizData.questions[idx]
    const isCorrect =
      q.type === 'multiple'
        ? Array.isArray(answer) &&
          answer.length === q.correctChoiceIds.length &&
          answer.every(a => q.correctChoiceIds.includes(a))
        : q.correctChoiceIds.includes(answer as string)
    return { isCorrect }
  })
})

const startQuiz = () => {
  quizStarted.value = true
  saveProgress()
}

const selectAnswer = () => {
  if (!hasAnswered.value) return

  // Store answer
  if (currentQuestion.value.type === 'multiple') {
    answers.value[currentQuestionIndex.value] = [...selectedAnswers.value]
  } else {
    answers.value[currentQuestionIndex.value] = selectedAnswer.value
  }

  showFeedback.value = true
  saveProgress()
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.quizData.questions.length - 1) {
    currentQuestionIndex.value++
    showFeedback.value = false
    loadAnswerState()
  } else {
    quizCompleted.value = true
  }
  saveProgress()
}

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    showFeedback.value = false
    loadAnswerState()
  }
  saveProgress()
}

const loadAnswerState = () => {
  const storedAnswer = answers.value[currentQuestionIndex.value]
  if (currentQuestion.value.type === 'multiple') {
    selectedAnswers.value = Array.isArray(storedAnswer) ? storedAnswer : []
  } else {
    selectedAnswer.value = (storedAnswer as string) || ''
  }
}

const retakeQuiz = () => {
  quizCompleted.value = false
  currentQuestionIndex.value = 0
  selectedAnswer.value = ''
  selectedAnswers.value = []
  showFeedback.value = false
  answers.value = []
  saveProgress()
}

// Watch pour charger les données
watch(() => props.quizData, () => {
  loadProgress()
})

// Initial load
loadProgress()
</script>

<style scoped lang="css">
.quiz-validator {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.quiz-validator--compact {
  max-height: min(50vh, 520px);
  overflow-y: auto;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.quiz-validator--compact .quiz-start {
  padding: 1rem 0;
}

.quiz-validator--compact .quiz-progress .question-card {
  margin: 1rem 0;
}

.quiz-validator--compact .quiz-results {
  padding: 0.5rem 0;
}

.quiz-validator--compact .score-value {
  font-size: 3rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.quiz-validator--compact .score-percent {
  font-size: 1.75rem;
  font-weight: 700;
  color: #4299e1;
}

.quiz-validator--compact .results-card h3 {
  font-size: 1.5rem;
}

.quiz-validator--compact .results-emoji {
  font-size: 2.5rem;
}

.quiz-validator--compact .results-details {
  max-height: 12rem;
  overflow-y: auto;
}

/* Start state */
.quiz-start {
  text-align: center;
  padding: 2rem 0;
}

.quiz-start__content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.75rem;
}

.quiz-start__content p {
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.quiz-requirement {
  background: #edf2f7;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin: 1.5rem 0;
}

/* Progress */
.progress-section {
  margin-bottom: 2rem;
}

.progress-bar {
  height: 8px;
  background: #edf2f7;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4299e1, #22c97f);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.9rem;
  color: #718096;
}

/* Question card */
.question-card {
  margin: 2rem 0;
}

.question-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1.5rem;
}

/* Choices */
.choices {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.choice-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: #f7fafc;
  border: 2px solid #edf2f7;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.choice-label:hover {
  background: #edf2f7;
  border-color: #4299e1;
}

.choice-input {
  margin-top: 0.25rem;
  cursor: pointer;
}

.choice-text {
  flex: 1;
  color: #2d3748;
  font-weight: 500;
}

/* Feedback */
.feedback {
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid;
}

.feedback--correct {
  background: #f0fff4;
  border-color: #22c97f;
  color: #22543d;
}

.feedback--incorrect {
  background: #fff5f5;
  border-color: #f56565;
  color: #742a2a;
}

.feedback p {
  margin: 0;
}

/* Navigation */
.quiz-navigation {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn--primary {
  background: #4299e1;
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background: #2c7dd8;
}

.btn--primary:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

.btn--secondary {
  background: #edf2f7;
  color: #2d3748;
}

.btn--secondary:hover:not(:disabled) {
  background: #e2e8f0;
}

.btn--secondary:disabled {
  background: #cbd5e0;
  color: #a0aec0;
  cursor: not-allowed;
}

.btn--large {
  padding: 1rem 2rem;
  font-size: 1.05rem;
}

/* Results */
.quiz-results {
  padding: 2rem 0;
}

.results-card {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background: #f7fafc;
}

.results-card--passed {
  background: #f0fff4;
  border: 2px solid #22c97f;
}

.results-card--failed {
  background: #fff5f5;
  border: 2px solid #f56565;
}

.results-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.results-card h3 {
  font-size: 2rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 1.5rem;
}

.score-display {
  margin: 2rem 0;
}

.score-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4299e1;
}

.score-percent {
  font-size: 1.5rem;
  color: #718096;
}

.passed-message,
.failed-message {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1.5rem 0;
  font-size: 1.05rem;
  color: #2d3748;
}

/* Results details */
.results-details {
  text-align: left;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.results-details h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

.results-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.results-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-left: 4px solid;
  border-radius: 4px;
}

.result--correct {
  background: #f0fff4;
  border-color: #22c97f;
  color: #22543d;
}

.result--incorrect {
  background: #fff5f5;
  border-color: #f56565;
  color: #742a2a;
}

.result-icon {
  font-weight: bold;
  font-size: 1.1rem;
}

.result-text {
  flex: 1;
}

/* Next step */
.next-step {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
}

.next-step p {
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .quiz-validator {
    padding: 1.5rem;
  }

  .quiz-navigation {
    flex-direction: column-reverse;
  }

  .btn {
    width: 100%;
  }

  .score-value {
    font-size: 2rem;
  }
}
</style>
