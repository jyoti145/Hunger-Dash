//custome hook to fetch restaurant menu data

import { useState , useEffect, use } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [Resinfo ,setResinfo] = useState(null);

    useEffect(()=>{
        fetchmenu();
    }, [resId])

    const fetchmenu = async ()=>{
        const data = await fetch( `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setResinfo(json.data);
    }
 return Resinfo;

}
export default useRestaurantMenu;