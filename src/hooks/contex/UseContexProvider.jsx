// src/context/BlogContext.js
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from "react";

import { Translation, Books, fetchVerses } from "../../api/bible";

const BlogContext = createContext(null);

export function BlogProvider({ children }) {
  const [translations, setTranslations] = useState([]);
  const [books, setBooks] = useState([]);
  const [verses, setVerses] = useState([]);

  const [selectedTranslation, setSelectedTranslation] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  const [loadingTranslations, setLoadingTranslations] = useState(false);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [loadingVerses, setLoadingVerses] = useState(false);

  const [translationError, setTranslationError] = useState(null);
  const [booksError, setBooksError] = useState(null);
  const [versesError, setVersesError] = useState(null);

  const fetchTranslations = async () => {
    try {
      setLoadingTranslations(true);
      setTranslationError(null);
      const data = await Translation();
      console.log("Fetched Translations:", data);
      setTranslations(Array.isArray(data) ? data : []);
    } catch (err) {
      setTranslationError(err?.message || "Failed to load translations.");
      setTranslations([]);
    } finally {
      setLoadingTranslations(false);
    }
  };

  const fetchBooksData = async () => {
    if (!selectedTranslation) {
      setBooks([]);
      return;
    }
    try {
      setLoadingBooks(true);
      setBooksError(null);
      const data = await Books(selectedTranslation);
      console.log("Fetched Books:", data);
      setBooks(Array.isArray(data) ? data : []);
    } catch (err) {
      setBooksError(err?.message || "Failed to load books.");
      setBooks([]);
    } finally {
      setLoadingBooks(false);
    }
  };

  const fetchVersesData = async () => {
    if (!selectedTranslation || !selectedBook || !selectedChapter) {
      setVerses([]);
      return;
    }
    try {
      setLoadingVerses(true);
      setVersesError(null);
      const data = await fetchVerses(
        selectedBook,
        selectedChapter,
        selectedTranslation
      );
      console.log("Fetched Verses:", data);
      setVerses(Array.isArray(data) ? data : []);
    } catch (err) {
      setVersesError(err?.message || "Failed to load verses.");
      setVerses([]);
    } finally {
      setLoadingVerses(false);
    }
  };

  useEffect(() => {
    fetchTranslations();
  }, []);

  useEffect(() => {
    fetchBooksData();
  }, [selectedTranslation]);

  useEffect(() => {
    fetchVersesData();
  }, [selectedTranslation, selectedBook, selectedChapter]);

  const contextValue = useMemo(
    () => ({
      translations,
      books,
      verses,
      selectedTranslation,
      selectedBook,
      selectedChapter,
      setSelectedTranslation,
      setSelectedBook,
      setSelectedChapter,
      fetchVerses: fetchVersesData,
      loadingTranslations,
      loadingBooks,
      loadingVerses,
      translationError,
      booksError,
      versesError,
    }),
    [
      translations,
      books,
      verses,
      selectedTranslation,
      selectedBook,
      selectedChapter,
      loadingTranslations,
      loadingBooks,
      loadingVerses,
      translationError,
      booksError,
      versesError,
    ]
  );

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
}

export function UseBlogs() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
}
