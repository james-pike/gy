import { component$ } from '@builder.io/qwik'
import { Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel noControls>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" width="790" height="790" alt="..." />
      </Carousel.Slide>
    </Carousel>
  )
})