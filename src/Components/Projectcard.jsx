import React from 'react';
import style from './ProjectCard.module.css';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Showbtn from './showbtn';
export default function Cards({ data }) {
    const buttonvalue = 'Show More ->';

    return (
        <>

            {/* <Row className={style.Row} >
                <Col lg={6}>
                    <img src={data.coverimage} className={style.img} alt={data.altimg} />
                </Col>
                <Col lg={4}>
                <h4 className={style.title}>{data.title}</h4>
                <p className={style.description}>{data.minidescription}</p>
                    <button>{buttonvalue}</button>

                </Col>
                <Col lg={2} style={{ display: 'none' }}  >
                </Col>            </Row> */}

            <Row className={style.row}>
                <Col lg={6}>
                    <Card.Img variant="top" src={data.coverimage} className={style.img} />
                </Col>
                <Col lg={6}>
                    <Card.Body className={style.body}>
                        <span className={style.count}>{data.id}</span>

                        <Card.Title >{data.Title}</Card.Title>
                        <Card.Text>
                            {data.minidescription}
                        </Card.Text>
                        <Showbtn btnname='Show More' />
                    </Card.Body>
                </Col>
            </Row >

        </>
    );
}
