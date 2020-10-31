import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';
import '../App.css';
import image from '../Data/college_01.jpg'
export default function CollegeCard({ data }) {
    return (
        <Col xl = {5}  lg = {5} md = {5} sm = {10} xs = {10} className = "card">
            <Card style={{ width: '90%' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Row>
                    <Col >
                        <Row><Col><p className = "clgname">{data.college_name}</p></Col></Row>
                        <Row><Col><p className = "address">{data.nearest_place[0]}</p></Col></Row>
                        <Row><Col><p>{data.famous_nearest_places}</p></Col></Row>
                        <Row><Col><p className = "offer-box">{data.offertext}</p></Col></Row>
                    </Col>
                    <Col >
                        <Row><Col><p>{data.original_fees}</p></Col></Row>
                        <Row><Col><p classname = "price">{data.discounted_fees}</p></Col></Row>
                        <Row><Col><p>{data.fees_cycle}</p></Col></Row>
                        <Row><Col><p>{data.amenties[0]}</p></Col></Row>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}
