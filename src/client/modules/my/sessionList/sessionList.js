import { LightningElement, track } from 'lwc';
import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
    @track sessions = [];
    connectedCallback() {
        getSessions().then(result => {
            this.sessions = this.allSessions = result;
        });
    }
}
