import React from 'react';
import { TabContent, Input, InputGroup, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './index.css';

class Details extends React.Component {
    state = {
        activeTab: '1'
    };
    
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    };

  render() {
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
