import MultiProgress from 'react-multi-progress'

import calcPercent from '@/tools/calcPercent';
import RarityBar from './rarityBar';
import DeltaText from './delta';

export default function CardStats(props: {
    better: number,
    worse: number,
    same: number,
    delta: number,
}) {

    const sum = props.better + props.same + props.worse;

    return (
        <>
            <DeltaText delta={props.delta} isBest={props.better == 0} isWorst={props.worse == 0} />
            <div className='grid grid-cols-3 gap-1 align-middle text-center'>
                <div className='col-span-3'>Porovnání s ostatními kartami stejného druhu podle průměru</div>

                <RarityBar better={props.better} worse={props.worse} same={props.same} />


                <div className='grid grid-cols-1'>
                    <div className='bg-green-500 text-center p-1 rounded-t-md'>Horších karet</div>
                    <div className='bg-green-400 text-center p-1 rounded-b-md'>{props.worse} ({calcPercent(props.worse, sum)}%)</div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='bg-gray-400 text-center p-1 rounded-t-md'>Stejných karet:</div>
                    <div className='bg-gray-300 text-center p-1 rounded-b-md'>{props.same} ({calcPercent(props.same, sum)}%)</div>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='bg-red-500 text-center p-1 rounded-t-md'>Lepších karet:</div>
                    <div className='bg-red-400 text-center p-1 rounded-b-md'>{props.better} ({calcPercent(props.better, sum)}%)</div>
                </div>
            </div>
        </>
    )
}