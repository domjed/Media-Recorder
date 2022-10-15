import React from 'react';

import { APP_TITTLE, APP_DESCRIPTION } from '@shared/Constants';
import { StyledButton } from '@shared/components/StyledButton';

export default function MainMenu() {
    /** Main menu for main page shown in a browser */
    return (<div className="p-3 container">

        <h3 className="m-3 d-flex justify-content-center">
            {APP_TITTLE}
        </h3>

        <h5 className="m-3" >
            {APP_DESCRIPTION}
        </h5>
        <StyledButton href="/new-audio">New Audio</StyledButton>
        <StyledButton href="/audio-history">Old Recordings</StyledButton>
    </div>)
}

