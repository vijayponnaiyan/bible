import React from "react";
import Selected from "../../pages/Selector/SeleCted";
import { UseBlogs } from "../../hooks/contex/UseContexProvider";
import { useEffect } from "react";

export default function SelectInfo() {
  const {
    translations,
    books,
    selectedTranslation,
    selectedBook,
    selectedChapter,
    setSelectedTranslation,
    setSelectedBook,
    setSelectedChapter,
    fetchVerses,
  } = UseBlogs();

  useEffect(() => {
    console.log("Translations:", translations);
    console.log("Books:", books);
  }, [translations, books]);

  const translationOptions = translations.map((t) => ({
    value: t.identifier,
    label: `${t.name} (${t.language})`,
  }));
  console.log(translationOptions);
  const bookOptions = books.map((b) => ({
    value: b.name,
    label: b.name,
  }));
  console.log(bookOptions);

  const chapterOptions =
    selectedBook && selectedBook !== ""
      ? Array.from({ length: 50 }, (_, i) => ({
          value: (i + 1).toString(),
          label: `Chapter ${i + 1}`,
        }))
      : [];
  console.log(chapterOptions);

  return (
    <Selected
      selectedTranslation={selectedTranslation}
      selectedBook={selectedBook}
      selectedChapter={selectedChapter}
      setSelectedTranslation={setSelectedTranslation}
      setSelectedBook={setSelectedBook}
      setSelectedChapter={setSelectedChapter}
      translationOptions={[
        { value: "", label: "Select Translation" },
        ...translationOptions,
      ]}
      bookOptions={[{ value: "", label: "Select Book" }, ...bookOptions]}
      chapterOptions={[
        { value: "", label: "Select Chapter" },
        ...chapterOptions,
      ]}
      onLoadVerses={fetchVerses}
    />
  );
}
