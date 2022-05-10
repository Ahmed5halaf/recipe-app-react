import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Wrapper = styled.div`
    margin: 2rem 5%;
`;
const Card = styled.div`
    min-height: 20rem;
    overflow: hidden;
    border-radius: 2rem;
    position:relative;


    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%,0);
        color: #fff;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center ;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0 ), rgba(0, 0, 0,0.5));
                      
`

const Popular = () => {
    const [popular, setPopular] = useState([])
    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem("popular")

        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(
                "https://fakestoreapi.com/products/category/jewelery");

            const data = await api.json()

            localStorage.setItem("popular", JSON.stringify(data))
            setPopular(data);
            console.log(data);
        }

    }

    return (
        <div>
            <Wrapper>
                <h3>Slider Popular Pickes</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}



export default Popular