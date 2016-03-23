import ReactCSS from 'reactcss';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Panel from 'react-bootstrap/lib/Panel';

export default class CredentialLevelFilter extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        spacer: {
          padding: "25px 0"
        }
      }
    }
  }

  render() {

    return (
      <div>
        <div is="spacer">
          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Button>Sign Language</Button>
              <Button>Limited English Language</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>

        <Panel footer="This + means a higher credential level (advanced/certified)">
          <ButtonGroup>
            <Button disabled>ALS</Button>
            <Button disabled>ALS+</Button>
            <Button>LEP</Button>
            <Button>LEP+</Button>
          </ButtonGroup>
        </Panel>

      <hr/>

    </div>
    )
  }
}
