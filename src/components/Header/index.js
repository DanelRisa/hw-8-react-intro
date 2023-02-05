import React from "react";
import "./index.css"
class Header extends React.Component{
    render(){
        return( 
            <div className="Head">
            <div style = {{display:"flex",justifyContent:"flex-start", flexDirection:"column", alignItems:"start"}} >
                <p>Medium  Alike</p>
                <h3>Hello,World!</h3>
            </div>
            </div>
        )
    }
}
export default Header;