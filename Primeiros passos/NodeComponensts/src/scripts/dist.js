function HelloWorld() {
  return React.createElement('h1', null, 'Hello World');
}

function Hours() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    return /*#__PURE__*/React.createElement("div", {
      className: "relogio"
    }, /*#__PURE__*/React.createElement("p", null, "agora s\xE3o ", hours, ":0", minutes));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "relogio"
    }, /*#__PURE__*/React.createElement("p", null, "agora s\xE3o ", hours, ":", minutes));
  }
}

function Container() {
  return /*#__PURE__*/React.createElement("div", {
    class: "Container"
  }, " ", /*#__PURE__*/React.createElement(HelloWorld, null), " ", /*#__PURE__*/React.createElement(Hours, null), " ");
}

ReactDOM.render( /*#__PURE__*/React.createElement(Container, null), document.getElementById('app'));
