import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import DifficultySelect from './DifficultySelect';
import styles from '../styles/styles';
import MyButton from './MyButton';

const MemoryGame = () => {
	const [sequence, setSequence] = useState([]);
	const [displayedSequence, setDisplayedSequence] = useState([]);
	const [userInput, setUserInput] = useState('');
	const [difficultyLevel, setDifficultyLevel] = useState(null);
	const [score, setScore] = useState(0);
	const [showStart, setShowStart] = useState(true);
	const [showInput, setShowInput] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [showRestart, setShowRestart] = useState(false);
	const [showDifficulty, setShowDifficulty] = useState(true);


	const startGame = () => {
		if (!difficultyLevel) {
			Alert.alert('Por favor selecione um nível de dificuldade antes de iniciar o jogo.');
			return;
		}

		setShowStart(false);
		generateSequence();
	};

	const generateSequence = () => {
		let newSequence = [...sequence];

		if (sequence.length == 0) {
			for (let i = 0; i < 3; i++) {
				newSequence.push(Math.floor(Math.random() * 10));
			}
		} else {
			newSequence.push(Math.floor(Math.random() * 10));
		}

		setSequence(newSequence);
		setDisplayedSequence(newSequence);
		setShowInput(false);
		setShowConfirm(false);
		setShowRestart(false);
		setShowDifficulty(false);

		setTimeout(() => {
			setDisplayedSequence([]);
			setShowInput(true);
			setShowConfirm(true);
			setShowRestart(true);
		}, calculateDisplayTime());
	};

	const calculateDisplayTime = () => {
		switch (difficultyLevel) {
			case 'easy':
				return 4000;
			case 'medium':
				return 3000;
			case 'hard':
				return 2000;
		}
	};

	const verifySequence = () => {
		if (userInput === sequence.join('')) {
			setScore(score + 1);
			generateSequence();
		} else {
			Alert.alert(
				'Você errou a sequência',
				`Sua pontuação final foi: ${score}\nA sequencia correta era: ${sequence}`,
				[
					{ text: 'Jogar Novamente', onPress: () => restartGame() },
				],
				{ cancelable: false }
			);
		}
		setUserInput('');
	};

	const restartGame = () => {
		setSequence([]);
		setScore(0);
		setShowStart(true);
		setDifficultyLevel(null);
		setShowInput(false);
		setShowConfirm(false);
		setShowRestart(false);
		setShowDifficulty(true);
	};


	return (
		<View style={styles.container}>
			<Text style={styles.title}>Jogo da Memória</Text>
			<Text style={styles.score}>Pontuação: {score}</Text>

			{showDifficulty &&
				<DifficultySelect
					difficultyLevel={difficultyLevel}
					setDifficultyLevel={setDifficultyLevel}
				/>
			}

			{showStart &&
				<MyButton onPress={startGame} title="Iniciar Jogo" />
			}

			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				{displayedSequence.map((number, index) => (
					<Text key={index} style={styles.numbers}> {number} </Text>
				))
				}
			</View>

			{showInput && (
				<TextInput
					style={styles.input}
					value={userInput}
					onChangeText={setUserInput}
					placeholder="Digite a sequência"
					keyboardType='numeric'
				/>
			)}

			{showConfirm && (
				<MyButton onPress={verifySequence} title="Confirmar" />
			)}

			{showRestart && (
				<MyButton onPress={restartGame} title="Reiniciar Jogo" />
			)}

		</View>
	);
};

export default MemoryGame;