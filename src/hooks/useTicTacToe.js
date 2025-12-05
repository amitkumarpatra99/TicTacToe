import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

const WIN_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diags
];

const checkWin = (board) => {
    for (let line of WIN_LINES) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], line };
        }
    }
    return null;
};

const minimax = (board, player, aiPlayer, humanPlayer) => {
    const empty = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);

    const win = checkWin(board);
    if (win && win.winner === aiPlayer) return { score: 10 };
    if (win && win.winner === humanPlayer) return { score: -10 };
    if (empty.length === 0) return { score: 0 };

    const moves = [];
    for (let i of empty) {
        let newBoard = [...board];
        newBoard[i] = player;
        let result = minimax(newBoard, player === aiPlayer ? humanPlayer : aiPlayer, aiPlayer, humanPlayer);
        moves.push({ index: i, score: result.score });
    }

    return player === aiPlayer
        ? moves.reduce((best, m) => m.score > best.score ? m : best)
        : moves.reduce((best, m) => m.score < best.score ? m : best);
};

const useTicTacToe = (sound) => {
    const [cells, setCells] = useState(Array(9).fill(''));
    const [human, setHuman] = useState('X');
    const [ai, setAi] = useState('O');
    const [turn, setTurn] = useState('X');
    const [history, setHistory] = useState([]); // Move history for undo
    const [matchHistory, setMatchHistory] = useState([]); // Game result history
    const [scores, setScores] = useState({ h: 0, a: 0, t: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [winData, setWinData] = useState(null);
    const [difficulty, setDifficulty] = useState(2); // 1: Novice, 2: Veteran, 3: God
    const [aiSpeed, setAiSpeed] = useState(400);
    const [status, setStatus] = useState('Start Game');
    const [statusColor, setStatusColor] = useState('var(--primary)');

    const resetGame = useCallback(() => {
        setCells(Array(9).fill(''));
        setGameOver(false);
        setWinData(null);
        setHistory([]);
        setTurn('X');

        if (human === 'X') {
            setStatus("Your Turn");
            setStatusColor("var(--primary)");
        } else {
            setStatus("AI Starting...");
            setStatusColor("var(--text-muted)");
        }
    }, [human]);

    const addToMatchHistory = useCallback((result, message) => {
        setMatchHistory(prev => [{
            id: Date.now(),
            result,
            message
        }, ...prev]);
    }, []);

    const handleWin = useCallback((winner, line) => {
        setGameOver(true);
        setWinData({ winner, line });

        if (winner === human) {
            setStatus("VICTORY!");
            setStatusColor("var(--success)");
            setScores(s => ({ ...s, h: s.h + 1 }));
            sound.playWin();
            toast.success('Victory! Well played!', { icon: '🏆', style: { borderRadius: '10px', background: '#333', color: '#fff' } });
            addToMatchHistory('win', 'You Won!');
        } else {
            setStatus("DEFEAT");
            setStatusColor("var(--secondary)");
            setScores(s => ({ ...s, a: s.a + 1 }));
            sound.playLose();
            toast.error('Defeat! Better luck next time.', { icon: '💀', style: { borderRadius: '10px', background: '#333', color: '#fff' } });
            addToMatchHistory('loss', 'AI Won');
        }
    }, [human, sound, addToMatchHistory]);

    const handleDraw = useCallback(() => {
        setGameOver(true);
        setStatus("DRAW");
        setStatusColor("#fff");
        setScores(s => ({ ...s, t: s.t + 1 }));
        sound.playDraw();
        toast('It\'s a Draw!', { icon: '🤝', style: { borderRadius: '10px', background: '#333', color: '#fff' } });
        addToMatchHistory('draw', 'Draw');
    }, [sound, addToMatchHistory]);

    const makeMove = useCallback((idx, player) => {
        setCells(prev => {
            const newCells = [...prev];
            newCells[idx] = player;
            return newCells;
        });
        setHistory(prev => [...prev, { idx, player }]);

        if (player === 'X') sound.playMoveX();
        else sound.playMoveO();
    }, [sound]);

    // Effect to check win after cells change
    useEffect(() => {
        if (history.length === 0) return; // Initial render or reset

        const lastMove = history[history.length - 1];
        const win = checkWin(cells);

        if (win) {
            if (!gameOver) handleWin(win.winner, win.line);
        } else if (cells.every(c => c !== '')) {
            if (!gameOver) handleDraw();
        } else {
            // Next turn
            if (!gameOver) {
                const nextTurn = lastMove.player === 'X' ? 'O' : 'X';
                setTurn(nextTurn);
                if (nextTurn === human) {
                    setStatus("Your Turn");
                    setStatusColor("var(--primary)");
                } else {
                    setStatus("AI Calculating...");
                    setStatusColor("var(--text-muted)");
                }
            }
        }
    }, [cells, history, gameOver, human, handleWin, handleDraw]);

    // AI Turn Effect
    useEffect(() => {
        if (!gameOver && turn === ai && cells.some(c => c === '')) {
            const timer = setTimeout(() => {
                let moveIdx;
                if (difficulty === 1) {
                    const empty = cells.map((v, i) => v === '' ? i : null).filter(v => v !== null);
                    moveIdx = empty[Math.floor(Math.random() * empty.length)];
                } else if (difficulty === 2) {
                    if (Math.random() > 0.3) {
                        const result = minimax(cells, ai, ai, human);
                        moveIdx = result.index;
                    } else {
                        const empty = cells.map((v, i) => v === '' ? i : null).filter(v => v !== null);
                        moveIdx = empty[Math.floor(Math.random() * empty.length)];
                    }
                } else {
                    const result = minimax(cells, ai, ai, human);
                    moveIdx = result.index;
                }

                if (moveIdx !== undefined) {
                    makeMove(moveIdx, ai);
                }
            }, aiSpeed);
            return () => clearTimeout(timer);
        }
    }, [turn, ai, cells, gameOver, difficulty, aiSpeed, human, makeMove]);

    const handleHumanMove = (idx) => {
        if (gameOver || cells[idx] !== '' || turn !== human) return;
        makeMove(idx, human);
    };

    const undo = () => {
        if (history.length < 2 || gameOver) return;
        sound.playClick();

        // Revert last 2 moves
        const newHistory = history.slice(0, history.length - 2);
        const newCells = Array(9).fill('');
        newHistory.forEach(m => newCells[m.idx] = m.player);

        setHistory(newHistory);
        setCells(newCells);
        setTurn(human); // Should be human's turn again
        setStatus("Your Turn");
        setStatusColor("var(--primary)");
    };

    const setSide = (side) => {
        sound.playClick();
        setHuman(side);
        setAi(side === 'X' ? 'O' : 'X');
        setCells(Array(9).fill(''));
        setGameOver(false);
        setWinData(null);
        setHistory([]);
        setTurn('X');

        if (side === 'X') {
            setStatus("Your Turn");
            setStatusColor("var(--primary)");
        } else {
            setStatus("AI Starting...");
            setStatusColor("var(--text-muted)");
        }
    };

    return {
        cells,
        human,
        ai,
        turn,
        scores,
        gameOver,
        winData,
        status,
        statusColor,
        difficulty,
        setDifficulty,
        aiSpeed,
        setAiSpeed,
        handleHumanMove,
        resetGame,
        undo,
        setSide,
        setScores,
        matchHistory // Export this
    };
};

export default useTicTacToe;
