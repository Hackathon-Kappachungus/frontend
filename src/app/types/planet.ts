export type planet = {
  guid: string,
  name: string,
  description: string,
  imageUrl: string,
  warnings: string[],
  detailImageUrl: string,
  temperature: string,
  current_weather: string,
  current_image: string,
  big_warning: string,
  small_warning: string,
  weather: {
    temperature: number,
    image: string,
    day: string,
  }[],
  three60image: string
}
