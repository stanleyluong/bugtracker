import React, { Component } from 'react'
import { Icon, Statistic } from 'semantic-ui-react'
import { Context } from './Provider'

class StatisticExampleEvenlyDivided extends Component {

    static contextType = Context

    render(){

        let myBugs=[]
        this.context.user_bugs.forEach(user_bug=>{
            if(user_bug.user_id === this.context.userData.user.id){
                this.context.bugs.forEach(bug=>{
                    if(user_bug.bug_id === bug.id){
                        myBugs.push(bug)
                    }
                })
            }
        }) 

        return(
            <Statistic.Group size='mini' widths='four'>
                <Statistic>
                <Statistic.Value>
                <Icon name='users' />
                    {this.context.users.length}</Statistic.Value>
                <Statistic.Label>Users</Statistic.Label>
                </Statistic>

                <Statistic>
                <Statistic.Value>
                <Icon name='bug' />
                 {this.context.bugs.length}
                </Statistic.Value>
                <Statistic.Label>Total Bugs</Statistic.Label>
                </Statistic>

                <Statistic>
                <Statistic.Value>
                    <Icon name='tasks' />{this.context.projects.length}
                </Statistic.Value>
                <Statistic.Label>Projects</Statistic.Label>
                </Statistic>

                <Statistic>
                <Statistic.Value>
                <Icon name='thumbtack' />{`${myBugs.length}`}
                </Statistic.Value>
                <Statistic.Label>Your Assignments</Statistic.Label>
                </Statistic>
            </Statistic.Group>
    )
    }
}

export default StatisticExampleEvenlyDivided