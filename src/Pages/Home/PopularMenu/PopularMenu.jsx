
import SectionTitles from "../../../Components/SectionTitles/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
   
   const [menu] = useMenu();
   const popularItems = menu.filter(item=> item.category === 'popular');
  
   
    
    return (
        <section  className="mb-12">
            <SectionTitles
            heading={`Check It Out`}
            subHeading={`Popular Items`}
            ></SectionTitles>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItems.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;