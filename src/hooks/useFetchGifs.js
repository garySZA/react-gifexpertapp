import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( cateogry ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( cateogry )
            .then( imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    });
            } )
    }, [ cateogry ] )
    
    return state;

}