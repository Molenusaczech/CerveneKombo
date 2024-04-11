export default function effectValue(value: number, isInverted: boolean) {

    let sign = "+";

    if (isInverted == true) sign = "";

    if (value < 0) sign = "-"

    return sign + Math.abs(value).toString();

}