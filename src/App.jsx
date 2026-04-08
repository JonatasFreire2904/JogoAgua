import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SetupScreen from './components/SetupScreen'
import Controls from './components/Controls'
import Scoreboard from './components/Scoreboard'
import Board from './components/Board'
import QuizModal from './components/QuizModal'
import VictoryModal from './components/VictoryModal'
import RulesModal from './components/RulesModal'
import FeedbackModal from './components/FeedbackModal'

import { useGameLogic } from './hooks/useGameLogic'
import { viewGameRulesUseCase } from './compositionRoot'

export default function App(){

  const {

    showSetup,
    players,
    positions,
    currentIndex,
    diceValue,
    diceDisabled,
    quizOpen,
    quizQuestion,
    isBonus,
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
    closeFeedback
  } = useGameLogic()

  const [rulesOpen, setRulesOpen] = useState(false)
  const [rulesDocument, setRulesDocument] = useState(null)
  const [rulesLoading, setRulesLoading] = useState(false)
  const [rulesError, setRulesError] = useState(null)

  const openRules = async () => {
    setRulesError(null)
    setRulesLoading(true)
    setRulesOpen(true)
    try {
      const document = await viewGameRulesUseCase.execute()
      setRulesDocument(document)
    } catch (error) {
      console.error(error)
      setRulesError('Não foi possível carregar o arquivo de regras.')
    } finally {
      setRulesLoading(false)
    }
  }

  const closeRules = () => {
    setRulesOpen(false)
  }

  useEffect(()=>{
    const onResize = () => {}
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

  return (
    <main className="w-full max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border-2 sm:border-4 border-blue-200">

      {showSetup && (
        <SetupScreen onStart={startGame} onShowRules={openRules} />
      )}

      {!showSetup && (
        <>
          <Header onShowRules={openRules} />

          <section className="p-6 border-b border-blue-100 bg-blue-50/50">
            <Controls
              onRoll={rollDice}
              disabled={diceDisabled}
              diceValue={diceValue}
              currentPlayer={players[currentIndex]}
            />

            <Scoreboard
              players={players}
              currentIndex={currentIndex}
              positions={positions}
            />
          </section>

          <Board
            players={players}
            positions={positions}
          />

          <QuizModal
            open={quizOpen}
            question={quizQuestion}
            onAnswer={handleQuizAnswer}
            isBonus={isBonus}
          />

          <VictoryModal
            open={victoryOpen}
            playerName={victoryPlayer}
            onClose={handleVictory}
          />
        </>
      )}

      <RulesModal
        open={rulesOpen}
        document={rulesDocument}
        loading={rulesLoading}
        error={rulesError}
        onClose={closeRules}
      />

      <FeedbackModal
        open={feedbackOpen}
        title={feedbackTitle}
        message={feedbackMessage}
        variant={feedbackVariant}
        onClose={closeFeedback}
      />
 
    </main>
  )
}