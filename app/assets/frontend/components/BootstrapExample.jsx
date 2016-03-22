import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Panel from 'react-bootstrap/lib/Panel';


export default class BootstrapExample extends React.Component {
  render() {
    return (
      <div>
      <ButtonGroup>
        <Button>Sign Language</Button>
        <Button>Limited English Language</Button>
      </ButtonGroup>
      <hr/>
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
