import { useEffect, useState } from "react";
import SectionTitles from "../../../Components/SectionTitles/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data => {
            const popularItems = data.filter(item=> item.category === 'popular');
            setMenu(popularItems)})
    },[])
    
    return (
        <section  className="mb-12">
            <SectionTitles
            heading={`Check It Out`}
            subHeading={`Popular Items`}
            ></SectionTitles>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;