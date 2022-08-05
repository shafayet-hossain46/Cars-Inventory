import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row,Container,Button } from 'react-bootstrap';
import InventoryItem from '../InventoryItem/InventoryItem';
import { Link } from "react-router-dom";

const InventorySection = () => {

    // This is for inventory items
    const [inventoryItem, setInventoryItem] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/inventory')
        .then(res => {
            setInventoryItem(res.data);
        })
    },[])


    return (
        <Container className="py-5">
            <h2 className="text-center mt-5">Cars Inventories</h2>
            <Row xs={1} md={3} className="mt-5">
                {
                    inventoryItem.slice(0, 6).map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                }
                <div className="d-grid gap-2 mx-auto mt-4">
                    <Button as={Link} to="/manageInventory" className="text-white" style={{ background: "#008080", border: "none" }} size="lg">
                        Mange Inventories
                    </Button>
                </div>
            </Row>
        </Container>
    );
};

export default InventorySection;