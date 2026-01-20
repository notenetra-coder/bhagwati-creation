import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images (using placeholders from existing assets)
import imgCotton from '../assets/product1.png';
import imgMuslin from '../assets/product2.jpg';
import imgVelvet from '../assets/product3.jpg';
import imgSilk from '../assets/product4.png';
import imgOrganza from '../assets/product5.png';

const categories = [
    { id: 1, name: 'Cotton Suits', image: imgCotton, link: '/category/cotton-suits' },
    { id: 2, name: 'Muslin Suits', image: imgMuslin, link: '/category/muslin-suits' },
    { id: 3, name: 'Velvet Collection', image: imgVelvet, link: '/category/velvet-collection' },
    { id: 4, name: 'Silk Collection', image: imgSilk, link: '/category/silk-collection' },
    { id: 5, name: 'Organza Suits', image: imgOrganza, link: '/category/organza-suits' },
];

const ShopByCategories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex justify-center w-full mb-4">
                        <p className="text-rose-500 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
                            Browse by style & need
                        </p>
                    </div>

                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">
                            Shop By Categories
                        </h2>
                        <p className="text-gray-500 text-lg font-light">
                            Easily find what you're looking for – all neatly sorted by category.
                        </p>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {categories.map((category) => (
                        <Link
                            to={category.link}
                            key={category.id}
                            className="group flex flex-col items-center cursor-pointer"
                        >
                            {/* Circular Image Container */}
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-transparent group-hover:border-gray-200 shadow-lg transition-all duration-300 relative">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                            </div>

                            {/* Category Name */}
                            <h3 className="mt-6 text-lg md:text-xl font-medium text-gray-800 uppercase tracking-wide group-hover:text-amber-700 transition-colors duration-300 text-center">
                                {category.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategories;
