import { useCallback, useRef, useEffect } from 'react';

const useSound = (enabled = true) => {
    const ctxRef = useRef(null);

    const initAudio = useCallback(() => {
        if (!ctxRef.current) {
            ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (ctxRef.current.state === 'suspended') {
            ctxRef.current.resume();
        }
    }, []);

    const playTone = useCallback((freq, type, duration, vol = 0.1) => {
        if (!enabled || !ctxRef.current) return;

        const osc = ctxRef.current.createOscillator();
        const gain = ctxRef.current.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctxRef.current.currentTime);

        gain.gain.setValueAtTime(vol, ctxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctxRef.current.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctxRef.current.destination);

        osc.start();
        osc.stop(ctxRef.current.currentTime + duration);
    }, [enabled]);

    const playMoveX = useCallback(() => {
        initAudio();
        playTone(600, 'sine', 0.1, 0.1);
        setTimeout(() => playTone(1200, 'triangle', 0.1, 0.05), 50);
    }, [playTone, initAudio]);

    const playMoveO = useCallback(() => {
        initAudio();
        playTone(200, 'sine', 0.15, 0.15);
        setTimeout(() => playTone(400, 'sine', 0.1, 0.1), 50);
    }, [playTone, initAudio]);

    const playWin = useCallback(() => {
        initAudio();
        const now = ctxRef.current.currentTime;
        [440, 554, 659, 880].forEach((freq, i) => {
            setTimeout(() => playTone(freq, 'sine', 0.3, 0.1), i * 100);
        });
    }, [playTone, initAudio]);

    const playLose = useCallback(() => {
        initAudio();
        [400, 300, 200].forEach((freq, i) => {
            setTimeout(() => playTone(freq, 'sawtooth', 0.3, 0.05), i * 150);
        });
    }, [playTone, initAudio]);

    const playDraw = useCallback(() => {
        initAudio();
        playTone(300, 'square', 0.2, 0.05);
    }, [playTone, initAudio]);

    const playClick = useCallback(() => {
        initAudio();
        playTone(800, 'sine', 0.05, 0.02);
    }, [playTone, initAudio]);

    return {
        playMoveX,
        playMoveO,
        playWin,
        playLose,
        playDraw,
        playClick,
        initAudio
    };
};

export default useSound;
