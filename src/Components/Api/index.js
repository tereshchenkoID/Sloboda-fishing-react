import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { loadData } from 'redux/actions/dataActions'

const Api = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData())
    }, [dispatch]);

    return true;
}

export default Api;
