import React, { Component } from 'react';

class Header extends Component {
    state = {
        isScroll : false
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () =>{
        if(Number(window.scrollY.toString()) >= 50)
            this.setState({isScroll : true})
        else
            this.setState({isScroll : false})
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isScroll 
                    ? <style dangerouslySetInnerHTML={{__html: `
                        .nav{
                            border-bottom: 1px solid rgba(33,37,41,.1);
                            background-color: #fff;
                            transition: .3s background-color;
                        }
                        #brand{
                            color:#f05f40;
                            cursor:pointer;
                        }
                        #menu li{
                            color: #212529;
                            cursor:pointer;
                        }
                        #menu li:hover{
                            color:#f05f40;
                        }
                    `}}/>
                    : ''
                }
                <header className="nav container">
                    <div className="d-flex flex-space-between">
                        <a id="brand">START BOOTSTRAP</a>
                        <ul className="d-flex margin-none" id="menu">
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </header>
                <div id="bg" className="masthead">
                    <div className="container auto">
                        <h1 className="text-white title">
                            <strong>YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES</strong>
                        </h1>
                        <hr/>
                        <div className="container">
                            <p className="text-white">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                            <button className="btn btn-primary">FIND OUT MORE</button>
                        </div>
                    </div>
                </div>
                <div className="bg-danger get-started">
                    <div className="container auto">
                        <h2>We've got what you need!</h2>
                        <hr/>
                        <p className="text-faded">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;