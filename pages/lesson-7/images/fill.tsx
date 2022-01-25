import Image from 'next/image'

export const myLoader = ({
  src,
  width,
  quality,
}: {
  src: string
  width: string | number
  quality?: number
}) => {
  return `https://images.dog.ceo/${src}?w=${width}&q=${quality || 75}`
}

export default function ImageFill() {
  return (
    <div className="w-[400px] h-[400px]">
      <Image
        loader={myLoader}
        src={`breeds/australian-shepherd/pepper2.jpg`}
        layout="fill"
      />
    </div>
  )
}
