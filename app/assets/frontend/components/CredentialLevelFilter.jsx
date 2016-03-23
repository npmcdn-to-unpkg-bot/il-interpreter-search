import ReactCSS from 'reactcss';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Panel from 'react-bootstrap/lib/Panel';



export default class CredentialLevelFilter extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        box: {
          background: "#123412",
          padding: "20px"
        }
      }
    }
  }



  render() {
    return (
      <div>
        <div is="box">
          <ButtonGroup>
            <Button>Sign Language</Button>
            <Button>Limited English Language</Button>
          </ButtonGroup>
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
