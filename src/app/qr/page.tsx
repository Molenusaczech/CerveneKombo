import QRFixer from "@/components/qrFix";
import Image from "next/image";

export default function QR() {
    return (
        <div>
            <h1>Oprava QR odkazů</h1>
            <br></br>

            <QRFixer />

            <h1>Jak získat odkaz z scratchwars.zone</h1>

            1. Klikni pravým tlačítkem na nefunkční obrázek
            <Image src="/qr/zone1.png" alt="zone1" width={500} height={500} />
            2. Klikni na "Kopírovat adresu obrázku"
            <Image src="/qr/zone2.png" alt="zone2" width={500} height={500} />
        
            <h1>Jak získat odkaz z SWO</h1>
            1. Klikni pravým tlačítkem na nefunkční obrázek
            <Image src="/qr/swo1.png" alt="swo1" width={500} height={500} />
            2. Klikni na "Kopírovat adresu obrázku"
            <Image src="/qr/swo2.png" alt="swo2" width={500} height={500} />
        </div>
    )
}