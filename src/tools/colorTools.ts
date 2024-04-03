function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function colorMutation(hex: string, mutation: number) {
    let rgb = hexToRgb(hex);
    if (rgb == null) return hex;
    let r = rgb.r + mutation;
    let g = rgb.g + mutation;
    let b = rgb.b + mutation;
    return rgbToHex(r, g, b);
}

export { rgbToHex, hexToRgb, colorMutation };