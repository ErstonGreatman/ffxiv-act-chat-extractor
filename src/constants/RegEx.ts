export const RegEx = {
  name: /(?<name>[A-Z][a-z']+\s[A-Z][a-z']+)(?<realm>[A-Z][a-z]+)?/,
  message: /00\|\d+-\d+-\d+T(?<time>\d+:\d+:\d+).+?\|(?<code>.+)\|.*?(?<sender>[A-Z][A-z']+? [A-z']+).*?\|(?<message>.+)\|[^]+/,
}
