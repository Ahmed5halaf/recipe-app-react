import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from 'styled-components';
import React from 'react';
import { NavLink } from "react-router-dom";
import Cuisine from './../pages/Cuisine';

const Category = () => {
    return (
        <List>
            <NavLink to={'/cuisine/Italian'}>
                < FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>japanese</h4>
            </NavLink>
        </List >
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Category