import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            //Разметка приложения - 2 компонента (Навигация и контент)
            //В контенте размешаются все наши файлы (Компонент сотрудников)
           <Container className={'Layout'} fluid>
               <Row>
                   <Col lg={2} className={'navigation'}>
                       <h3>Persons List</h3>
                       <NavLink to={'/'} className={'nav-link'}>
                           Main Page
                       </NavLink>
                       <NavLink to={'/information'} className={'nav-link'}>
                           Information
                       </NavLink>
                   </Col>
                   <Col lg={10} className={'content'}>
                       {this.props.children}
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Layout;