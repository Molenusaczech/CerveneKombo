import { weaponCardTypes } from "@/types/weaponType";
import weaponData from "./raw/weaponData.json";

const weaponTypeData = weaponData;

export type weaponCid = keyof typeof weaponTypeData
export { weaponTypeData }