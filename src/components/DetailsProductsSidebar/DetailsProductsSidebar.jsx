import './DetailsProductsSidebar.scss'
import {ProductPreviewCard} from "../ProductPreviewCard/ProductPreviewCard.jsx";
import PlusIcon from '../../assets/pictures/plus.svg?react'

const DetailsProductsSidebar = ({productList, addedProductsItems,handleTriggerSidebar,isSidebarOpen}) => {
    let filteredOrderArray = [];
    const filterProductsItems = () => addedProductsItems.filter((item) => {
        return productList.find((item2) => {

            if (item.productId === item2.id) {
                filteredOrderArray.push({'product': item2, 'quantity': item.quantity})
            }
        }) !== -1;
    });
    filterProductsItems();

    const summaryQuantity = () => {
        let quantity = 0;
        addedProductsItems.map(product => {
            quantity += product.quantity;
        });
        return quantity;
    }

    return (
        <aside className={ isSidebarOpen === true ? 'sidebar is-open' : ' sidebar'}>
            <div className="sidebar-overlay"></div>
            <div className="sidebar__wrapper">
                <div className="sidebar-close-button">
                    <PlusIcon onClick={handleTriggerSidebar}/>
                </div>
                <div className="sidebar__header mb-30">
                    <h3>Added Products : {summaryQuantity()}</h3>
                </div>
                <div className="sidebar__items">
                    {filteredOrderArray.map(({product,quantity}) => <ProductPreviewCard key={product.id} product={product} quantity={quantity} />)}
                </div>
            </div>
        </aside>
    )
}
export default DetailsProductsSidebar;