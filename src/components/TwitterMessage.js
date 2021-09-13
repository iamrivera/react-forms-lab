import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      remainingChars: this.state.remainingChars-1,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)} />
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
