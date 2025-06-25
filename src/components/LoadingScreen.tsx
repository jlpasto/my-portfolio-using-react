import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/utils";

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function LoadingScreen({
  isLoading,
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete?.();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isLoading, onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-secondary flex items-center justify-center transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="text-center space-y-8">
        {/* Logo/Brand */}
        <div className="text-4xl font-bold text-primary animate-pulse">
          Portfolio
        </div>

        {/* Loading Animation */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-background rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Loading... {progress}%
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
