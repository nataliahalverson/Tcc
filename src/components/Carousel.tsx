'use client'

import { useState, useEffect } from 'react'
import styles from './Carousel.module.css'

type CarouselProps = {
  images: Array<{
    src: string
    alt: string
  }>
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  if (!images || images.length === 0) {
    return <div className={styles.empty}>Nenhuma imagem disponível</div>
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.container}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <button className={styles.prev} onClick={handlePrev} aria-label="Slide anterior">
        &#10094;
      </button>
      <button className={styles.next} onClick={handleNext} aria-label="Próximo slide">
        &#10095;
      </button>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === current ? styles.active : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
