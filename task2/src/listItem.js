import React, { Component } from 'react';

class ListItem extends Component {
    constructor (props) {
        super(props);

        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleFinished () {
        var status = this.props.item.status;

        status = (status === 0 ? 1 : 0);

        var obj = {
            id: this.props.item.id,
            name: this.props.item.name,
            status: status
        }

        this.props.finishedChange(obj); //执行父组件传来的方法
    }

    handleDelete () {
        this.props.totalChange(this.props.item); //执行父组件传来的方法
    }

    render () {
        const item = this.props.item;

        const unfinish = {
            backgroundColor: '#ffff',
            color: '#394D17',
        };

        const finish = {
            backgroundColor: '#98F898',
            color: '#2E8B57',
            textDecoration: 'line-through'
        }
        var nameStyle = {
            marginLeft: '-6px'
        };
        var itemStyle = item.status === 0 ? unfinish : finish;
        return (
            <li key={item.id} style={itemStyle}>
                <span>
                    <input type="checkbox" onClick={this.handleFinished}
                           id={item.id}
                           className="check-btn"
                           style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
                    />
                </span>
                <span style={nameStyle}>{ item.name }</span>
                <span onClick={this.handleDelete} className="delete-btn">删除</span>
            </li>
        );
    }
}

export default ListItem;



