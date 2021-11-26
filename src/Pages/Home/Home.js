import React, { useState, useEffect } from 'react';
import './Home.css';
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { getChartData } from "../../Redux/chart/chart.actions";
import CustomChart from '../../Components/CustomChart/customChart';
 
const Home = (props) => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        props.getChartData();
    }, [])
    useEffect(() => {
        if (props.chartSuccessData && props.chartSuccessData !== '') {
            setChartData(props.chartSuccessData)
        }
    }, [props.chartSuccessData, props.chartErrorData])
  
 
    return (<>
        <Container>
            <Row>
                {chartData.length > 0 && chartData.map((data,index) => {
                    return <>  <Col lg={4} key={index}>
                        {/* {data.type}  */}
                        <CustomChart data={data}/> 
                    </Col></>
                })}

            </Row>

        </Container>
    </>);
}

const mapStateToProps = (state) => ({
    loading: state.chart.loading,
    chartSuccessData: state.chart.chartSuccessData,
    chartErrorData: state.chart.chartErrorData,
});

const mapDispatchToProps = {
    getChartData
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
    Home
);

