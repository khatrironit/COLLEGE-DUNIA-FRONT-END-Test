import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';
import '../App.css';

export default function CollegeCard({ data }) {
    return (
        <Col xl = {5}  lg = {5} md = {5} sm = {10} xs = {10} className = "card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../Data/college_01.jpg" />
                <Card.Body>
                    <Col>
                        <Row><p>{data.college_name}</p></Row>
                        <Row><p>{data.nearest_place[0]}</p></Row>
                        <Row><p>{data.famous_nearest_places}</p></Row>
                        <Row><p>{data.offertext}</p></Row>
                    </Col>
                    <Col>
                        <Row><p>{data.discounted_fees}</p></Row>
                        <Row><p>{data.discounted_fees}</p></Row>
                        <Row><p>{data.fees_cycle}</p></Row>
                        <Row><p>{data.amenties[0]}</p></Row>
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}
