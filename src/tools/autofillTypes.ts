import { heroTypeData } from '@/data/heroTypeData';
import { weaponTypeData } from '@/data/weaponTypeData';

export default function autofillTypes() {
    let heroData = [];

    for (const [key, value] of Object.entries(heroTypeData)) {
        heroData.push({
            label: value.cname.CS,
            value: key,
        });
    }

    heroData.sort((a, b) => {
        if (a.label == undefined || b.label == undefined) {
            return 0;
        }
        return a.label.localeCompare(b.label);
    });

    let weaponData = [];

    for (const [key, value] of Object.entries(weaponTypeData)) {
        weaponData.push({
            label: value.cname.CS,
            value: key,
        });
    }

    weaponData.sort((a, b) => {
        if (a.label == undefined || b.label == undefined) {
            return 0;
        }
        return a.label.localeCompare(b.label);
    });

    const cardTypeData = [...heroData, ...weaponData];

    return cardTypeData;
}