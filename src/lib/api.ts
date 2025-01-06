export type FetchDataResultType<T> = Promise<{
  data: T | null;
  error: string | null;
  ok: boolean;
}>;
export const fetchData = async <T>(path: string): FetchDataResultType<T> => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return { data, error: null, ok: true };
  } catch (err) {
    console.log("Faied to fetch data!", err);
    return {
      data: null,
      error: err instanceof Error ? err.message : "Unkown error",
      ok: false,
    };
  }
};
