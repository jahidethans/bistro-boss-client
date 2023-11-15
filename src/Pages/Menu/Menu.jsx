
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg';
import { Helmet } from "react-helmet-async";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro boss | menu</title>
            </Helmet>
        
        <Cover img={img} title={'our menu'}></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={img} title={'our menu'}></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={img} title={'our menu'}></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={img} title={'our menu'}></Cover>
        <PopularMenu></PopularMenu>
     
           
        </div>
    );
};

export default Menu;