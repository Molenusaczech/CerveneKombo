import { weaponCardTypes } from "@/types/weaponType";
import weaponData from "./raw/weaponData.json";

const weaponTypeData: weaponCardTypes = weaponData as weaponCardTypes;

export type weaponCid = keyof typeof weaponTypeData
export { weaponTypeData }