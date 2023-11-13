import './cardProduct.scss'
const CardProduct = () => {
  return (  
      <div className="card-product">
        <div className="image__container">
            <img
                src="https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png"
                alt=""
            />
            <div className="level">Beginner</div>
        </div>
        <h3 className="card__title">Introduction Basic Programming HTML & CSS</h3>

        <div className="card__info">
            <div className="user">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    alt="John Doe"
                />
                <p>John Doe</p>
            </div>
            <div className="rating">
                <p>4.5</p>
            </div>
        </div>

        <!-- Якщо це карточка, яка відображає мої поточні курси -->
        <!-- <div>
          <progress value="50" max="100">
            50%
          </progress>
          <div className="card__info">
            <p>5 / 10 Modules</p>
            <div>50 %</div>
          </div>
        </div> -->

        <div className="card__info">
            <div>1234 Student</div>
            <div>5 Modules</div>
            <div>1h 30m</div>
        </div>
    </div>
  )
}

export default CardProduct;