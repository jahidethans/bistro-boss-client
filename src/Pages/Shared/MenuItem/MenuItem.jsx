
const MenuItem = ({item}) => {
    const { image, name, price, recipe} = item;
    return (
        <div className="flex space-x-2">
            <img className="w-[120px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p >{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;