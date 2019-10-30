import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  setMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remainCharNum = () => {
    let num = this.props.maxChars - this.state.message.length
    return num
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
          onChange={event => this.setMessage(event)}
          value={this.state.message}
        />
        <h1>{this.remainCharNum()}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
