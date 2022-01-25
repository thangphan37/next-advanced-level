import Image from 'next/image'
import { myLoader } from './fill'

export default function ImagePriority() {
  return (
    <Image
      loader={myLoader}
      src={`breeds/australian-shepherd/pepper2.jpg`}
      layout="responsive"
      width={400}
      height={400}
      priority
    />
  )
}
