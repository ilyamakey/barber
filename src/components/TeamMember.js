import React from 'react';

function TeamMember(props) {
    return (
        <section className="member">
            <img src={props.img} alt={props.alt} width="270px" height="350px" className="member__img"/>
            <section className="member__description">
                <h4 className="member__name">test name</h4>
                <p className="member__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In optio provident vero! Aliquid eius repudiandae saepe velit
                    voluptas!</p>
            </section>
        </section>
    )
}

export default TeamMember;