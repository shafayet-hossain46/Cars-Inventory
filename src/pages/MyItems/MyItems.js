import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { Button, Card, Col, Container } from 'react-bootstrap';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [item, setItem] = useState([])

    
        useEffect(()=>{
            axios.get(`http://localhost:5000/myItems?email=${user?.email}`)
            .then(res => {
                console.log(res.data);
                setItem(res.data)
            })
        }, [user])


        // Deleting
        const handleDelete = (id) => {
            const confirm = window.confirm('Are you sure you want to delete')
            axios.delete(`http://localhost:5000/inventoryItem/${id}`).then((res) => {
              if(confirm){
                if (res.data.deletedCount > 0) {
                    const newItems = item.filter((item) => item._id !== id);
                    setItem(newItems);
                  }
              }               
            });
          };
        
    
    return (
        <Container>
            <div className="col-md-8 row">
          <h2 className="text-center my-4 text-info">Your Items</h2>
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
                      Cancel Item
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
        </Container>
    );
};

export default MyItems;