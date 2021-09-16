import React, {Component} from 'react';
import { fetchProduct } from '../'

class Store extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetchProduct()
    }

    mapProduct(){
        return this.props.product.map(product => (
            <div key={product.id}>
                <div>
                    <div>
                        <img src={productImg+product.img} alt="Product that is being sold"></img>
                    </div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                </div>
            </div>
        ))
    }
    render() {
        return(
            <div>
                <h1>Store</h1>
            </div>
        )
    }
}

export default Store;