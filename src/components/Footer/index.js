import { Component } from "react";
import './index.css';
class Footer extends  Component{
    render(){
        return (
            <div className="Foot">
                <p class = "foot2">Credits: photos from <a href="https://unsplash.com/@surface">&nbsp;Unsplash.com</a>, 
    icons from <a href="https://icons8.com/">&nbsp;Icons8</a>,
     graphics from <a href = "https://craftwork.design/checkout/purchase-confirmation/?payment_key=a3ba0d28aa30dfd691cd535acb1f4228">&nbsp;craftwork.design</a>,  
    font Kanit from <a href="https://fonts.google.com/specimen/Kanit">&nbsp;fonts.google</a></p>
    <p class ="foot-end-text"><b>Made with ✨❤️ at nFactorial in 2022.</b></p>
            </div>
        )
    }
}
export default Footer;