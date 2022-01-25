import Image from 'next/image'
import { myLoader } from './fill'

export default function ImagePlaceholder() {
  return (
    <Image
      loader={myLoader}
      src={`breeds/australian-shepherd/pepper2.jpg`}
      layout="responsive"
      width={400}
      height={400}
      placeholder="blur"
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsK+uuBwAE2QH4+xRAvAAAAABJRU5ErkJggg=='
    />
  )
}
