import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 939450,
    name: "Tango",
    animal: "bird",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Málaga",
    state: "Málaga",
  },
  () => {},
]);

export default AdoptedPetContext;
