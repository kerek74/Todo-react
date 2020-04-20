

import React from 'react';


class TodoListFooter extends  React.Component{
	
	handleFilterChanged(e){
		this.props.onFilterChanged (e.currentTarget.dataset.value);
	}

	render(){
		let {tasks, filter, clearCompleted} = this.props;
		return (
			<div className="todolist-footer">
			<div>
				<span> { tasks.filter((t) => !t.isDone).length} items left</span>
			</div>
				<div className="buttons">
				<button className={filter == 'all' ? 'selected' : ''} data-value="all"
				onClick={this.handleFilterChanged.bind(this)}>All</button>
				<button className={filter == 'active' ? 'selected' : ''} data-value="active"
				onClick={this.handleFilterChanged.bind(this)}>Active</button>
				<button className={filter == 'completed' ? 'selected' : ''} data-value="completed"
				onClick={this.handleFilterChanged.bind(this)}>Completed</button>
			</div>
			<div>
			<button onClick={clearCompleted}>Clear Completed</button>
			</div>
			</div>
		);
	}
}

export default TodoListFooter;