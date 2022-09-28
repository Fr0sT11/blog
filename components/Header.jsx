import React, { useState, useEffect} from 'react';

import Link from 'next/link';

import { getCategories } from '../services';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])
    return (
        <div className="container mx-auto px-10 mb-8 bg-gray-700 dark:bg-gray-900 sticky top-0 z-50">
            <div className="w-full inline-block border-white-400 border-opacity-20 py-6">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            FrOsTBytes
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    <span className="md:float-right justify-center align-middle bg-gray-600 dark:bg-gray-700 text-white ml-5 font-semibold cursor-pointer rounded-full p-1">
                        <ThemeToggle />
                    </span>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Header
