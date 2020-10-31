import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import colleges from '../Data/colleges'
import CollegeCard from './Card'
import '../App.css';

export default function Body() { 
    const [page, setpage] = useState(10)
    const [height, setheight] = useState(500)
    const [collegeList, setcollegeList] = useState(colleges.slice(0,10))
    useEffect(() => {
        window.addEventListener('scroll', event => handleScroll(event), { passive: false })       

        return () => {
            window.removeEventListener('scroll', event => handleScroll(event))
        }
    },[])
    useEffect(() => {
        setcollegeList(colleges.splice(0,page))
    },[height])

    const handleScroll = (event) => {
        if(document.documentElement.scrollTop > height){
            console.log("scrollled " + document.documentElement.scrollTop + " pixels")
            setpage(page + 10)
            setheight(height+500)
            console.log("height : ",height,"page number : ",page)
        }   
    }
    return (
        <div>
            <header className = "header"><h2>Colleges in North India</h2></header>

            <Container className = "body" fluid>
                <Row >
                    {collegeList.map((college,i)=><CollegeCard key = {i} data = {college}/>)}
                </Row>
            </Container>
        </div>
    )
}
