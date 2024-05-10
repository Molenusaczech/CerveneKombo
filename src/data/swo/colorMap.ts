import { swoColor } from "@/types/replay/color"
import { effectColor } from "@/types/effects"

const colorMap: Record<swoColor, effectColor> = {
    "RED": "stop",
    "ORANGE": "opt",
    "GREEN": "go",
}

export default colorMap