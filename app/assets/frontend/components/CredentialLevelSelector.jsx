import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

export default class CredentialLevelSelector extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button>Master</Button>
          <Button>Advanced</Button>
          <Button>Registered</Button>
          <Button>Certified</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
