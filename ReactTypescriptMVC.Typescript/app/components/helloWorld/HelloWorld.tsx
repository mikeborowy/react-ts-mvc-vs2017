import * as React from 'react';

export default class HelloWorld extends React.Component<any,any> {

    render(){
        return (
            <div className="hello-world">
                <h1>"test"</h1>
                <img src="/images/world.jpg"/>
            </div>
        );
    }
}