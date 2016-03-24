import ReactCSS from 'reactcss';
import InterpreterTypeSelector from './InterpreterTypeSelector';
import CredentialLevelSelector from './CredentialLevelSelector';

export default class DataFilters extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        spacer: {
          padding: "25px 0"          
        },
        section: {
          marginBottom: "40px"
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div is="spacer">
          <InterpreterTypeSelector />
        </div>

        <div is="spacer">
          <CredentialLevelSelector />
        </div>
      </div>
    )
  }
}
