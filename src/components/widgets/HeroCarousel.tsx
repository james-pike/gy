import { component$ } from '@builder.io/qwik'
import { Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel noControls>
        <Carousel.Slide>
        <img class="rounded-lg" src="/images/hero3.webp" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img class="rounded-lg" src="/images/hero.jpg" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img class="rounded-lg" src="/images/hero2.jpg" width="790" height="790" alt="..." />
      </Carousel.Slide>
    
    
    </Carousel>
  )
})