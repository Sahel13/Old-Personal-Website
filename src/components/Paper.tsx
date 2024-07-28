import * as React from "react";
import { PaperProps } from "../data/preprints";

const Paper = (paper: PaperProps) => {
  // Check if the paper has been published.
  const isPublished = paper.venue !== undefined;

  return (
    <li className="text-lg mt-2">
      {paper.authors}
      {" (" + paper.year + ")"}.{" "}
      <span className="font-bold">{paper.title}</span>.{" "}
      {isPublished && paper.venue + ". "}
      {/* Link to the published version. */}
      {paper.link !== undefined && (
        <a
          href={paper.link}
          target="_blank"
          rel="noreferrer"
          className="underline text-sky-700"
        >
          Link.
        </a>
      )}
      {/* Hack to get the spacing right. */}
      {paper.link !== undefined && " "}
      {/* Link to the Arxiv version. */}
      {paper.arxiv !== undefined && (
        <a
          href={paper.arxiv}
          target="_blank"
          rel="noreferrer"
          className="underline text-sky-700"
        >
          Arxiv.
        </a>
      )}
      {/* Hack to get the spacing right. */}
      {paper.arxiv !== undefined && " "}
      {/* Link to the code. */}
      {paper.code !== undefined && (
        <a
          href={paper.code}
          target="_blank"
          rel="noreferrer"
          className="underline text-sky-700"
        >
          Code.
        </a>
      )}
    </li>
  );
};

export default Paper;
