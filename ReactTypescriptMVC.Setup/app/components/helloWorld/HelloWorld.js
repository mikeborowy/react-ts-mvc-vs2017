import * as React from 'react';
import imgWorld from '../../assets/world.jpg'; 

export default class HelloWorld extends React.Component {

    render(){
        let {message} = this.props;
        return (
            <div className="hello-world">
                <h1>{message}</h1>
                <img src={imgWorld} alt="World" />
            </div>
        );
    }
}

HelloWorld.propTypes = {
    message: React.PropTypes.string
};
