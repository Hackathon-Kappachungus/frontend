export type language = {
  guid: string,
  category: {
    name: string,
    phrases: languagePhrase[],
  }[],
}

type languagePhrase = {
  guid: string,
  phrase: string,
  translation: string,
  audioFileUrl: string,
}
