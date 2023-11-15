
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
import SectionTitles from "../../Components/SectionTitles/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(each => each.category === 'dessert');
    const pizza = menu.filter(each => each.category === 'pizza');
    const soup = menu.filter(each => each.category === 'soup');
    const salad = menu.filter(each => each.category === 'salad');
    const offered = menu.filter(each => each.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro boss | menu</title>
            </Helmet>

            <Cover img={img} title={'our menu'}></Cover>
            {/* main cover */}
            <SectionTitles
                subHeading={"Don't Miss"}
                heading={"Todays Offer"}>
            </SectionTitles>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title={"Desserts"} coverImg={dessertImg}></MenuCategory>
            {/* Pizza */}
            <MenuCategory items={pizza} title={"Pizzas"} coverImg={pizzaImg}></MenuCategory>
            {/* Salad */}
            <MenuCategory items={salad} title={"Salads"} coverImg={saladImg}></MenuCategory>
            {/* Soup */}
            <MenuCategory items={soup} title={"Soups"} coverImg={soupImg}></MenuCategory>


        </div>
    );
};

export default Menu;