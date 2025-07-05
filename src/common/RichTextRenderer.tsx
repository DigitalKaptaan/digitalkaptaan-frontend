const RichTextRenderer = ({
  chunks,
  highlightClass = "",
}: {
  chunks: { text?: string; type: string; href?: string }[];
  highlightClass?: string;
}) => {
  return chunks.map((chunk, idx) => {
    switch (chunk.type) {
      case "br":
        return <br key={idx} />;
      case "highlight":
        return (
          <span key={idx} className={highlightClass}>
            {chunk.text}
          </span>
        );
      default:
        return <span key={idx}>{chunk.text}</span>;
    }
  });
};

export default RichTextRenderer;
