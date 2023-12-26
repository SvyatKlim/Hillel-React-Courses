import './DetailsProductsSidebar.scss'
import {ProductPreviewCard} from "../ProductPreviewCard/ProductPreviewCard.jsx";
import PlusIcon from '../../assets/pictures/plus.svg?react'
import {useDispatch, useSelector} from "react-redux";
import {resetCart} from "../../redux/slices/cartSlice.js";
import {ResetCartButton} from "../Buttons/Buttons.jsx";

const DetailsProductsSidebar = ({handleTriggerSidebar}) => {
    const dispatch = useDispatch();
    const {items, totalPrice, totalCount} = useSelector(store => store.cart);
    const {isSidebarOpen} = useSelector(store => store.global);

    return (<aside className={isSidebarOpen === true ? 'sidebar is-open' : ' sidebar'}>
        <div className="sidebar-overlay" onClick={handleTriggerSidebar}></div>
        <div className="sidebar__wrapper">
            <div className="sidebar-close-button d-flex" onClick={handleTriggerSidebar}>
                <PlusIcon/>
            </div>
            <div className="sidebar__header mb-30">
                <h3>Added Products : {totalCount}</h3>
                <h3>Total : ${totalPrice} </h3>
            </div>
            <div className="sidebar__items">
                {!!items.length && items.map(product => <ProductPreviewCard key={product.id} product={product}/>)}
            </div>

            {!!items.length && <div className="sidebar__footer">
                <ResetCartButton handler={() => dispatch(resetCart())} buttonText='Reset Cart'/>
            </div>
            }

        </div>
    </aside>)
}
export default DetailsProductsSidebar;