'use client';

import { useState, useEffect } from 'react';

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
  reset?: () => void;
};

export function ErrorBoundary({ fallback, reset }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError && reset) {
      const timeout = setTimeout(() => {
        setHasError(false);
        reset();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [hasError, reset]);

  if (!hasError) return null;

  return fallback;
}
