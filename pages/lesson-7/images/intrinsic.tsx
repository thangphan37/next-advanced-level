import Image from 'next/image'
import {myLoader} from './fill'

export default function ImageIntrinsic() {
  return (
    <Image
      loader={myLoader}
      src={`breeds/australian-shepherd/pepper2.jpg`}
      layout="intrinsic"
      width={400}
      height={400}
    />
  )
}
