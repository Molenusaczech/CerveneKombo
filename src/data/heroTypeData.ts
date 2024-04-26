import { heroTypes } from "../types/heroType";
import heroData from "./raw/heroData.json";

const heroTypeData = heroData;

export type heroCid = keyof typeof heroTypeData;
export { heroTypeData }