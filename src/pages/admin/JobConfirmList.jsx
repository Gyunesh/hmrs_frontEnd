import React, { useEffect, useState } from 'react'
import JobAdvertService from '../../services/jobAdvertService'
import StaffService from '../../services/staffService'
import { Table, Button, Icon } from "semantic-ui-react";

export default function JobConfirmList() {
    let staffService = new StaffService()
    const [jobAdvert, setJobAdvert] = useState([])


    useEffect(() => {
        let jobAdvertService = new JobAdvertService()

        jobAdvertService.getAllConfirmed().then(result => setJobAdvert(result.data.data))

    }, [])


    const confirmAdvert = (advertId) => {
        let status = {
            status: { id: 1 },
            jobAdvert: { id: advertId },
            staff: { userId: 3 }
        }

        console.log(advertId)
        //employeeService.confirm(status)
    }


    return (
        <div>

            <Table celled >
                <Table.Header>
                    <Table.Row>

                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Salary</Table.HeaderCell>
                        <Table.HeaderCell>Application Date</Table.HeaderCell>


                        <Table.HeaderCell>Confirm</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {


                        jobAdvert.map((job => (
                            <Table.Row key={job.id}>
                                <Table.Cell>{job.jobAdvert?.employer?.website}</Table.Cell>
                                <Table.Cell>{job.jobAdvert?.jobs?.name}</Table.Cell>
                                <Table.Cell>{job.jobAdvert?.salary}</Table.Cell>
                                <Table.Cell>{job.jobAdvert?.appDate}</Table.Cell>
                                <Table.Cell> <Button onClick={() => confirmAdvert(job.jobAdvert?.id)}  >{job.status?.name} </Button></Table.Cell>

                            </Table.Row>

                        )))
                    }


                </Table.Body>


            </Table>
        </div>
    )
}