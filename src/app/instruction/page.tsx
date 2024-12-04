// src/app/instruction/page.tsx
import Link from 'next/link';

const InstructionScreen = () => {
  return (
    <div className="max-w-md p-6 bg-white shadow-lg rounded-md text-center">
      <h1 className="text-2xl font-semibold mb-4">Interview Instructions</h1>
      <p>Please follow the instructions carefully to begin the interview.</p>
      <Link href="/check-permission">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Start Interview</button>
      </Link>
    </div>
  );
};

export default InstructionScreen;
