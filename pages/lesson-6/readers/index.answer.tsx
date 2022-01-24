import * as React from 'react'
import type {Reader} from '@prisma/client'
import Link from 'next/link'

export default function Readers() {
  const [readers, setReaders] = React.useState<Array<Reader> | null>(null)

  async function fetchReaders() {
    const response = await fetch('/api/lesson-6/readers.answer')
    const responseJson = await response.json()
    setReaders(responseJson)
  }

  React.useEffect(() => {
    fetchReaders()
  }, [])

  async function removeReader(re: Reader) {
    await fetch(`/api/lesson-6/delete.reader.answer?id=${re.id}`)
    await fetchReaders()
  }

  async function seedReaders() {
    await fetch('/api/lesson-6/seed.answer')
    await fetchReaders()
  }

  return (
    <div className="max-w-sm mx-auto mt-2">
      <button onClick={seedReaders} className="cursor-pointer">
        Seed readers
      </button>
      <ul>
        {readers?.map((re: Reader, _idx: number) => (
          <li key={`readers-${re.id}`}>
            <dl>
              <Link href={`/lesson-6/readers/${re.id}`}>
                <dt className="text-lg font-bold uppercase cursor-pointer text-cyan-700">
                  {re.name}
                </dt>
              </Link>
              <dd className="px-2 py-2 bg-gray-200">
                <dl className="flex flex-wrap">
                  <dt className="w-1/2 font-semibold">Age:</dt>
                  <dd className="w-1/2">{re.age}</dd>
                  <dt className="w-1/2 font-semibold">Address:</dt>
                  <dd className="w-1/2">{re.address}</dd>
                  <dt className="w-1/2 font-semibold">Job:</dt>
                  <dd className="w-1/2">{re.job}</dd>
                  <dt className="w-1/2 font-semibold">Hobbies:</dt>
                  <dd>{re.hobbies}</dd>
                </dl>
              </dd>
            </dl>

            <button onClick={() => removeReader(re)} className="my-2">
              <span className="px-2 py-1 text-white bg-red-600 rounded-sm">
                Delete
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
