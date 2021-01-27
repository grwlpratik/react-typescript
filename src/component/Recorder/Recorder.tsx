import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start, stop } from '../../redux/recorder';
import { RootState } from '../../redux/store';

const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

const Recorder = () => {
    const dispatch = useDispatch();
    const dateStart = useSelector((state: RootState)=>{
        return state.recorder.dateStart
    });
    const started = dateStart !== '';
    let interval = useRef<number>(0);
    const [, setCount] = useState<number>(0);

    const handleClick = () => {
        if(started){
            window.clearInterval(interval.current);
            dispatch(stop());
        }
        else{
            dispatch(start());
            interval.current = window.setInterval(()=>{setCount(count => count + 1)}, 1000);
        }
    };

    useEffect(()=>{
        return () => {
            window.clearInterval(interval.current);
        }
    },[]);

    let seconds = started ? Math.floor((Date.now() - new Date(dateStart).getTime())/1000) : 0;
    const hours = seconds ? Math.floor(seconds/60/60) : 0;
    seconds -= hours * 60 * 60;
    const minutes = seconds ? Math.floor(seconds/60) : 0;
    seconds -= minutes * 60

    return (
        <div style={{flexDirection:'row', display:'flex', justifyContent: 'center', marginTop: '20px'}}>
            <button onClick={handleClick} style={{width: '50px', height: '50px', borderRadius: '50px', cursor: 'pointer'}}>
                <span></span>
            </button>
            <div style={{paddingLeft: '20px', alignSelf:'center'}}>{addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}</div>
        </div>
    )
}

export default Recorder;