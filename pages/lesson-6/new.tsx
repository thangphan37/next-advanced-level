import Router from 'next/router'

export default function NewRoute() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const {
      characterName,
      createdBy,
      appearance,
      skill,
      height,
      weight,
      family,
      hairColor,
    } = event.currentTarget
    const submittedData = {
      name: characterName.value,
      createdBy: createdBy.value,
      appearance: appearance.value,
      skill: skill.value,
      height: height.value,
      weight: weight.value,
      family: family.value,
      hairColor: hairColor.value,
    }
    await fetch('/api/lesson-6/create', {
      method: 'POST',
      body: JSON.stringify(submittedData),
    })

    Router.push(`/lesson-6/characters`)
  }
  return (
    <div className="max-w-sm mx-auto mt-2">
      <h1 className="text-lg font-bold text-green-700 uppercase">
        Add a character
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="characterName"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="createdBy">Created by:</label>
          <input
            type="text"
            name="createdBy"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="appearance">Appearance:</label>
          <input
            type="text"
            name="appearance"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="skill">Skill:</label>
          <input
            type="text"
            name="skill"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            name="height"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            name="weight"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="family">Family:</label>
          <input
            type="text"
            name="family"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label htmlFor="hairColor">Hair color:</label>
          <input
            type="text"
            name="hairColor"
            className="px-2 bg-gray-100 rounded-sm outline-none h-11"
          />
        </div>

        <div className="flex flex-col mt-2">
          <button type="submit" className="leading-10 text-white bg-green-400">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
