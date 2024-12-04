// src/pages/check-permission.tsx

import { useState, useEffect } from 'react';

const CheckPermissionPage = () => {
  const [hasPermission, setHasPermission] = useState(false);
  // Removed the unused 'error' variable

  useEffect(() => {
    // Permission check logic goes here
    setHasPermission(true); // Example logic
  }, []);

  return (
    <div>
      <h1>Check Permission</h1>
      {hasPermission ? <p>Permission granted!</p> : <p>Permission denied.</p>}
    </div>
  );
};

export default CheckPermissionPage;
