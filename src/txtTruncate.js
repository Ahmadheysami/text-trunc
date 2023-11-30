module.exports = (text, length = 10, options = {}) => {
  const op = {
    start: options.start || 0,
    dots: options.dots || "...",
    seperator: options.seperator || " ",
  };

  // Check if text is undefined
  if (!text || text === undefined) {
    throw Error("text cannot be empty [txt-truncate]");
  }

  const splitText = text.split(" "),
    sliceText = splitText.slice(op.start, length),
    finalText = sliceText;
  if (op.dots) {
    return `${finalText.join(op.seperator)} ${op.dots}`;
  } else {
    return `${finalText.join(op.seperator)}`;
  }
};
