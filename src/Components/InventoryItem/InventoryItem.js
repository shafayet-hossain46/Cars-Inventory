import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const InventoryItem = (props) => {
  const { name, img, price, quantity, supplier, description, _id } = props.item;
  return (
    <Col>
      <Card style={{boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}} className="p-2 mb-4">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{color: "#2C3A47"}}>{name}</Card.Title>
          <Card.Text>
            <small><span style={{color: "#34e7e4",fontWeight: "bold"}}>Supplier</span>: {supplier}</small><br />
            <small> <span style={{color: "#34e7e4",fontWeight: "bold"}}>Price $</span>{price}</small><br />
            <small><span style={{color: "#34e7e4",fontWeight: "bold"}}>Quantity</span> {quantity}</small><br />
            <span style={{color: "#34e7e4",fontWeight: "bold"}}>☐ </span>{description}
          </Card.Text>
          <div className="d-grid gap-2">
      <Button as={Link} to={`/manageInventoryItem/${_id}`} className="text-white" variant="info" size="lg">
        Manage
      </Button>
    </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItem;
