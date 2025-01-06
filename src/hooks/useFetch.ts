"use client";
import { useState, useEffect } from "react";

export type UseFetchResultType<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  ok: boolean;
};

export const useFetch = <T>(path: string): UseFetchResultType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ok, setOk] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url.toString());

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setOk(true);
      } catch (err) {
        console.error(err);
        setError(err instanceof SyntaxError ? err.message : "Unknown error");
        setOk(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return { data, error, isLoading, ok };
};
