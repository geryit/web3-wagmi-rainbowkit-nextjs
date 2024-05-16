export const middleEllipsis = (str: string, len: number) => {
  if (!str) {
    return "";
  }

  return `${str.substring(0, len)}...${str.substring(str.length - len)}`;
};
