import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import moment from "moment";

import { GET_ERROR_MESSAGE } from "@shared/Constants";
import { AUDIO_HISTORY_TITTLE } from '@shared/Constants';
import { StyledErrorMessage } from "@shared/components/StyledErrorMessage";
import { getRecordings } from "@api/getRecordings";

export default function AudioHistory() {
    /** Get all recordings from database and present to user */

    const [recordings, setRecordings] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getRecordings().then((data) => {
            setIsError(data.isError);
            setRecordings(data.recordings)
        })
    }, []);

    return (
        <div>
            <h3 className="m-3 d-flex justify-content-center" >
                {AUDIO_HISTORY_TITTLE}
            </h3>
            <div >
                <Table responsive className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Added</th>
                            <th>Listen/Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recordings.map((recording, index) =>
                            <tr key={recording.recording_save_date}>
                                <td>Recording #{index + 1}</td>
                                <td>{moment(recording.recording_save_date).format("MMMM Do, YYYY / HH:mm:ss")}</td>
                                <td>
                                    <a href={recording.recording_audio_path} download="Audio.wav">Listen/Download</a>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
            {isError && <StyledErrorMessage>{GET_ERROR_MESSAGE}</StyledErrorMessage>}
        </div>
    )
}