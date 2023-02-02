import './App.css';
import img from './images/Imgg.png';
import img2 from './images/Actions.png';
import img3 from './images/1.png';

function News1() {
    return (
      <div className="App">
        <div className= "News1">
            <div className = "text-info1">
                <div className = "top-row1">
                    <div className='IMG-TOP'>
                <img src = {img} />
                </div>
        <p class = "row-p">Authors name in Topics Name · 7 July </p>
    </div>
    <div className = "Description1">
        <h1>7 Practical CSS Tips</h1>
        <p>You not only learn more Python by implementing 
            what you already know but, in the end, you can see how all your hard work pays off.</p>
</div>
    <div className = "footer1">
        <div className = "footer-text1">
        <p class = "btn-java">Java Script</p>
        <p><a href>&nbsp;12 min read</a></p>
        <p><a href>&nbsp;Selected for you</a></p>
    </div>
    <div className = "block-img1">
        <div className = "blocks"><img src = {img2} /></div>
    </div>
</div>
</div>
<div className = "img1">
    <img src = {img3} />
</div>
</div>
</div>
);
  }
  
  export default News1;