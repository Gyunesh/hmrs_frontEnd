import React from 'react'
import Sidebar from './Sidebar'
import { Grid } from "semantic-ui-react";
import StaffList from '../pages/staff/StaffList';

import JobSeekerList from '../pages/jobseeker/JobSeekerList';
import EmployerList from '../pages/employer/EmployerList';
import { Route } from 'react-router';
import JobAdvertList from '../pages/job/JobAdvertList';
import JobAdvertDetails from '../pages/job/JobAdvertDetails';
import JobAdvertAdd from '../pages/job/JobAdvertAdd';

export default function Container() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>

                        <Route path="/home/staff" component={StaffList} />
                        <Route path="/home/employers" component={EmployerList} />
                        <Route path="/home/jobseekers" component={JobSeekerList} />
                        <Route path="/home/advert" component={JobAdvertList} />
                        <Route exact path="/home/jobadvert/:employerId" component={JobAdvertDetails} />
                        <Route path="/home/jobadvertadd" component={JobAdvertAdd} />
                        {/* <Route path="/cities" component={CityList} /> */}

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}