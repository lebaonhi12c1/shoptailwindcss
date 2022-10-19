
import ProductItem from "./ProductItem"
import products from "../api/apiProduct"
export default function ProductList() {
    return (
        <div className="grid grid-cols-4 gap-4 p-4 shadow-lg mobile:grid-cols-2">
            {products.map(function(item,index){
                return (
                    <ProductItem item={item} key={index} index = {index}></ProductItem>
                )
            })}
        </div>
    )
};
