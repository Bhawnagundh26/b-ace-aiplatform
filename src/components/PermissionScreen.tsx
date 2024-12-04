import { useState } from "react";

const PermissionScreen = ({ onNext }: { onNext: () => void }) => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  const checkPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      await navigator.mediaDevices.getDisplayMedia();
      setPermissionGranted(true);
    } catch (error) {
      console.error("Permission denied:", error);
      alert("Please enable audio/video permissions to proceed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Permission Check</h1>
      <p className="mb-6 text-center text-gray-700">
        Please allow access to your camera and microphone.
      </p>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
        onClick={checkPermissions}
      >
        Grant Permissions
      </button>
      {permissionGranted && (
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={onNext}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default PermissionScreen;
