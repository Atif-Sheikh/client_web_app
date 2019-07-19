import React from 'react';
import { TabContent, Input, InputGroup, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
   Table, Navbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './index.css';
import history from '../../history';

class Details extends React.Component {
    state = {
        activeTab: '1',
        value: 'Row Size',
        data: [],
    };
    
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    };


  componentDidMount() {
    this.getData();
  };

  getData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let resp = await data.json();
    console.log(resp, '>>>>>>>>>>')
    this.setState({ data: resp });
  };

  render() {
    const { data } = this.state;
    let pagenation = data.slice(0, typeof this.state.value === 'string' ? 10 : this.state.value);
      console.log(this.props.match.params, ">>>>>>>>>>>")
    return (
      <div className="containers">
        <Nav tabs>
          <NavItem style={{ width: '100px' }}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
                First
            </NavLink>
          </NavItem>
          <NavItem style={{ width: '100px' }}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Second
            </NavLink>
          </NavItem>

          <NavItem style={{ width: '100px' }}>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Third
            </NavLink>
          </NavItem>

        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
              <Row>
                <Col sm="12">
                <Table hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Serial Number</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Date 1</th>
                      <th>Date 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pagenation.map((val, ind) => {
                        return <tr style={{ cursor: 'pointer' }} key={ind}>
                          <th scope="row">{ind + 1}</th>
                            <td>{val.title}</td>
                            <td>{val.body}</td>
                            <td>user{val.userId}</td>
                            <td>Otto</td>
                            <td>Otto</td>
                        </tr> 
                      })
                    }
                  </tbody>
                </Table>
                <Navbar color="light" light expand="md">
                  <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown setActiveFromChild>
                      <DropdownToggle tag="a" className="nav-link" caret>
                        { this.state.value }
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => this.setState({ value: 10 })}>10</DropdownItem>
                        <DropdownItem onClick={() => this.setState({ value: 20 })}>20</DropdownItem>
                        <DropdownItem onClick={() => this.setState({ value: 30 })}>30</DropdownItem>
                        <DropdownItem onClick={() => this.setState({ value: 40 })}>40</DropdownItem>
                        <DropdownItem onClick={() => this.setState({ value: 50 })}>50</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Navbar>
                <Button className='customBtn' onClick={() => history.push('/')}> 
                    Go Back
                </Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end', paddingLeft: '20px' }}>
                    <InputGroup>
                    <Input placeholder="Search" />
                    </InputGroup>
                    <Button style={{ marginTop: '10px' }} color="primary">Search</Button>
                </div>
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end', paddingLeft: '20px' }}>
                <InputGroup>
                <Input placeholder="Search" />
                </InputGroup>
                <Button style={{ marginTop: '10px' }} color="primary">Search</Button>
            </div>
                <div className='cardItem'></div>
                <div className='cardItem'></div>
                <div className='cardItem'></div>
                <div className='cardItem'></div>
                <Link to='/'> 
                    Go Back
                </Link>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Details;
