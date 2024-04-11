import calcPercent from '@/tools/calcPercent';

export default function RarityBar(props: { better: number, worse: number, same: number }) {

    let sum = props.better + props.same + props.worse;

    return (

        <div className='col-span-3 border-black border-2' style={
            {
                display: "flex",
            }
        }>

            <span className='bg-green-500' style={
                {
                    width: calcPercent(props.worse, sum) + "%"
                }
            }></span>

            <span className='bg-gray-400' style={
                {
                    width: calcPercent(props.same, sum) + "%"

                }
            }></span>

            <span className='bg-red-500' style={
                {
                    width: calcPercent(props.better, sum) + "%",
                    height: "30px"
                }
            }></span>
            
        </div>

    )
}