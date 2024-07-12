import Card from '@/components/card';
import { heroCid } from '@/data/heroTypeData';
import { weaponCid } from '@/data/weaponTypeData';
import { getCardStats } from '@/tools/getCardStats';
import { ImageResponse } from 'next/og'
import Image, { ImageProps } from 'next/image'


/*export const config = {
  runtime: 'edge',
};*/

export async function GET(request: Request, { params }: { params: { cid: string, name: string } }) {

  console.log(params.cid)

  const cid: heroCid | weaponCid = decodeURIComponent(params.cid) as heroCid | weaponCid

  const data = await getCardStats(cid, decodeURIComponent(params.name))
  const rootUrl = request.url.split('/image/')[0]

  const fontRq = await fetch(rootUrl+'/ScratchChizz.otf');

  const font = await fontRq.arrayBuffer();


  if (data == null) return (
    <div>
      Error - statistiky nenalezeny... Zkontroluj prosím správnost jména a druhu
      <br></br>Pokud jsi si jistý, že jsi zadával správně, kontaktuj prosím administrátora
    </div>)

  if (data.card.t == "hero") {
    return new ImageResponse(
      (
        <Card data={data.card} useImg={true} imgRootLink={rootUrl} />
      ),
      {
        width: 640,
        height: 894,
        fonts: [
          {
            name: 'ScratchChizz',
            data: font
          }
        ]
      },
    );
  } else {
    return new ImageResponse(
      (
        <Card data={data.card} useImg={true} imgRootLink={rootUrl} />
      ),
      {
        width: 640,
        height: 735,
        fonts: [
          {
            name: 'ScratchChizz',
            data: font
          }
        ]
      },
    );
  }
  // return new Response(imageG);
}