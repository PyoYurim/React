import Header from "../../header/Header";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "../../component/best/Best.css";
import Data from '../../component/best/BestData.js';
import Detail from "../../component/best/Detail";

function Best() {
    let [product, setProduct] = useState(Data);

    return (
        <div className="product">
            <div className="header1">
                Our flying start!
            </div>
            <Header />
            <div className="container">
                <div className="row">
                    {product.map((item, idx) => (
                        <Grid product={product[idx]} key={idx} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

function Grid(props) {
    return (
        <div>
            <Link to={`/detail/${props.product.id}`}>
                <img src={`./images/best/${props.product.id}.png`} alt={`Product ${props.product.id}`} />
                <h5>{props.product.title}</h5>
                <p>{props.product.price}원</p>
            </Link>
        </div>
    )
}

export default Best;
