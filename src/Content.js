import React from 'react';
import './content.css';

const Content = props => {
    return (
        <div className="content">
            <div className="content-container">
                <div className="content-declarative">
                    <div className="declarative-img">
                        <img src="images/icon1.png" />
                    </div>
                    <div className="declarative-title">
                        <h3>Declarative</h3>
                    </div>
                    <div className="declarative-content">
                        <p>React amkes it painless to creative inteactive UIs.</p>
                    </div>
                </div>

                <div className="content-declarative">
                    <div className="declarative-img">
                        <img src="../images/icon2.png" />
                    </div>
                    <div className="declarative-title">
                        <h3>Components</h3>
                    </div>
                    <div className="declarative-content">
                        <p>Build encapsuled components that manage their state.</p>
                    </div>
                </div>

                <div className="content-declarative">
                    <div className="declarative-img">
                        <img src="../images/icon3.png" />
                    </div>
                    <div className="declarative-title">
                        <h3>Single-Way</h3>
                    </div>
                    <div className="declarative-content">
                        <p>A set of immutable values are passed to the components'.</p>
                    </div>
                </div>

                <div className="content-declarative">
                    <div className="declarative-img">
                        <img src="../images/icon4.png" />
                    </div>
                    <div className="declarative-title">
                        <h3>JSX</h3>
                    </div>
                    <div className="declarative-content">
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
