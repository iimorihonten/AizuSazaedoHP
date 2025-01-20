import type { UseEmblaCarouselType } from "embla-carousel-react"
import type { EmblaCarouselType, EmblaPluginType, EmblaOptionsType } from "embla-carousel"

export type CarouselApi = NonNullable<UseEmblaCarouselType[1]>
export type CarouselOptions = EmblaOptionsType
export type CarouselPlugin = EmblaPluginType

export type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin[]
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

export type CarouselContextProps = {
  carouselRef: UseEmblaCarouselType[0]
  api: UseEmblaCarouselType[1]
  opts?: CarouselOptions
  orientation?: "horizontal" | "vertical"
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}