import React from "react";
import "./Card.scss";

const Card = ({img, title, brandNew, shipping, offer, company,location,review, oldPrice, newPrice, shippingCharge}) => {
    return (
        <div className='card'>
            <div className='card-left'>
                <img
                    src={img}
                    alt=''
                />
                <div className='img-text'>
                    {/* {imageText} */}
                    <span>{title}</span>
                    <div className='tags'>
                        { brandNew && <span className='brand-new'>{ brandNew }</span> }
                        { shipping && <span className='shipping'>{ shipping }</span> }
                        { offer && <span className='offer'>{ offer }% Off</span>}
                    </div>
                </div>
            </div>
            <div className='card-right'>
                <div className='left'>
                    { company && <div className='company'>{company}</div> }
                    { location && <div className='location'>{location}</div> }
                    { review && <div className='review'>⭐️⭐️⭐️⭐️⭐️({review})</div> }
                </div>
                <div className='middle'>
                    { oldPrice && <div className="price-cut">${oldPrice}</div> }
                    { newPrice && <div className="new-price">${newPrice} </div> }
                    { shippingCharge && <div className="plus-shipping">+{shippingCharge} Shipping</div> }
                </div>
                <div className='right'>
                    <button type="button">Add To Cart</button>
                    <button>Make Offer</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
