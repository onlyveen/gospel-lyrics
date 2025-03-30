import Sanscript from "@indic-transliteration/sanscript";

export function transliterateSearch(query) {
  // Transliterate from Itrans (English) to Telugu script
  return Sanscript.t(query, "itrans", "telugu");
}
