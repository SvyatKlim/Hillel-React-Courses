import './ProductPreviewCard.scss';

export const ProductPreviewCard = ({product,quantity}) => {
    const {thumbnail, title, price, priceWithoutDiscount} = product;
    // console.log(product)
    return <div className='card-product-preview'>
            <figure className="card-product-preview__img__wrapper d-flex">
                <img className='card-product-preview__img' src={thumbnail} alt={title}/>
            </figure>
            <div className="card-product-preview__info">
                <div className="card-product-preview__info__main">
                    <h5 className="">{title}</h5>
                </div>
                <p className="price fw-700 mt-0 mb-0"> ${price} <strike>${priceWithoutDiscount}</strike></p>
            </div>
            <h3> x{ quantity } </h3>
    </div>
}