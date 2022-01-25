import Image from 'next/image'
import {myLoader} from './fill'

export default function ImageFixed() {
  return (
    <Image
      loader={myLoader}
      src={`breeds/australian-shepherd/pepper2.jpg`}
      layout="fixed"
      width={400}
      height={400}
    />
  )
}
