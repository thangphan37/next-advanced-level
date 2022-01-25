import Image from 'next/image'
import { myLoader } from './fill'

export default function ImageResponsive() {
  return (
    <Image
      loader={myLoader}
      src={`breeds/australian-shepherd/pepper2.jpg`}
      layout="responsive"
      width={400}
      height={400}
    />
  )
}
