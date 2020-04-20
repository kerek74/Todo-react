import React from 'react';
import './TodoList.css'
import Task from "./Task";



class TasksList extends React.Component{
			

		
			
			render(){
				return(
					
					<div className="tasks">
					{
						this.props.tasks.map((task, index) => {
				return <Task task={task}
							 updateCallback = {this.props.onUpdate}
							 deleteCallback = {this.props.onDelete} 
							 key={task.id}/>
						})
					}
						</div>
						
					);
			}
		}

export default TasksList;