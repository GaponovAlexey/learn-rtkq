import Image from 'next/image'
import { useSelector } from 'react-redux'
import { UseActions } from './Hooks/useActions'
import { useGetProdQuery, useGetProductsQuery } from './redux/products/products'

const Homes = () => {
  const { data, isLoading, error } = useGetProdQuery(6)
  const { addItem, removeItem } = UseActions()

  const card = useSelector((state) => state.card)

  console.log(card)

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {data.title}
          <div>
            <button onClick={() => addItem(data)}>add</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Homes
