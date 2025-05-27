import React from "react";
import ViewButton from "../../components/Button/ViewButton";
import InputBox from "../../components/From/InputBox";

export default function SeleCted({
  selectedTranslation,
  selectedBook,
  selectedChapter,
  setSelectedTranslation,
  setSelectedBook,
  setSelectedChapter,
  translationOptions,
  bookOptions,
  chapterOptions,
  onLoadVerses,
}) {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        <InputBox
          id="translation"
          label="Filter by Translation"
          value={selectedTranslation}
          onChange={(e) => setSelectedTranslation(e.target.value)}
          options={translationOptions}
        />
        <InputBox
          id="book"
          label="Filter by Book"
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value)}
          options={bookOptions}
        />
        <InputBox
          id="chapter"
          label="Filter by Chapter"
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          options={chapterOptions}
        />
      </div>
      <ViewButton
        className="mt-4"
        disabled={!selectedTranslation || !selectedBook || !selectedChapter}
        onClick={onLoadVerses}
      >
        Load
      </ViewButton>
    </div>
  );
}
