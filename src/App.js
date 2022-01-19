import "./App.css";
import ReviewBox from "./Reviews";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="ParentBox">
      <FotoProduk />
      <ProdukInfo category="BARANG" title="Youdora dora" isDiscount={true} />
      <ReviewBox />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img
        src="/assets/img/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg"
        alt="sneaker"
      />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount) {
    return (
      <div className="Discount">
        <p>Diskon {discount}% off</p>
      </div>
    );
  } else {
    return (
      <div className="Discount">
        <p>Tidak ada diskon</p>
      </div>
    );
  }
}

function ProdukInfo(props) {
  const { category, title, isDiscount } = props;
  const price = 74000000;
  const benefits = [
    "Tidak kusut terkena air",
    "Tidak mudah rusak",
    "Bahan kualitas tinggi"
  ];
  const listBenefits = benefits.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{title}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount}  discount={20} />
        <p className="Info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
          molestias natus laudantium, vel ab totam accusamus minima ipsa velit
          pariatur necessitatibus quo maiores incidunt culpa nobis ducimus porro
          dicta ullam.
        </p>
        <ul>{listBenefits}</ul>
        <button onClick={e => TambahCart(title, e)}>Add to Cart</button>
      </div>
    </div>
  );
}

function TambahCart(title, e) {
  alert(title + " Added to Cart");
}

CheckDiscount.propTypes = {
  isDiscount: PropTypes.bool.isRequired,
  discount: PropTypes.number.isRequired
};

export default App;
