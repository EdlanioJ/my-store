import { Product as ProductModel } from '../models/product'
import Product from './Product'

type ProductFeedType = {
  products: ProductModel[]
}
const ProductFeed: React.FC<ProductFeedType> = ({ products }) => {
  return (
    <div className="mx-auto grid grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <img
        src="http://links.papareact.com/dyz"
        className="md:col-span-full"
        alt="dy2"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} isRow />
        ))}
      </div>
      {products.slice(5, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductFeed
