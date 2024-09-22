import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
    return (
        <Html>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className=' rounded-full'><div className="flex">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full absolute
                            border-4 border-solid border-white"></div>

                        <div className="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-gray-200 border-t-transparent"></div>
                    </div>
                </div>
                </div>
            </div>
        </Html>
    );
};

export default Loader;