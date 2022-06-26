import React from "react";
import "./Card.scss";

const Card = ({img, title, brandNew, shipping, offer }) => {
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
                    <div className='company'>E.M.L.A</div>
                    <div className='location'>LeHvare, France</div>
                    <div className='review'>⭐️⭐️⭐️⭐️⭐️(23)</div>
                </div>
                <div className='middle'>
                    <div className="price-cut">$6500</div>
                    <div className="new-price">$3433 </div>
                    <div className="plus-shipping">+195Shipping</div>
                </div>
                <div className='right'>
                    <button>Add To Cart</button>
                    <button>Make Offer</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
