export const RegEx = {
  name: /(?<name>[A-Z][a-z']+\s[A-Z][a-z']+)(?<realm>[A-Z][a-z]+)?/,
  message:     /00\|\d+-\d+-\d+T(?<time>\d+:\d+:\d+).+?\|(?<code>.+)\|(?<sender>[^|]+)\|(?<message>.+)\|[^]+/,
  shoutSender: /^(?<job>[A-Z]{3})\s+(?<name>[A-Z][a-z']+\s[A-Z][a-z']+)(?<realm>[A-Z][a-z]+)$|^(?<job2>[A-Z]{3})\s+(?<name2>[A-Z][a-z']+\s[A-Z][a-z']+)$|^(?<nameOnly>[A-Z][a-z']+\s[A-Z][a-z']+)(?<realmOnly>[A-Z][a-z]+)$|^(?<nameOnlyNoRealm>[A-Z][a-z']+\s[A-Z][a-z']+)$/,
};
