import React, { Component } from 'react';
import classnames from 'classnames';


class FlashMessage extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {
        const { id, type, text } = this.props.message;
      //  console.log(this.props.deleteFlashMessage)
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-denger': type === 'error'
            })}>
                <button onClick={this.onClick} className="close"><span>&times;</span></button>
                {text}
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message: React.PropTypes.object.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;