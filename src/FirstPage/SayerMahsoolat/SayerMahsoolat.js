import './sayerMahsoolat.css'
import Products from '../../Components/Products/Products'
import ProductCard from '../../Components/ProductCard/ProductCard'
import sayer from '../../sayer'

const SayerMahsoolat = () => {
    const productslocal=[]
    for (let index = 0; index < 4; index++) {
        productslocal.push(
        <div className='div-product-id' key={index}>
            <ProductCard
                linkName={sayer[index]._id}
                className='product-card-class'
                src={sayer[index].image}
                title={sayer[index].name}
                price={sayer[index].price}
            />
        </div>
        )

    }
  return (
    <Products 
        title='سایر محصولات'
        products={productslocal}
    />
  )
}

export default SayerMahsoolat