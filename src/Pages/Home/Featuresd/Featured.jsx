import SectionTitles from "../../../Components/SectionTitles/SectionTitle";
import featuredItem from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <div className="z-30"> 
            <SectionTitles
            heading={"FROM OUR MENU"}
            subHeading={`Check it out`}
            ></SectionTitles>
            </div>
            <div className="md:flex justify-center items-center pt-12 pb-32 px-36">
            <div>
                <img className="z-30" src={featuredItem} alt="" />
            </div>
            <div className="md:ml-10 z-30">
                <p>Aug 20. 2029</p>
                <p className="uppercase">WHERE CAN I GET SOME?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline text-white border-0 hover:border-b-[#D99904] border-b-4 hover:bg-[#D99904] mt-4">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;