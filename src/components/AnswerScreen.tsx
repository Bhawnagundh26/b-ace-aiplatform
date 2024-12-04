import { useEffect, useRef } from "react";

const AnswerScreen = ({ onComplete }: { onComplete: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  useEffect(() => {
    const startRecording = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current!.srcObject = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();
    };

    startRecording();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <video ref={videoRef} autoPlay muted className="mb-4 border rounded-lg"></video>
      <button
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={onComplete}
      >
        Complete
      </button>
    </div>
  );
};

export default AnswerScreen;
