import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useState } from 'react'
import { useAppDispatch } from '../app/store'
import { Product } from '../models/product'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

type Props = {
  product: Product
}
const CheckoutProduct: React.FC<Props> = ({ product }) => {
  const [rate] = useState(Math.floor(product.rating.rate))
  const dispatch = useAppDispatch()

  function addItemToBasket() {
    dispatch(addToBasket(product))
  }

  function removeItemFromBasket() {
    dispatch(removeFromBasket({ id: product.id }))
  }
  return (
    <div className="grid grid-cols-5">
      <Image src={product.image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{product.title}</p>
        <div className="flex">
          {Array(rate)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-rose-500" />
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3">{product.description}</p>
        <p className="text-xl font-bold">
          {Intl.NumberFormat('pt-AO', {
            style: 'currency',
            currency: 'AOA',
          }).format(product.price)}
        </p>
      </div>

      <div className="my-auto mr-5 flex flex-col space-y-2 justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Adicionar no carrinho
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remover do carrinho
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
