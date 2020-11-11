import React, { FC } from 'react'

import { Product } from '../../typings'
import Real from '../Real'
import ProductImage from './ProductImage'

type Props = {
  product: Product
  onClick?: () => void
}

const ProductSummary: FC<Props> = ({
  product: { name, price, imgSrc, description, id },
  onClick,
}) => {
  return (
    <div
      className="shadow-1 br3 flex pa3 bg-white pointer"
      id={`summary-${id}`}
      onClick={() => onClick?.()}
      onKeyPress={() => onClick?.()}
      role="button"
      tabIndex={0}
    >
      {imgSrc && (
        <div className="w-34" style={{ width: '110px', minWidth: '110px' }}>
          <ProductImage src={imgSrc} title={name} onClick={() => onClick?.()} />
        </div>
      )}
      <div className="flex flex-column ml3 justify-between">
        <div className="flex flex-column">
          <span className="f3" style={{ lineHeight: '25px' }}>
            {name}
          </span>
          <span className="f5 fw2 silver" style={{ lineHeight: '20px' }}>
            {`${description?.substring(0, 50) ?? ''}${
              (description?.length ?? 0) > 50 ? '...' : ''
            }`}
          </span>
        </div>
        <span className="grey f3" style={{ marginBottom: '-6px' }}>
          <Real cents={price} />
        </span>
      </div>
    </div>
  )
}

export default ProductSummary
