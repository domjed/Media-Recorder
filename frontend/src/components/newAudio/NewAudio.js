import React, { Component } from 'react';
import axios from 'axios';

import { NEW_AUDIO_TITTLE } from '@shared/Constants';
import { RecordingContainer } from './RecordingContainer';
import { StyledButton } from '@shared/components/StyledButton';
import {
    POST_ERROR_MESSAGE, POST_SUCCESS_MESSAGE, RECORDING_ERROR_MESSAGE
} from "@shared/Constants";
import { StyledErrorMessage } from "@shared/components/StyledErrorMessage";

export default class NewAudio extends Component {
    /** Main new audio component */
    constructor() {
        super();
        this.state = {
            isRecording: false,
            isError: false,
            mediaRecorder: {}
        }
    };

    handleStartRecording = () => {
        /** Record audio and send it to backend */
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                this.setState({ isRecording: true });
                this.state.mediaRecorder = new MediaRecorder(stream);
                this.state.mediaRecorder.start();
                this.setState({ isError: false });
                let audioChunks = [];
                this.state.mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                this.state.mediaRecorder.addEventListener("stop", () => {
                    if (audioChunks.length !== 0) {
                        const audioBlob = new Blob(audioChunks);
                        let audioFile = new File([audioBlob], "Audio.wav");
                        let formData = new FormData();
                        const url = process.env.REACT_APP_RECORDING_LIST_PATH;
                        formData.append('recording_audio_path', audioFile);

                        axios.post(url, formData).then(response => {
                            if (response.status >= 200 && response.status < 300) { alert(POST_SUCCESS_MESSAGE) }
                            else { alert(POST_ERROR_MESSAGE) }
                        }).catch(() => { alert(POST_ERROR_MESSAGE) })
                    }
                    else this.setState({ isError: true });
                });
            })
            .catch(() => { this.setState({ isError: true }) })
    }

    handleStopRecording = () => {
        this.setState({ isRecording: false });
        this.state.mediaRecorder.stop();
    };

    render() {
        return (
            <RecordingContainer>
                <h3>
                    {NEW_AUDIO_TITTLE}
                </h3>
                {this.state.isError && <StyledErrorMessage>{RECORDING_ERROR_MESSAGE}</StyledErrorMessage>}
                <div>
                    <StyledButton disabled={this.state.isRecording} onClick={this.handleStartRecording} id="startRecording"> Start Recording</StyledButton>
                    <StyledButton disabled={!this.state.isRecording} onClick={this.handleStopRecording} id="stopRecording"> Stop Recording</StyledButton>
                </div>
            </RecordingContainer >
        );
    }
}
