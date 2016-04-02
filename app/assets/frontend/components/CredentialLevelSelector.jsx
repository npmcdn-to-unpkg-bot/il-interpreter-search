import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ReactCSS from 'reactcss';

export default class CredentialLevelSelector extends ReactCSS.Component {
  classes() {
    return {
      "default": {
        spacer: {
          paddingBottom: "20px"
        }
      }
    }
  }

  sendCredSelection(event) {
    event.preventDefault();
    this.props.sendCredSelection(this.refs.master.value);
  }

  render() {
    return (
      <div is="spacer" className="clearfix">
        <div className="right">
        <ButtonToolbar>
          <ButtonGroup bsSize="small">
            <Button ref="master" onClick={this.sendCredSelection.bind(this)} >Master</Button>
            <Button ref="advanced" onClick={this.sendCredSelection.bind(this)}>Advanced</Button>
            <Button>Registered</Button>
            <Button>Certified</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      </div>
    )
  }
}
