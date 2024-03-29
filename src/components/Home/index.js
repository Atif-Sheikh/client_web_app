import React from 'react';
import { InputGroup, Input, Button, Table, Navbar, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './index.css';
import history from '../../history';

class Home extends React.Component {
  state = {
    value: 'Row Size',
    data: [],
    loading: true
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
    return (
      <div className="main">
        <div className="leftContainer">
          <div className='wrapper'>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-end', paddingLeft: '20px' }}>
              <InputGroup>
                <Input placeholder="Search" />
              </InputGroup>
              <Button style={{ marginTop: '10px' }} color="primary">Search</Button>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <p style={{ width: '88%', margin: '0 auto', height: '50px' }}>Label 1</p>
              <p style={{ width: '88%', margin: '0 auto', height: '50px' }}>Label 2</p>
              <p style={{ width: '88%', margin: '0 auto', height: '50px' }}>Label 3</p>
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around', width: '70%' }}>
              <div style={true ? { background: 'green' } : { background: 'blue' }} className='circle' />
              <div style={false ? { background: 'green' } : { background: 'blue' }} className='circle' />
              <div style={true ? { background: 'green' } : { background: 'blue' }} className='circle' />
            </div>
          </div>
        </div>
        <div className="rightContainer">
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
                  return <tr onClick={() => history.push(`/details/${ind}`, { state: { index: ind } })} style={{ cursor: 'pointer' }} key={ind}>
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
        </div>
      </div>
    );
  }
}

export default Home;
