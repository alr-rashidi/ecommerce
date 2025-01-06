"use client";
import Button from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center p-5 text-center text-red-600 bg-red-300">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <Button variant="destructive" size="sm" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
