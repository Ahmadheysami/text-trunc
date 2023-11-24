module.exports = (text, length = 10, options = {}) => {
  const op = {
    start: options.start || 0,
    dots: options.dots || "...",
  };

  // Check if text is undefined
  if (!text || text === undefined) {
    throw Error("text cannot be empty [txt-truncate]");
  }

  const splitText = text.split(" "),
    sliceText = splitText.slice(op.start, length),
    finalText = sliceText;
  if (op.dots) {
    return `${finalText.join(" ")} ${op.dots}`;
  } else {
    return `${finalText.join(" ")}`;
  }
};
