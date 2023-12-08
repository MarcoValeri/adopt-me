import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import useBreedList from "../../hooks/useBreedList";

import fetchSearch from "../../fetchSearch";
import Results from "../Results/Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: ";",
        breed: ""
    })
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const results = useQueries(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };
                    setRequestParams(obj);
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        name="location"
                        id="location" 
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
                        name="breed"
                    >
                        <option />
                        {breeds.map((breed) => {
                            return <option key={breed} value={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams;