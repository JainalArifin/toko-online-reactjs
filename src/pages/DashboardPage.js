import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

// widget
import { iconWidgetsData } from '../demos/widgetPage';
import { IconWidget } from '../components/Widget'


const API_TOKO_ONLINE = `http://35.186.150.123:3220/product`

function onAfterDeleteRow(rowKeys) {
    // console.log(rowKeys[0])
    let data = rowKeys[0]
    axios.delete(`${API_TOKO_ONLINE}/${data}`)
    .then(() => {
        alert('The rowkey you drop: ' + rowKeys);
    })
    .catch(()=>{
        alert(` can't delete `)
    })
}

const options = {
    defaultSearch: '',
    afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
    defaultSortName: '_id',  // default sort column name
    defaultSortOrder: 'desc'  // default sort order
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'radio'
};

// image
function imageFormatter(cell, row){
    return "<img src='"+cell+"' class='rounded img-thumbnail' />" ;
}

// number
// function indexN( index) {
//     return (<div>{index+1}</div>)
// }

//
function dataProductLength() {
return (<p><i className="fas fa-shopping-basket" style={{fontSize: '50px'}}></i></p>) ;
}

// edit
// function handleAction(id){
//     return (<Button src="cell" onClick={()=>{this.edit(IDBRequest)}}> <i className="fas fa-edit"></i> Edit </Button>)
// }

function onAfterSaveCell(row, cellName, cellValue) {
    axios.put(`${API_TOKO_ONLINE}/${row._id}`, {
        cellName: cellValue
    })
    .then(()=>{
        Swal(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    })
}

function onBeforeSaveCell(row, cellName, cellValue) {
    axios.put(`${API_TOKO_ONLINE}/${row._id}`, {
        cellName: cellValue
    })
    .then(()=>{
        Swal(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    })
    // You can do any validation on here for editing value,
    // return false for reject the editing
    return true;
}

const cellEditProp = {
    mode: 'click',
    blurToSave: true,
    beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

export default class DashboardPage extends Component{
    constructor(){
        super()
        this.state = {
            dataProduct: []
        }
    }

    getData = () => {
        axios.get(API_TOKO_ONLINE)
        .then((result) => {
            console.log(result.data)
            this.setState({
                dataProduct: result.data
            })
        })

        console.log(this.state.dataProduct, ' <---- ok')
    }

    edit(id){
        console.log(id, ' <----- dapat id')
    }

    componentDidMount = () =>{
        this.getData()
    }

    refresh = () => {
        window.location.reload();
    }
    addProduct = () => {
        window.location.href = "/addproduct"
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col key={iconWidgetsData[5].index} lg={4} md={6} sm={6} xs={12} className="mb-3">
                    <IconWidget
                        bgColor={iconWidgetsData[5].bgColor}
                        icon={dataProductLength}
                        title={ this.state.dataProduct.length}
                        subtitle="Jumlah Product"
                        // {...restProps}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* {console.log(this.state.dataProduct, ' <---- ok')} */}
                    <Card>
                        <CardHeader>
                            All Product 	&nbsp;
                            <Button onClick={()=>this.refresh()}>refresh</Button> &nbsp;
                        </CardHeader>
                        <CardBody>


                            <BootstrapTable
                                data={ this.state.dataProduct }
                                pagination
                                search={ true }
                                options={ options }
                                striped={true}
                                hover={true}
                                selectRow={ selectRowProp }
                                ref='table'
                                cellEdit={ cellEditProp }
                            >
                                {/* <TableHeaderColumn dataField='no'>{console.log(products.id, ' <---- 1')}</TableHeaderColumn> */}
                                {/* <TableHeaderColumn dataFormat={indexN}  dataSort
                                >
                                    No
                                </TableHeaderColumn> */}
                                <TableHeaderColumn dataField='_id' isKey dataSort={true}>
                                    ID Product
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='title' dataSort={true}>
                                    Name Product
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='image' dataFormat={imageFormatter}>
                                    image product
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='description' dataSort={true}>
                                    Description Product
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='price' dataSort={true}>
                                    Price Product
                                </TableHeaderColumn>
                            </BootstrapTable>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}