import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ item }) => {
    const { _id, name, price, description, image } = item;
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-cont">
                <img src="/header_img.png" alt="" className="food-item-image" />
                {!(cartItems && cartItems[_id]) ? (
                    <img
                        className="add"
                        onClick={() => addToCart(_id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            onClick={() => removeFromCart(_id)}
                            src={assets.remove_icon_red}
                            alt=""
                        />
                        <p>{cartItems[_id]}</p>
                        <img
                            onClick={() => addToCart(_id)}
                            src={assets.add_icon_green}
                            alt=""
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">Rs. {price * 10}</p>
            </div>
        </div>
    );
};
export default FoodItem;
