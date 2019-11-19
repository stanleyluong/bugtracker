import React from 'react'
import BugList from './BugList'
import Search from './Search'
import 'semantic-ui-css/semantic.min.css'
import '../css/BugContainer.css'
import NewBug from './NewBug'
class BugContainer extends React.Component{
    state = {
        searchText: ""
      }

    handleChange = (searchText) => {
        this.setState({
            searchText
        })
    }
   
    render(){
        const re = new RegExp(this.state.searchText, "i");
        const bugs = this.props.bugs.filter((bug) => {
            return re.test(bug.id) 
            || re.test(bug.name)
            || re.test(bug.priority)
            || re.test(bug.project)
            || re.test(bug.status)
            || re.test(bug.description)
            || re.test(bug.opened)
            || re.test(bug.closed)
            || re.test(bug.age)
            || re.test(bug.submitted_by)
            || re.test(bug.location)
        })
        
        return(
            <div className="project-container-div">
                <Search onChange={this.handleChange}/>
                <NewBug addBug={this.props.addBug} jwt={this.props.jwt} project={this.props.project}/>
                <BugList 
                bugs={bugs} 
                users={this.props.users}
                projects={this.props.projects}
                user_bugs={this.props.user_bugs}
                handleChangeStatus={this.props.handleChangeStatus}
                handleChangePriority={this.props.handleChangePriority}
                handleChangeOpened={this.props.handleChangeOpened}
                handleChangeClosed={this.props.handleChangeClosed}
                handleChangeProject={this.props.handleChangeProject}
                handleChangeDescription={this.props.handleChangeDescription}
                handleChangeName={this.props.handleChangeName}
                handleChangeSubmittedBy={this.props.handleChangeSubmittedBy}
                handleChangeLocation={this.props.handleChangeLocation}
                handleChangeAssignedTo={this.props.handleChangeAssignedTo}
                handleDeleteBug={this.props.handleDeleteBug}
                />
            </div>
        )
    }
}

export default BugContainer