export const fetchData = async (path: string): Promise<unknown> => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL);

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw new Error(`Internal server error`);
  }
};
