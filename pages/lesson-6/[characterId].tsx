import * as React from 'react'
import {useRouter} from 'next/router'

export default function Character() {
  const [character, setCharacter] = React.useState({
    name: '',
    createdBy: '',
    appearance: '',
    skill: '',
    characterId: '',
    height: '',
    weight: '',
    family: '',
    hairColor: '',
  })

  const router = useRouter()

  React.useEffect(() => {
    if (!router.query.characterId) return
    async function fetchCharacter() {
      const response = await fetch(
        `/api/lesson-6/character?id=${router.query.characterId}`,
      )
      const responseJson = await response.json()

      setCharacter(responseJson)
    }

    fetchCharacter()
  }, [router.query.characterId])

  // change character
  function handleChangeCharacter(event: React.ChangeEvent<HTMLInputElement>) {
    setCharacter({
      ...character,
      [event.target.name]: event.target.value,
    })
  }

  // update character
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await fetch(`/api/lesson-6/update`, {
      method: 'PUT',
      body: JSON.stringify({
        id: router.query.characterId,
        ...character,
      }),
    })
  }

  return (
    <div className="max-w-sm mx-auto mt-2">
      <h1 className="text-lg font-bold text-blue-700 uppercase">
        Update character
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.name}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="createdBy">Created by:</label>
          <input
            type="text"
            name="createdBy"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.createdBy}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="appearance">Appearance:</label>
          <input
            type="text"
            name="appearance"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.appearance}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="skill">Skill:</label>
          <input
            type="text"
            name="skill"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.skill}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            name="height"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.height}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            name="weight"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.weight}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="family">Family:</label>
          <input
            type="text"
            name="family"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.family}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="hairColor">Hair color:</label>
          <input
            type="text"
            name="hairColor"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
            value={character.hairColor}
            onChange={handleChangeCharacter}
          />
        </div>

        <div className="flex flex-col mt-2">
          <button type="submit" className="leading-10 text-white bg-blue-500">
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

;