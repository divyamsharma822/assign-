import React from "react";
import "./App.scss";
import Card from "./components/Card/Card";

const App = () => {
    return (
        <div className='App'>
            <Card
                img={
                    "https://images.pexels.com/photos/7858744/pexels-photo-7858744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
                }
                title={"Nord Stage 3 88 Keys"}
                brandNew={"Brand New"}
                shipping={"Free Shipping"}
                offer={"15% "}
                company='EMCA'
                location={"Le Harve, France"}
                review={"24"}
                oldPrice={"2500"}
                newPrice={"3000"}
                shippingCharge={"195"}
            />
            <Card
                img={
                    "https://images.pexels.com/photos/4792716/pexels-photo-4792716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                title={"Line 6 Hexi Keyboard"}
                brandNew={"Brand New"}
                company='PMCA'
                location={"Le Dutch, America"}
                review={"561"}
                oldPrice={"2442"}
                newPrice={"3500"}
                shippingCharge={"125"}
            />
            <Card
                img={
                    "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                title={"Nord Lead 1"}
                brandNew={"Brand New"}
                company='Electro Musics'
                location={"Rail Si , UP"}
                review={"233"}
                oldPrice={"9342"}
                newPrice={"1800"}
                shippingCharge={"125"}
                offer={"89"}
            />
            <Card
                img={
                    "https://images.pexels.com/photos/5082557/pexels-photo-5082557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                title={"Apple Magic Keyboard"}
                brandNew={"Brand New"}
                shipping="One Day Shipping"
                company='Apple Inc.'
                location={"Silicon Valley , United States"}
                review={"233"}
                oldPrice={"9239"}
                newPrice={"4400"}
                shippingCharge={"235"}
                offer={"67"}
            />
        </div>
    );
};

export default App;
