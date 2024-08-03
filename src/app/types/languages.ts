export type languageCategory = {
  guid: string,
  name: string,
  phrases: languagePhrase[],
}

type languagePhrase = {
  guid: string,
  phrase: string,
  translation: string,
  audioFileUrl: string,
}
