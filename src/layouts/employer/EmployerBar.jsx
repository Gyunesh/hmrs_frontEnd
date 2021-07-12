import React from 'react'
import { Menu } from 'semantic-ui-react'
import JobAdvertAdd from '../../pages/job/JobAdvertAdd'
export default function EmployerBar() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item name='Create Job Posting' />
                <JobAdvertAdd />
                <Menu.Item name='Some' />
                <Menu.Item name='Other' />


            </Menu>
        </div>
    )
}