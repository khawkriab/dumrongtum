import React, { Component } from 'react'
export default class AccordionGroup extends Component {
    render() {
        let data = [
            {
                title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
                content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit 
                      in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, 
                      sunt in culpa qui officia deserunt 
                      mollit anim id est laborum.`
            }, {
                title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
                content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit 
                      in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, 
                      sunt in culpa qui officia deserunt 
                      mollit anim id est laborum.`
            }, {
                title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
                content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit 
                      in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur. Excepteur 
                      sint occaecat cupidatat non proident, 
                      sunt in culpa qui officia deserunt 
                      mollit anim id est laborum.`
            }
        ];
        return (
            <Accordion data={data} />
        )
    }
}
class Accordion extends React.Component {
    componentWillMount = () => {
        let accordion = [];

        this.props.data.forEach((i) => {
            accordion.push({
                title: i.title,
                content: i.content,
                open: false
            });
        });

        this.setState({
            accordionItems: accordion
        });
    }

    click = (i) => {
        const newAccordion = this.state.accordionItems.slice();
        const index = newAccordion.indexOf(i)

        newAccordion[index].open = !newAccordion[index].open;
        this.setState({ accordionItems: newAccordion });
    }

    render() {
        const sections = this.state.accordionItems.map((i) => (
            <div key={this.state.accordionItems.indexOf(i)}>
                <div className="-q-title" onClick={this.click.bind(null, i)} >
                    <div className="arrow-wrapper">
                        <i className={i.open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"} ></i>
                    </div>
                    <span className="-q-title-text">
                        {i.title}
                    </span>
                </div>
                <div className={i.open ? "-q-content -q-content-open" : "-q-content"} >
                    <div className={i.open ? "-q-content-text -q-content-text-open" : "-q-content-text"} >
                        {i.content}
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="-q-accordion">
                {sections}
            </div>
        );
    }
}