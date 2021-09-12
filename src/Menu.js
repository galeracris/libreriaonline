import React from 'react';
import Search from './Search';
import './Menu.css';
import PanelAdd from './PanelAdd';
 
class Menu extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {newPanel: false};
        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    add(){
     this.setState({newItemPanel: true});   
    }

    onCancel(){
        this.setState({newItemPanel : false});
    }
    
    render(){
    return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>

                    <div className="search">
                        <Search />
                    </div>

                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">+ Añadir nuevo libro</button>
                    </div>
                </div>
                { (this.state.newPanel) ? <PanelAdd oncancel={this.onCancel} /> : ''
                }

            </div>
        );    
    }
}

export default Menu;