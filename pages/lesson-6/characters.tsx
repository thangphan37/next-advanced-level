import * as React from 'react'
import type {Character, Profile} from '@prisma/client'

type CharacterInfo = Character & {
	profile: Profile
}

export default function List() {
  const [characters, setCharacters] = React.useState<Array<CharacterInfo> | null>(
    null,
  )

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
			method: 'DELETE'
		})
		// await fetchCharacters()
	}

  return (
    <div className="max-w-sm mx-auto mt-2">
      <h1 className="font-bold text-lg uppercase text-green-700">characters</h1>
      <ul>
        {characters?.map(
          (
            character: CharacterInfo,
          ) => (
            <li
              className="max-w-full mx-auto py-2 cursor-pointer flex"
              key={character.id}
            >
              <details className="open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg bg-green-500 w-10/12">
                <summary className="leading-6 text-slate-900 font-bold select-none">
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
							
							<div className="flex flex-col text-left justify-center space-y-2 pl-2">
								<button className="bg-blue-400 rounded-sm w-20">Edit</button>
								<button className="bg-red-400 rounded-sm w-20" onClick={() => removeCharacter(character)}>Delete</button>
							</div>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
