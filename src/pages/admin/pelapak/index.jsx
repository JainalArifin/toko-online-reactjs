import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap'
import Axios from 'axios'

// test

const API_DATA_USER = `http://35.186.150.123:3220/user`
export default class Pelapak extends Component {
    state = {
        user: []
    }

    getData = () =>{
        Axios.get(`${API_DATA_USER}`)
        .then(({data})=>{
            // console.log(data, ' ---> data user')
            this.setState({
                user: data
            })
        })
        .catch(()=>{

        })
    }

    componentDidMount(){
        this.getData()
    }

  render() {
      const { user } = this.state
    return (
      <Container>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        Pelapak
                    </CardHeader>
                    <CardBody>
                        <BootstrapTable
                            data={user}
                            striped
                            hover
                            pagination
                        >
                            <TableHeaderColumn isKey dataField='_id'>User ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='ussername'>Name User</TableHeaderColumn>
                            <TableHeaderColumn dataField='rule'>Role User</TableHeaderColumn>
                        </BootstrapTable>
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </Container>
    )
  }
};
