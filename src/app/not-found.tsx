import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20 pt-32">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center">
          <div className="mb-6 h-24 w-24 rounded-full bg-[var(--brand)]/10 flex items-center justify-center">
            <span className="text-[var(--brand)] text-2xl font-bold">404</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--brand)] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[var(--brand)]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Return Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 