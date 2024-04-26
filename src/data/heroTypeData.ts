import { heroTypes } from "../types/heroType";
import heroData from "./raw/heroData.json";

const heroTypeData: heroTypes = heroData as heroTypes;

export type heroCid = keyof typeof heroTypeData;
export { heroTypeData }