import ReactCSS from 'reactcss';

import BootstrapExample from './components/BootstrapExample';
import Content from './components/Content';
import DataList from './components/DataList';


let mockTitle = [
  {text: "Search the interpreter database" }
]


class Main extends ReactCSS.Component {


  classes() {
    return {
      'default': {
        box: {
          background: '#fff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, .48)'

        },
        title: {
          fontSize: '24px',
          color: '#d6d6d6'
        },
        Content: {
          type: 'modal-content',
          padding: '20px',
          box: {
            background: '#555'
          }
        },
        Example: {
          type: 'modal-example',
          padding: '30px'
        },
        BootstrapExample: {
          type:  'modal-content',
          padding: '10px'
        },
        'theme-dark': {
          box: {
            background: '#333'
          },
          title: {
            color: 'rgba(255, 255, 255, .87)'
          }
        },

        'hovered': {
          box: {
            background: 'blue'
          },
          title: {
            color: 'rgba(255, 255, 255, .87)'
          }
        }
      }
    }
  }




  render() {
    return (
      <div styles={ this.styles().modal }>
        <div styles={ this.styles().title }>{ this.props.title }</div>

        <div styles={ this.styles().box }>
          <Content is="Content" />
        </div>

        <BootstrapExample {...this.styles().BootstrapExample } />

        <DataList />
      </div>
    );
  }
}
// class Main extends ReactCSS.Component {
//   ...
//
//   render() {
//     return (
//       <div is="modal">
//         <div is="title">{ this.props.title }</div>
//         <Content is="Content" />
//       </div>
//     )
//   }
// }
//


let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById("react")
  );
}

$(documentReady);
