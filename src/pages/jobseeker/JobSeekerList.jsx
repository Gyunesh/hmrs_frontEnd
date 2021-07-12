import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from "semantic-ui-react";
import JobSeekerService from '../../services/jobSeekerService';
export default function JobSeekerList() {
    const [jobseekers, setJobseekers] = useState([])

    useEffect(() => {
        let jobseekerService = new JobSeekerService()
        jobseekerService.getAll().then(result => setJobseekers(result.data.data))
    }, [])
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Birth Date</Table.HeaderCell>
                        <Table.HeaderCell>National Id</Table.HeaderCell>
                        <Table.HeaderCell>E mail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobseekers.map((seeker) => (

                            <Table.Row key={seeker.userId}>
                                <Table.Cell>{seeker.firstName}</Table.Cell>
                                <Table.Cell>{seeker.lastName}</Table.Cell>
                                <Table.Cell>{seeker.birthDate}</Table.Cell>
                                <Table.Cell>{seeker.nationalIdentity}</Table.Cell>
                                <Table.Cell>{seeker.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}