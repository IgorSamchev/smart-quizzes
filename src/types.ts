export interface Score {
  round1: number
  round2: number
  round3: number
  round4: number
  round5: number
  round6: number
}

export interface Group {
  name: string
  score: Score
}
