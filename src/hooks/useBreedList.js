import { useQueries } from "@tanstack/react-query";
import fetchBreedList from "../fetchBreedList";

export default function useBreedList(animal) {
    const results = useQueries(["breeds", animal], fetchBreedList);
    return [results?.data?.breeds ?? [], results.status];
}