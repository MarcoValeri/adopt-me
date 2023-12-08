async function fetchSearch({quertKey}) {
    const [animal, location, breed] = quertKey[0];

    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    if (!res.ok) {
        throw new Error(`per search not okay ${animal}, ${location}, ${breed}`);
    }

    return res.json();
}

export default fetchSearch;