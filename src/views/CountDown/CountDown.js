import React from "react";
import { useState, useEffect } from "react";

class CountDown extends React.Component {
  state = {
    count: 10,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.count > 0) {
        this.setState((prevState) => ({
          count: prevState.count - 1,
        }));
      } else {
        clearInterval(this.timer);
        this.props.onTimeUp();
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimeUp();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>{count} hooks</div>;
};

export { CountDown, NewCountDown };
