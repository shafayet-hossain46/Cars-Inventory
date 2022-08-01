import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const ManageInventoryItem = () => {
    const {id} = useParams()

    // Sending id and fetching single item
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(0)
    useEffect(()=>{
        axios.get(`http://localhost:5000/manageInventoryItem/${id}`)
        .then(res => {
            let newQuantity = res?.data?.quantity
            setQuantity(newQuantity)
            setItem(res.data);
        })
    },[])

    // Delivered Button
    const handleDeliveredButton = id => {
        axios.put(`http://localhost:5000/delivered/${id}`)
        .then(res => {
            if(res.data.modifiedCount >= 0){
                setQuantity(quantity - 1)
            }
        })
    }


    // Adding Quantity
    const handleAddQuantity = e => {
        e.preventDefault();
        const extraQuantity = parseInt(e.target.number.value);
        const newExtraQuantity = {quantity: extraQuantity}

        axios.put(`http://localhost:5000/updateQuantity/${id}`,newExtraQuantity)
        .then(res => {
            if(res.data.modifiedCount >= 0){
                setQuantity(quantity + extraQuantity)
                e.target.number.value = "";
            }
        })
        
    }
    return (
        <Container>
            <Row xs={1} md={2} className="mt-4">
                <Col>
                    <Card style={{boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}} className="p-2 mb-4">
                        <Card.Img variant="top" src={item?.img} />
                        <Card.Body>
                        <Card.Title style={{color: "#2C3A47"}}>{item?.name}</Card.Title>
                        <Card.Text>
                            <small><span style={{color: "#34e7e4",fontWeight: "bold"}}>Supplier</span>: {item?.supplier}</small><br />
                            <small> <span style={{color: "#34e7e4",fontWeight: "bold"}}>Price $</span>{item?.price}</small><br />
                            <small><span style={{color: "#34e7e4",fontWeight: "bold"}}>Quantity</span> {quantity}</small><br />
                            <span style={{color: "#34e7e4",fontWeight: "bold"}}>☐ </span>{item?.description}
                        </Card.Text>
                        </Card.Body>
                        
                        <div className="d-grid gap-2">
                            <Button onClick={()=>handleDeliveredButton(item?._id)} className="text-white" variant="info" size="lg">
                                Delivered
                            </Button>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card style={{boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}} className="border rounded p-2 mb-4">
                        <Card.Body>
                        <Card.Title className="text-center" style={{color: "#2C3A47"}}>Restock The Item</Card.Title>
                        <Card.Text>
                            <form onSubmit={handleAddQuantity}>
                                <input className="form-control my-3" type="number" placeholder="Put The Quantity You Want To Add..." name="number" required/>
                                <div className="d-grid gap-2">
                                    <input className="text-white form-control bg-info" size="lg" type="submit" value="Restock" />
                                </div>
                            </form>
                            <div className="d-grid gap-2 mx-auto mt-3">
                                <Button as={Link} to="/manageInventory" className="text-white" variant="info">
                                    Mange Inventories
                                </Button>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageInventoryItem;