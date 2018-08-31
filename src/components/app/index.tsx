import * as publicIp from "public-ip";
import * as React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {

  Navbar,
  NavbarBrand,

} from "reactstrap";

interface IAppStates {
  publicIp: string
}

class App extends React.Component<any, IAppStates> {
  constructor(props:any) {
    super(props)
    this.state = {
      publicIp: ""
    }
  }

  public componentDidMount() {
    publicIp.v4().then(ip => {
      this.setState({ publicIp: ip })
      
  });
  }


  public render() {
    return (
      <div className="App container">
        <Navbar color="light" light={true} expand="md" className="mb-3">
          <LinkContainer to="/">
            <NavbarBrand>Awesome Test Page :) - {this.state.publicIp}</NavbarBrand>
          </LinkContainer>
        </Navbar>
      </div>
    )
  }
}

export default App;

