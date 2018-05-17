import React from 'react';
import TeamMember from './TeamMember';
import BreadCrumb from "./BreadCrumb";

class OurTeam extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <article className="our-team">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12"><BreadCrumb match={this.props.match}/></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="our-team__header">
                                <h1>meet our crew!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <TeamMember img={"/build/pics/crew-1.jpg"} alt={"crew member 1"}/>
                            <TeamMember img={"/build/pics/crew-2.jpg"} alt={"crew member 2"}/>
                        </div>
                        <div className="col-sm-6">
                            <TeamMember img={"/build/pics/crew-3.jpg"} alt={"crew member 3"}/>
                            <TeamMember img={"/build/pics/crew-4.jpg"} alt={"crew member 4"}/>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default OurTeam;
