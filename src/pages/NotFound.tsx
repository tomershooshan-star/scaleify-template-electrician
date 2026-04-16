import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" />
      <div className="flex min-h-screen flex-col items-center justify-center bg-brand-black px-4 text-center text-white">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow text-brand-black">
          <Zap className="h-8 w-8" />
        </div>
        <h1 className="font-display text-6xl font-black sm:text-8xl">404</h1>
        <p className="mt-4 max-w-md text-white/70">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </>
  );
}
