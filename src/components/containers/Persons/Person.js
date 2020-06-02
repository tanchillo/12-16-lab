import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import axios from 'axios';

class Person extends Component {

    state = {
        show: false
    };

    showModal = event => {
        event.preventDefault();
      this.setState({show: true})
    };

    hideModal = () => {
      this.setState({show: false})
    };

    deletePerson = async () => {
        try {
            await axios.delete(`https://pautov-scripts.firebaseio.com/persons/${this.props.id}.json`);
            this.setState({show: false});
            window.location.reload();
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        const name = `${this.props.personData.name} ${this.props.personData.surName} ${this.props.personData.patronymic}`;
        const data = this.props.personData;
        const getAge = require('get-age');
        return (
            //Тут будет генерироваться текущий из всех сотрудников
            <div className={'card Person'}>
                {/*Модалка на удаление*/}

                <Modal show={this.state.show} onHide={this.hideModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remove person</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you really want to remove <b>{name}</b>?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.deletePerson}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className={'card-body'}>
                    <div className="person-info">
                        <p><span>ID:</span> {this.props.id}</p>
                        <p><span>Name:</span> {name}</p>
                        <p><span>Phone:</span> {data.phone}</p>
                        <p><span>Email:</span> {data.email}</p>
                        <p><span>Age:</span> {getAge(data.born)}</p>
                        <p><span>Department:</span> {data.department}</p>
                    </div>
                    <div className="buttons">
                        <NavLink to={`/edit/${this.props.id}`}><i className="far fa-lg fa-edit"/></NavLink>
                        <a href={'/'} onClick={this.showModal}><i className="far fa-lg fa-trash-alt"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;