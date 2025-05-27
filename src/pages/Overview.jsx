import React from "react";
import Viewpoint from "../pages/viewpoint/viewpoint";
import SelectInfo from "../pages/Selector/SelectInfo";
import { UseBlogs } from "../hooks/contex/UseContexProvider"; // ✅ Corrected
import Loader from "../components/ui/Loader";
import ErrorState from "../components/ui/ErrorState";

export default function Overview() {
  const {
    loadingTranslations,
    loadingBooks,
    loadingVerses,
    translationError,
    booksError,
    versesError,
    refreshTranslations,
    fetchBooks,
    fetchVerses,
  } = UseBlogs(); // ✅ Now this works properly

  const loading = loadingTranslations || loadingBooks || loadingVerses;
  const error = translationError || booksError || versesError;

  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorState
        message={error}
        onRetry={() => {
          if (translationError) refreshTranslations();
          if (booksError) fetchBooks();
          if (versesError) fetchVerses();
        }}
      />
    );

  return (
    <div>
      <Viewpoint />
      <div className="bg-gray-100 flex flex-wrap flex-1 justify-center gap-3">
        <SelectInfo />
      </div>
    </div>
  );
}
