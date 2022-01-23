import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyProducts() {
  const sellerid = sessionStorage.getItem("id");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://eshop-spring-backend.herokuapp.com/api/products?sellerid=" +
          sellerid
      )
      .then((resp) => {
        console.log(resp.data);
        setProducts(resp.data.data);
        console.log(products);
      });
  }, []);

  const deleteProduct = (prodid) => {
    let resp = window.confirm("Are you sure to delete this product ?");
    if (resp) {
      axios
        .delete(
          "https://eshop-spring-backend.herokuapp.com/api/products/" + prodid
        )
        .then((resp) => {
          alert("Product deleted successfully");
          axios
            .get(
              "https://eshop-spring-backend.herokuapp.com/api/products?sellerid=" +
                sellerid
            )
            .then((resp) => {
              console.log(resp.data);
              setProducts(resp.data.data);
              console.log(products);
            });
        });
    }
  };

  return (
    <div className="container">
      <div className="card shadow bg-transparent text-black">
        <div className="card-body">
          <h4>My Products</h4>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Brand Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((x) => (
                <tr key={x.prodid}>
                  <td>
                    <img
                      width="100"
                      src={
                        "https://eshop-spring-backend.herokuapp.com/" + x.photo
                      }
                      className="img-thumnail"
                      alt=""
                    />
                    {x.pname}
                  </td>
                  <td>{x.pcat}</td>
                  <td>{x.brand}</td>
                  <td>{x.price}</td>
                  <td>
                    <Link
                      to={"/edit/" + x.prodid}
                      className="btn btn-primary btn-sm mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(x.prodid)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
