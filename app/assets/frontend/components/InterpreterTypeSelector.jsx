import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

export default class InterpreterTypeSelector extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button>Sign Language</Button>
          <Button>Limited English Language</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
