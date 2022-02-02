import React, { Component } from "react"; 

import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Input, 
    Label,
} from "reactstrap"; 

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    };

    handleChange = (e) => {
        let { name, value } = e.target; 

        if (e.target.type === "checkbox"){
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value}; 

        this.setState({ activeItem }); 
    }; 

    render() {
        const { toggle, onSave } = this.props; 

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Input task</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for = "todo-title">Glamorous itle</Label>
                            <Input type = "text" id = "todo-title" name = "title" value = {this.state.activeItem.title} onChange = {this.handleChange} placeholder = "Enter when it is appropriate"/>
                        </FormGroup>
                        <FormGroup>
                            <label for = "todo-description">Exquisite description</label>
                            <Input type = "text" id = "todo-description" name = "description" value = {this.state.activeItem.description} onChange = {this.handleChange} placeholder = "Enter the best description"/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type = "checkbox" name = "completed" checked = {this.state.activeItem.completed} onChange = {this.handleChange}/>
                                Completed
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color = "success" onClick = {() => onSave(this.state.activeItem)}>Save</Button>
                </ModalFooter>
            </Modal>
        );
    }
}