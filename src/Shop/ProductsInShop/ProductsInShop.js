import "./productsInShop.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import products3 from "../../products3";
import sayer from "../../sayer";

const ProductsInShop = () => {
  const products = [...products3, ...sayer];
  const productslocal = [];
  for (let index = 0; index < products.length; index++) {
    productslocal.push(
      <ProductCard
        key={index}
        linkName={products[index]._id}
        className="product-card-class"
        src={products[index].image}
        title={products[index].name}
        price={products[index].price}
      />
    );
  }

  return <div id="products-in-shop-id">{productslocal}</div>;
};

export default ProductsInShop;
