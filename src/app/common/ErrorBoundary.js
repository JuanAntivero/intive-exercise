import React from 'react';
import './common.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidMount(){
      //Special usage for async errors
      if (this.props.error){
        this.setState({
          error: this.props.error,
          errorInfo: this.props.errorInfo
        })
      }
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
      

    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div className='error-boundary'>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normal path
      return this.props.children;
    }  
  }

  export default ErrorBoundary;