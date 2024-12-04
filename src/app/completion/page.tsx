// src/app/completion/page.tsx
import Link from 'next/link';

const CompletionScreen = () => {
  return (
    <div className="max-w-md p-6 bg-white shadow-lg rounded-md text-center">
      <h1 className="text-2xl font-semibold mb-4">Test Completed</h1>
      <p>Thank you for your time. Your interview is now complete!</p>
      <Link href="/">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Finish</button>
      </Link>
    </div>
  );
};

export default CompletionScreen;
