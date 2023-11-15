import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const breeds = [];

const SearchParams = () => {

    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");

    return (
        <div className="search-params">
            <form>
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
                    >
                        <option />
                        {ANIMALS.map((animal) => {
                            return <option key={animal}>{animal}</option>
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        disabled={breeds.length === 0}
                        value={breed}
                        onChange={e => {
                            setBreed(e.target.value);
                        }}
                    >
                        <option />
                        {breeds.map((breed) => {
                            return <option key={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;