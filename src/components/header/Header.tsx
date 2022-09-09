import arbol from "../../assets/arbol.jpg";
import "./header.css";

const Header = () => {
  const carts = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="header mt-3">
      <div className="containerCarts">
        {carts.map((item) => (
          <div className="cartItem" key={item.id}>
            <h2>LOREM</h2>
            <img className="cartImage" src={arbol} alt="" />
            <div>Is simply dummy text of the printing and typesetting industry</div>
            <div className="pt-4 see-more">See more</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
