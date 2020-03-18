import { Component } from '@angular/core';
import { RawSource } from 'webpack-sources';

@Component({
    selector: 'app-warning-alert',
    template: `
    <p>Danger! This is your warning!</p>
    `,
    styles: [
     `
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
     `
    ]
})
export class WarningAlertComponent {
    
}