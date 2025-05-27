// src/api/bible.js
import baseAPI from "./baseAPI";

export const Translation = async () => {
  try {
    const response = await baseAPI.get("/data");
    console.log("Translations response:", response);
    return response;
  } catch (error) {
    throw new Error("Failed to fetch translations: " + error.message);
  }
};

export const Books = async (selectedTranslation) => {
  try {
    const response = await baseAPI.get(`/data/${selectedTranslation}`);
    console.log("Books response:", response);
    return response;
  } catch (error) {
    throw new Error(
      `Failed to fetch books for ${selectedTranslation}: ${error.message}`
    );
  }
};

export const fetchVerses = async (
  selectedBook,
  selectedChapter,
  selectedTranslation
) => {
  if (!selectedBook || !selectedChapter || !selectedTranslation) {
    throw new Error("Missing required parameters");
  }

  try {
    const response = await baseAPI.get(
      `/data/${selectedTranslation}/${selectedBook}/${selectedChapter}`
    );
    console.log("Verses response:", response);
    return response;
  } catch (error) {
    console.error(
      `API Error for ${selectedBook}${selectedChapter} (${selectedTranslation}):`,
      error
    );
    throw new Error(
      `Failed to fetch ${selectedBook}${selectedChapter} in ${selectedTranslation}: ${error.message}`
    );
  }
};
