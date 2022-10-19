import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sliders from '../api/apiSlider';
import '../sassStyle/sliderStyle.scss'
export default function Slider() {
    const [slice, setSlice] = useState(0);
    const handleNext = function () {
        if (slice === sliders.length - 1) {
            setSlice(0)
        }
        else {
            setSlice(slice + 1)
        }
    }
    const handlePre = function () {
        if (slice === 0) {
            setSlice(sliders.length - 1)
        }
        else {
            setSlice(slice - 1)
        }
    }
    useEffect(() => {
            setTimeout(() => {
                handleNext()
            }, 3000);
    }, [slice])
    return (
        <div className="slider mx-auto flex items-center p-4 gap-2 relative flex-1">
            <ArrowBackIosNewOutlinedIcon className='cursor-pointer' onClick={handlePre}></ArrowBackIosNewOutlinedIcon>
            <div className='overflow-hidden shadow-lg rounded-lg flex-1 mobile:h-72'>
                {sliders.map(function (item, index) {
                    return slice === index ? (<div className="siice flex flex-1 rounded-lg overflow-hidden h-[500px] animationSlider mobile:h-full" key={index}>
                        <img src={item.src} alt="slice-img" className=' w-1/2 h-full mobile:object-cover' />
                        <div className={`bg-[${item.color}] text-left flex-1`}>
                            <h1 className={`text-7xl text-left ${item.textcolor} mb-10 -translate-x-14 translate-y-1/4 text-[50px] mt-10 mobile:text-base mobile:translate-x-0`}>{item.content}</h1>
                        </div>
                    </div>) : ('')
                })}
            </div>
            <Link className=' bg-yellow-400 p-5 rounded-lg hover:bg-blue-400 hover:text-red-50 active:bg-white my-5 absolute left-1/2 -translate-x-1/2' to='/category'>GET NOW</Link>
            <ArrowForwardIosOutlinedIcon className='cursor-pointer' onClick={handleNext}></ArrowForwardIosOutlinedIcon>
        </div>
    )
};
