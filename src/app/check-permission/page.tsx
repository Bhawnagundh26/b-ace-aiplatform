// src/app/check-permission/page.tsx

'use client';  // Mark this file as a client-side component

import { useState, useEffect } from 'react';
import Link from 'next/link';

const PermissionScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    setHasPermission(true); // Example logic to set permission
  }, []);

  return (
    <div>
      {hasPermission ? (
        <p>You have permission&apos;s access.</p> // Correct apostrophe usage
      ) : (
        <p>You don&apos;t have permission.</p> // Correct apostrophe usage
      )}
      <Link href="/next-page">Go to Next Page</Link>
    </div>
  );
};

export default PermissionScreen;
