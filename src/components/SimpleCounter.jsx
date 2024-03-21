import {Card, Row, Col } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa6";

export function SimpleCounter(props){

    const d1 = Math.floor((props.seconds / Math.pow(10, 1 -1)) % 10);
    const d2 = Math.floor((props.seconds / Math.pow(10, 2 -1)) % 10);
    const d3 = Math.floor((props.seconds / Math.pow(10, 3 -1)) % 10);
    const d4 = Math.floor((props.seconds / Math.pow(10, 4 -1)) % 10);
    const d5 = Math.floor((props.seconds / Math.pow(10, 5 -1)) % 10);
    const d6 = Math.floor((props.seconds / Math.pow(10, 6 -1)) % 10);

    return (
        <Row>
            <Col>               
             <Card border="secondary" bg="dark" text="white" className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                <FaRegClock className="fs-1"/>
                </Card>  
            </Col>
            <Col >
                <Card border="secondary" bg="dark" text="white" className="fs-1 d-flex justify-content-center align-items-center"  style={{ height: '100px' }}>
                    {d6}
                </Card>               
            </Col>
            <Col>
                <Card border="secondary" bg="dark" text="white" className="fs-1 d-flex justify-content-center align-items-center"  style={{ height: '100px' }}>
                    {d5}
                </Card>  
            </Col>
            <Col>
                <Card border="secondary" bg="dark" text="white" className="fs-1 d-flex justify-content-center align-items-center"  style={{ height: '100px' }}>
                    {d4}
                </Card>  
            </Col>
            <Col>
                <Card border="secondary" bg="dark" text="white" className="fs-1 d-flex justify-content-center align-items-center"  style={{ height: '100px' }}>
                    {d3}
                </Card>  
            </Col>
            <Col>
                <Card border="secondary" bg="dark" text="white" className="fs-1 d-flex justify-content-center align-items-center"  style={{ height: '100px' }}>
                    {d2}
                </Card>  
            </Col>
            <Col>
                <Card border="secondary" bg="dark" text="white" className="fs-1 d-flex justify-content-center align-items-center"  style={{ height: '100px' }}>
                    {d1}
                </Card>  
            </Col>
        </Row>

  

    );
}