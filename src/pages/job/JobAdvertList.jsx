import React, { useEffect, useState } from 'react'
import JobAdvertService from '../../services/jobAdvertService'
import { Icon, Table } from "semantic-ui-react";

export default function JobAdvertList() {

    const [jobAdvert, setJobAdvert] = useState([])
    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllConfirmed().then(result => setJobAdvert(result.data.data))
    }, [])


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Open Positons</Table.HeaderCell>
                        <Table.HeaderCell>Salary</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Requirements</Table.HeaderCell>
                        <Table.HeaderCell>Remote</Table.HeaderCell>
                        <Table.HeaderCell>Active</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {

                        jobAdvert.map((job => (
                            <Table.Row key={job.id}>
                                <Table.Cell>{job.jobs.name}</Table.Cell>
                                <Table.Cell>{job.openPositions}</Table.Cell>
                                <Table.Cell>{job.salary}</Table.Cell>
                                <Table.Cell>{job.appDeadline}</Table.Cell>
                                <Table.Cell>{job.requirements}</Table.Cell>
                                <Table.Cell> {job.remote ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='close' size='large' />}</Table.Cell>
                                <Table.Cell> {job.active ? <Icon color='green' name='checkmark' size='large' /> : <Icon color='red' name='close' size='large' />}</Table.Cell>

                            </Table.Row>

                        )))
                    }


                </Table.Body>


            </Table>
        </div>
    )
}