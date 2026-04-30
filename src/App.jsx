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
    movingPlayerIndex,
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
    closeFeedback
  } = useGameLogic()

  const [rulesOpen, setRulesOpen] = useState(false)
  const [rulesDocument, setRulesDocument] = useState(null)
  const [rulesLoading, setRulesLoading] = useState(false)
  const [rulesError, setRulesError] = useState(null)
  const [rulesRequireAck, setRulesRequireAck] = useState(false)

  const openRules = async (requireAck = false) => {
    setRulesRequireAck(requireAck)
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
    if (rulesRequireAck) {
      setRulesRequireAck(false)
    }
  }

  const handleStartGame = async (playersData) => {
    startGame(playersData)
    await openRules(true)
  }

  useEffect(()=>{
    const onResize = () => {}
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

  return (
    <main className="w-full max-w-4xl mx-auto bg-white rounded-none sm:rounded-2xl shadow-xl overflow-hidden border-0 sm:border-4 border-blue-200 min-h-screen flex flex-col">
      {showSetup && (
        <SetupScreen onStart={handleStartGame} onShowRules={openRules} />
      )}

      {!showSetup && !rulesRequireAck && (
        <>
          <Header onShowRules={openRules} />

          <section className="p-2 sm:p-6 border-b border-blue-100 bg-blue-50/50">
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
            currentIndex={currentIndex}
            movingPlayerIndex={movingPlayerIndex}
          />

          <QuizModal
            open={quizOpen}
            question={quizQuestion}
            onAnswer={handleQuizAnswer}
            isBonus={isBonus}
            playerName={quizPlayerName}
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
        requireAck={rulesRequireAck}
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
