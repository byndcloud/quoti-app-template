/**
 *
 * @param {String} string
 * @returns
 */
export const toEmbedded = (string) => {
  return string
    .replace("watch?v=", "embed/")
    .replace("youtu.be", "youtube.com/embed")
    .concat("&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1");
};
