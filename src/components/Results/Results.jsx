import Pet from "../Pet/Pet";

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map(pet => {
                    return (
                        <Pet
                            key={pet.id}
                            id={pet.id}
                            animal={pet.animal}
                            name={pet.name}
                            breed={pet.breed}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Results;