import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Container,
  Button,
  Col,
  Card,
  Table,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";


const ManageInventory = () => {
  const [item, setItems] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  
  useEffect(() => {
    axios.get("http://localhost:5000/inventory").then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete')
    axios.delete(`http://localhost:5000/inventoryItem/${id}`).then((res) => {
      if(confirm){
        if (res.data.deletedCount > 0) {
          const newItems = item.filter((item) => item._id !== id);
          setItems(newItems);
        }
      }     
    });
  };

  // Posting Inventory Items
  const handlePostInventory = (e) => {
    e.preventDefault();

    // Getting All The Field's Values;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const supplier = e.target.supplier.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const img = e.target.img.value;

    // insertedId

    const newItems = { name, supplier, price, quantity, description, img, email };
    axios.post("http://localhost:5000/inventoryItem", newItems)
    .then((res) => {
      setItems([...item, res.data]); // Backend theke first e insert kore then findOne kore response e data ta send kora hoise r ekhane array te add kore dewa hoise
      e.target.reset()
    });
  };

  return (
    <Container>
      <div className="mt-4 row justify-content-center">
        <div className="col-md-8 row">
          <h2 className="text-center mb-4 text-info">Manage Inventory Items</h2>
          {item.map((item) => (
            <Col className="col-md-4 col-12">
              <Card
                style={{
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                }}
                className="p-2 mb-4"
              >
                <Card.Img variant="top" className="img-fluid" src={item.img} />
                <Card.Body>
                  <Card.Title style={{ color: "#2C3A47" }}>
                    {item.name}
                  </Card.Title>
                  <Card.Text>
                    <small>
                      <span style={{ color: "#34e7e4", fontWeight: "bold" }}>
                        Supplier
                      </span>
                      : {item.supplier}
                    </small>
                    <br />
                    <small>
                      {" "}
                      <span style={{ color: "#34e7e4", fontWeight: "bold" }}>
                        Price $
                      </span>
                      {item.price}
                    </small>
                    <br />
                    <small>
                      <span style={{ color: "#34e7e4", fontWeight: "bold" }}>
                        Quantity
                      </span>{" "}
                      {item.quantity}
                    </small>
                    <br />
                  </Card.Text>

                  <div className="d-grid gap-2">
                    <Button
                      onClick={() => handleDelete(item._id)}
                      className="text-white"
                      variant="danger"
                      size="lg"
                    >
                      Delete Item
                    </Button>
                  </div>
                  <div className="d-grid gap-2 mt-2">
                    <Button
                      as={Link}
                      to={`/manageInventoryItem/${item._id}`}
                      className="text-white"
                      variant="info"
                      size="lg"
                    >
                      Manage
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
        <div className="col-md-4 px-5">
          <Form style={{
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                }} onSubmit={handlePostInventory} className="mt-5 p-4" sticky="top">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
          <h3 className="text-center mb-4 text-info">
            Add Inventory Items
          </h3>
              <Form.Control type="email" className="mb-3" name="email" disabled value={user?.email} placeholder="Enter Name" />
              <Form.Control type="text" name="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="supplier"
                placeholder="Enter Supplier Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter The Price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Enter The Quantity"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter The Description..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="img"
                placeholder="Enter Image Link"
              />
            </Form.Group>
            <div className="d-grid gap-2 mx-auto">
              <Button variant="primary" type="submit">
                Add Item
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ManageInventory;
