import data from './data.json';
import {Link} from 'react-scroll/modules';
export default function Home(){

    return (
        <div className="h-screen font-Gotham" id='home'data-aos="fade">
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[60px]'>Home Page</h1>
                <button className='text-center py-2 px-10 tracking-widest uppercase bg-gray-500 text-white font-bold rounded-full text-[30px] mt-10'>MINT NOW</button>
                <p className='text-white font-medium text-[20px] mt-10'>
                    Consectetur irure amet pariatur exercitation culpa ut.
                    <br/>
                    Lorem Ipsum consectetur irure amet pariatur exercitation culpa ut.
                </p>
            </div>

            <div className='w-full h-[60px] bg-gray-900 absolute bottom-0'></div>
        </div>
    )
}
