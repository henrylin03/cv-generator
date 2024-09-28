export default function toCamelCase(str) {
  const lowerCaseFirstLetter = (word, index) =>
    index === 0 ? word.toLowerCase() : word.toUpperCase();

  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, lowerCaseFirstLetter)
    .replace(/\s+/g, "");
}
