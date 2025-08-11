import './pishnahadVizhe.css'
import Products from '../../Components/Products/Products'
import ProductCard from '../../Components/ProductCard/ProductCard'

const PishnahadVizhe = () => {
    const products=[]
    for (let index = 0; index < 4; index++) {
        products.push(
        <div className='div-product-id' key={index}>
            <ProductCard
                className='product-card-class'
                src={require('../../assest/kasegerdo.png')}
                title='مغز گردو'
                price={370000}
            />
        </div>)
        
    }

  return (
    <Products 
        title='پیشنهاد های ویژه'
        products={products}
    />

  )
}

export default PishnahadVizhe