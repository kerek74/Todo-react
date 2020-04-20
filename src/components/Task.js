import React from 'react';


class Task extends React.Component{
			constructor(props){




				super(props);

				this.state = {
					editMode: false,
					title:props.task.title

				}
					
					

					

		 this.parentDeleteCallback = props.deleteCallback;
		 this.parentUpdateCallback = props.updateCallback;
		}

		


	deleteTask(e){
		this.parentDeleteCallback(this.props.task.id);
		
	}

		toggleTaskStatus(e){
/*
			var newTask = {
				...this.state.task,
				isDone: !this.state.task.isDone
			};

*/
			let task = {
				...this.props.task
			};
			task.isDone = !task.isDone;
			this.parentUpdateCallback(task);
			
			
		}

		saveTitle(e){
			const newTitle = e.currentTarget.value;
		}


			changeTitle(e){
				this.setState({
					title:e.currentTarget.value
				});
			}

			goToEditMode(){
				this.setState({
					editMode:true
				});
			}


			render(){
				var {isDone} = this.props.task;
				var {title} = this.state;

				var displayElement = ""
				if (this.state.editMode){
					displayElement = <input value={title} onChange = {this.changeTitle.bind(this)} onBlur = {this.saveTitle.bind(this)}/>
				}else{
					displayElement = <span onDoubleClick = {this.goToEditMode.bind(this)} >
				{title}
				</span>
				}
				



				return(
					
					  		
		  		<div className= {isDone ? ' task done' : 'task'}>
		  		<input type="checkbox" 
		  		checked={isDone} 
		  		onClick={this.toggleTaskStatus.bind(this)} />


		  		{displayElement}

		  		
		  		<span className="delete" 
		  		onClick={this.deleteTask.bind(this)}>x</span>
	  			</div>

			);
					  		
	 	}
	}
	 		
					  
					  
					

export default Task;