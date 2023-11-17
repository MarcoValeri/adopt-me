import { useState, useEffect } from "react";
import useBreedList from "../../hooks/useBreedList";

import Pet from "../Pet/Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {

    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, [])

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        onChange={e => setLocation(e.target.value)}
                        id="location" 
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={e => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => {
                            return <option key={animal} value={animal}>{animal}</option>
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        disabled={!breeds.length}
                        value={breed}
                        onChange={e => {
                            return setBreed(e.target.value);
                        }}
                        onBlur={e => {
                            return setBreed(e.target.value);
                        }}
                    >
                        <option />
                        {breeds.map((breed) => {
                            return <option key={breed} value={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => (
                    <Pet
                        key={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                    />
                ))
            }
        </div>
    )
}

export default SearchParams;