
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import ReactCSS from 'reactcss'; // require order matters!
import ColorPicker from "react-color";
export default class InterpreterTypeSelector extends ReactCSS.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: false, aslData: "default", color: "rgba(153,204,153, 0.8)" }
  }


  classes() {
    return {
      "asl-true": {
        aslButton: {
          // : "success"
          backgroundColor: this.state.color
        }
      },

      "lep-true": {
        lepButton: {
          // : "success"
          backgroundColor: this.state.color
        }
      }
    }
  }



  showLepData() {
    this.setState({ isLoading: true });
    this.props.sendDataSelection("lep");
    // This probably where you would have an `ajax` call
    setTimeout(() => {
     // Completed of async action, set loading state back

       this.setState({isLoading: false});
     }, 250);
  }

  showAslData() {
    this.setState({ isLoading: true });
    this.props.sendDataSelection("asl");
    // This probably where you would have an `ajax` call
    setTimeout(() => {
     // Completed of async action, set loading state back


       this.setState({isLoading: false});
     }, 250);

  }

  render() {
    let isLoading = this.state.isLoading;
    return (
      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button is="aslButton" disabled={isLoading} onClick={!isLoading ? this.showAslData.bind(this) : null} ref="asl" >American Sign Language</Button>
          <Button is="lepButton" disabled={isLoading} onClick={!isLoading ? this.showLepData.bind(this) : null} ref="lep" >Limited English Language</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}
