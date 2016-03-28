import ReactCSS from "reactcss";
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import color from "color";

export default class InterpreterTypeSelector extends ReactCSS.Component {
  classes() {
    return {
      'default': {
        box: {
          backgroundColor: "#057",
          color: "#FFF"
        },
        activetest: {
          border: "1px solid",
          borderColor: color('#2ECC40').alpha(0.5).lighten(0.5).hexString()
        },
        Button: {
          borderColor: color('#2ECC40').alpha(0.5).lighten(0.5).hexString()
        }
      }
    }
  }

  mockState() {
    return 'success';
  }

  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button>Sign Language</Button>
          <Button bsStyle={this.mockState()}>Limited English Language</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
