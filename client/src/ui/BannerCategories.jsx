import React, { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CategoryProps } from "../../type";
import { Link } from "react-router-dom"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const BannerCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/categories`;
            try {
                const data = await getData(endpoint);
                console.log("Fetched categories:", data);
                setCategories(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            transitionDuration={500}
            className="p-4 max-w-screen-xl mx-auto lg:px-0 relative"
        >
            {categories.map((item) => (
                <Link
                    key={item?._id}
                    to={`category/${item?._base}`}
                    className="flex items-center gap-x-2 p-1 border border-gray-100 mr-1 flex-1 rounded-md hover:border-skyText hover:shadow-lg"
                >
                    <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="text-sm font-semibold"> {item?.name}</p>
                </Link>
            ))}
        </Carousel>
    );

};

export default BannerCategories;