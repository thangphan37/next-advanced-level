import * as React from 'react'
import type {Reader, Book} from '@prisma/client'
import {useRouter} from 'next/router'

type ReaderType = Reader & {
  books: Array<Book>
}

export default function ReaderAndBook() {
  const [reader, setReader] = React.useState<ReaderType | null>(null)
  const router = useRouter()

  async function fetchReaders() {
    const response = await fetch(
      `/api/lesson-6/reader.answer?id=${router.query.readerIdAnswer}`,
    )
    const responseJson = await response.json()
    setReader(responseJson)
  }

  React.useEffect(() => {
    if (!router.query.readerIdAnswer) return
    fetchReaders()
  }, [router.query.readerIdAnswer])

  async function removeBookInReader(bo: Book) {
    if(!reader) return
    await fetch(`/api/lesson-6/delete.book.answer?id=${reader.id}&bookId=${bo.id}`)
    await fetchReaders()
  }

  return (
    <div className="max-w-sm mx-auto mt-2">
      <div>
        <dl>
          <dt className="text-lg font-bold uppercase text-cyan-700">
            {reader?.name}
          </dt>
          <dd className="py-2 ">
            <ul>
              {reader?.books?.map(bo => (
                <li
                  key={`reader-${reader.id}-book-${bo.id}`}
                  className="mt-2 bg-gray-200"
                >
                  <dt className="px-2 font-bold text-orange-500">{bo.title}</dt>
                  <dd className="px-2 py-2 bg-gray-200">
                    <dl className="flex flex-wrap">
                      <dt className="w-1/2 font-semibold">Author:</dt>
                      <dd className="w-1/2">{bo.author}</dd>
                      <dt className="w-1/2 font-semibold">Type:</dt>
                      <dd className="w-1/2">{bo.type}</dd>
                      <dt className="w-1/2 font-semibold">Shorten:</dt>
                      <dd className="w-1/2">{bo.shortContent}</dd>
                    </dl>
                    <button
                      onClick={() => removeBookInReader(bo)}
                      className="my-2"
                    >
                      <span className="px-2 py-1 text-white bg-red-600 rounded-sm">
                        Delete
                      </span>
                    </button>
                  </dd>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  )
}
