'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center">
          <div className="mb-6 h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Something Went Wrong</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <button
              onClick={() => reset()}
              className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--brand)] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[var(--brand)]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 