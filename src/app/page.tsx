'use client';

import React, { useState, useRef, useEffect } from 'react';

const AIInterviewPlatform = () => {
  const [questions, setQuestions] = useState([
    { text: "Tell us about yourself.", hint: "Focus on your strengths and background." },
    { text: "What are your greatest achievements?", hint: "Highlight measurable accomplishments." },
    { text: "How do you handle conflict at work?", hint: "Show problem-solving skills and empathy." },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Timer for each question
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0); // Progress tracker
  const [transcription, setTranscription] = useState<string>(""); // Speech-to-text transcription
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks: Blob[] = [];

  useEffect(() => {
    if (isRecording && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [isRecording, timeLeft]);

  useEffect(() => {
    setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        setVideoUrl(URL.createObjectURL(blob));
        console.log("Video blob ready:", blob);
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);

      // Start transcription simulation (replace with real API integration)
      setTranscription("Listening...");
      setTimeout(() => setTranscription("This is a simulated transcription of your answer."), 5000);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsRecording(false);
  };

  const handleNextQuestion = () => {
    stopRecording();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30); // Reset timer
      startRecording();
    } else {
      alert("Interview completed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">AI Interview Platform</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-lg mb-6">
        <div className="h-2 bg-gray-300 rounded-md">
          <div
            className="h-2 bg-blue-500 rounded-md"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-lg">
        <p className="text-lg font-semibold mb-2">
          Question: {questions[currentQuestionIndex].text}
        </p>
        <p className="text-sm text-gray-600 italic">
          Hint: {questions[currentQuestionIndex].hint}
        </p>
      </div>

      {/* Timer */}
      <p className="text-sm text-gray-500 mb-4">Time Left: {timeLeft}s</p>

      {/* Video Section */}
      <div className="border p-4 rounded-md mb-4">
        <video ref={videoRef} className="w-full max-w-lg" />
      </div>

      {/* Controls */}
      <div className="flex space-x-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Stop Recording
          </button>
        )}
      </div>

      {/* Transcription */}
      {transcription && (
        <div className="mt-4 bg-gray-100 border p-4 rounded-md w-full max-w-lg">
          <h2 className="text-lg font-semibold mb-2">Transcription:</h2>
          <p className="text-gray-700">{transcription}</p>
        </div>
      )}

      {/* Video Playback */}
      {videoUrl && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Recorded Video:</h2>
          <video src={videoUrl} controls className="w-full max-w-lg mt-2" />
        </div>
      )}
    </div>
  );
};

export default AIInterviewPlatform;
