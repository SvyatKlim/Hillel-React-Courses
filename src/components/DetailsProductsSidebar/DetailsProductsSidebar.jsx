const DetailsProductsSidebar = ({productList,addedProductsItems}) => {
    // console.log(addedProductsItems)
    // console.log(productList)
    return (
        <aside className="sidebar">
            <div className="sidebar-overlay"></div>
            <div className="sidebar__wrapper">
                <div className="sidebar__header">
                    <h3>Added Products {}</h3>
                </div>
                <div className="sidebar__items"></div>
            </div>
        </aside>
    )
}
export default DetailsProductsSidebar;