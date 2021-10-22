import React, {Component} from "react";
import '../Styles.css';

class Modal extends Component {

    state = {
        modalVisible: false
    };

    handleOnClick = () => {
        if(!this.state.modalVisible){
            this.setState({
                modalVisible: true
            });
        } else {
            this.setState({
                modalVisible: false
            });
        }
    }

    render(){
        
        if(this.state.modalVisible){
            return(
                <div>
                    <button className="open-modal-button" onClick={this.handleOnClick}>Open Modal</button>
                    <div className="modal">
                        <div className="overlay" onClick={this.handleOnClick}>
                            <div className="modal-content">
                                <h1>This is a modal.</h1>
                                <button classname="close-modal-button" onClick={this.handleOnClick}>Close Modal</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
            }else {
                return(
                    <div>
                        <button className="open-modal-button" onClick={this.handleOnClick}>Open Modal</button>
                    </div>
                )
            }
        }
    }

export default Modal;