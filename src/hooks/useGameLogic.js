import { useState } from 'react'
import { quizData, bonusQuizData, specialTiles, bonusTiles, pollutedTiles, victoryWaterTiles, totalTiles } from '../gameData'

export function useGameLogic() {

  const [showSetup, setShowSetup] = useState(true)
  const [players, setPlayers] = useState([])
  const [positions, setPositions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [diceValue, setDiceValue] = useState('?')
  const [diceDisabled, setDiceDisabled] = useState(false)
  const [lastRoll, setLastRoll] = useState(null)
  const [quizOpen, setQuizOpen] = useState(false)
  const [quizQuestion, setQuizQuestion] = useState(null)
  const [isBonus, setIsBonus] = useState(false)
  const [quizPlayerName, setQuizPlayerName] = useState('')
  const [victoryOpen, setVictoryOpen] = useState(false)
  const [victoryPlayer, setVictoryPlayer] = useState('')

  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [feedbackTitle, setFeedbackTitle] = useState('')
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [feedbackVariant, setFeedbackVariant] = useState('info')

  const startGame = (ply) => {
    setPlayers(ply)
    setPositions(new Array(ply.length).fill(0))
    setCurrentIndex(0)
    setShowSetup(false)
  }

  const updatePosition = (i, pos) => {
    setPositions(prev => {
      const copy = [...prev]
      copy[i] = pos
      return copy
    })
  }

  const rollDice = () => {
    setDiceDisabled(true)
    setDiceValue('🎲')
    
    setTimeout(() => {
      let roll = Math.floor(Math.random() * 6) + 1
      // Evita sair "1" duas vezes seguidas para não parecer viciado
      if (roll === 1 && lastRoll === 1) {
        roll = Math.floor(Math.random() * 5) + 2 // força entre 2 e 6
      }
      setLastRoll(roll)
      setDiceValue(roll)
      setTimeout(() => movePlayer(roll), 500)
    }, 800)
  }

  const movePlayer = (steps) => {
    const idx = currentIndex
    let newPos = (positions[idx] || 0) + steps

    if (newPos >= totalTiles) newPos = totalTiles
    updatePosition(idx, newPos)

    setTimeout(() => {
      if (newPos === totalTiles) {
        setVictoryPlayer(players[idx].name)
        setVictoryOpen(true)
      } else if (pollutedTiles.includes(newPos)) {
        setFeedbackTitle('Água poluída')
        setFeedbackMessage('Você perde a próxima vez!')
        setFeedbackVariant('error')
        setFeedbackOpen(true)
        endTurnAfterSpecial()
      } else if (victoryWaterTiles.includes(newPos)) {
        setFeedbackTitle('Água da Vitória')
        setFeedbackMessage('Você joga de novo!')
        setFeedbackVariant('success')
        setFeedbackOpen(true)
        setDiceDisabled(false)
      } else if (bonusTiles.includes(newPos)) {
        setIsBonus(true)
        openQuiz()
      } else if (specialTiles.includes(newPos)) {
        setIsBonus(false)
        openQuiz()
      } else {
        endTurn()
      }
    }, 600)
  }

  const openQuiz = () => {
    const idx = currentIndex
    const data = isBonus ? bonusQuizData : quizData
    const q = data[Math.floor(Math.random() * data.length)]
    setQuizPlayerName(players[idx]?.name || '')
    setQuizQuestion(q)
    setQuizOpen(true)
  }

  const handleQuizAnswer = (choice) => {
    setQuizOpen(false)
    const idx = currentIndex
    const q = quizQuestion
    const bonus = isBonus ? 2 : 1
    let newPos = positions[idx] || 0

    if (choice === q.correct) {
      setFeedbackTitle('Resposta correta!')
      setFeedbackMessage(isBonus ? 'Carta BONUS - Avance 2 casas!' : 'Avance 1 casa.')
      setFeedbackVariant('success')
      setFeedbackOpen(true)
      newPos = Math.min(totalTiles, newPos + bonus)
      updatePosition(idx, newPos)
    } else {
      setFeedbackTitle('Resposta errada')
      setFeedbackMessage(isBonus ? 'Carta BONUS - Volte 2 casas.' : 'Volte 1 casa.')
      setFeedbackVariant('error')
      setFeedbackOpen(true)
      newPos = Math.max(0, newPos - bonus)
      updatePosition(idx, newPos)
    }
    setTimeout(() => {
      if (newPos === totalTiles) {
        setVictoryPlayer(players[idx].name)
        setVictoryOpen(true)
      } else {
        endTurn()
      }
    }, 600)
  }

  const endTurn = () => {
    setCurrentIndex(ci => (ci + 1) % players.length)
    setDiceDisabled(false)
    setDiceValue('?')
  }

  const endTurnAfterSpecial = () => {
    setCurrentIndex(ci => (ci + 1) % players.length)
    setDiceDisabled(false)
    setDiceValue('?')
  }

  const handleVictory = () => {
    setVictoryOpen(false)
    location.reload()
  }

  const closeFeedback = () => {
    setFeedbackOpen(false)
  }

  return {

    showSetup,
    players,
    positions,
    currentIndex,
    diceValue,
    diceDisabled,
    quizOpen,
    quizQuestion,
    isBonus,
    quizPlayerName,
    victoryOpen,
    victoryPlayer,
    feedbackOpen,
    feedbackTitle,
    feedbackMessage,
    feedbackVariant,

    startGame,
    rollDice,
    handleQuizAnswer,
    handleVictory,
    closeFeedback,
  }
}
