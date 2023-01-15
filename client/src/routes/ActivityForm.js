import { Form, Card, Container, Row } from 'react-bootstrap';
import React from 'react';
import ActivityFormComp from '../components/ActivityFormComp';

function ActivityForm({ setUpdateFlag, error, setError }) {

    return (
        <>

            <Container>
                <Row>
                    <h1 className='display-2 text-center'>Add an Activity</h1>
                </Row>
            </Container>

            <Form>

                <Container className='mt-3 pb-5'>
                    <Row xs={2}>
                        <Card className='p-4 shadow bg-body rounded mx-auto'>
                            <ActivityFormComp setUpdateFlag={setUpdateFlag} error={error} setError={setError} />
                        </Card>
                    </Row>
                </Container>

            </Form>

        </>
    )
}

export default ActivityForm;