import React, { useState, useRef } from 'react';
import { assets } from '../assets/assets';

const VoiceInput = ({ setInput, onSent }) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null); // persist recognition instance

  const initRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      onSent(transcript);
    };

    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = function () {
      console.log("Speech recognition ended.");
      setIsListening(false);
    };

    return recognition;
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser. Try Chrome.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current = initRecognition();
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <img
      src={isListening ? "/voice.png" : assets.mic_icon}
      onClick={handleVoiceInput}
      alt="Mic"
      style={{ cursor: 'pointer', width: '24px' }}
    />
  );
};

export default VoiceInput;
