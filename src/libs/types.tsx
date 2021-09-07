export interface Question {
  question: string
  solution: string
  a: string
  b: string
  c: string
}

export interface Answer {
  question: string
  response: string
  isCorrect: Boolean
  solution: string
}