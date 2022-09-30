import React from "react";
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "redux/filterSlice/filterSlice";

const Filter = () => {

    const dispatch = useDispatch();

    const handleChangeFilter = e => {
        dispatch(setStatusFilter(
            e.currentTarget.value.toLowerCase().trim()
        ));
    };
    
    return (
        <>
            <p>Find Contacts by name</p>
            <input
                type="text"
                name="filter"
                onChange={handleChangeFilter}
            />
        </>
    )
};

export default Filter;