import * as React from 'react'
import type {Character, Profile} from '@prisma/client'
import Link from 'next/link'

type CharacterInfo = Character & {
  profile: Profile
}

export default function List() {
  const [characters, setCharacters] =
    React.useState<Array<CharacterInfo> | null>(null)

  async function fetchCharacters() {
    const response = await fetch('/api/lesson-6/list')
    const responseJson = await response.json()

    setCharacters(responseJson)
  }

  React.useEffect(() => {
    fetchCharacters()
  }, [])

  async function removeCharacter(character: CharacterInfo) {
    await fetch(`/api/lesson-6/delete?id=${character.id}`, {
      method: 'DELETE',
    })
    await fetchCharacters()
  }

  return (
    <div className="max-w-sm mx-auto mt-2">
      <h1 className="text-lg font-bold uppercase text-cyan-700">characters</h1>
      <ul>
        {characters?.map((character: CharacterInfo) => (
          <li
            className="flex max-w-full py-2 mx-auto cursor-pointer"
            key={character.id}
          >
            <details className="w-10/12 p-6 rounded-lg bg-cyan-500 open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg">
              <summary className="font-bold leading-6 select-none text-slate-900">
                {character.name}
              </summary>

              <div>
                <dl className="flex flex-wrap">
                  <dt className="w-1/2 font-medium">Height:</dt>
                  <dd className="w-1/2">
                    <p>{character.profile.height}</p>
                  </dd>
                  <dt className="w-1/2 font-medium">Weight:</dt>
                  <dd className="w-1/2">
                    <p>{character.profile.weight}</p>
                  </dd>
                  <dt className="w-1/2 font-medium">Hair color:</dt>
                  <dd className="w-1/2">
                    <p>{character.profile.hairColor}</p>
                  </dd>
                  <dt className="w-1/2 font-medium">Skill:</dt>
                  <dd className="w-1/2">
                    <p>{character.profile.skill}</p>
                  </dd>
                </dl>
              </div>
            </details>

            <div className="flex flex-col justify-center pl-2 space-y-2 text-left">
              <Link href={`/lesson-6/${character.id}`}>
                <button className="w-20 py-1 bg-blue-400 rounded-sm">
                  Edit
                </button>
              </Link>
              <button
                className="w-20 py-1 bg-red-400 rounded-sm"
                onClick={() => removeCharacter(character)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
