import { observable, computed, action } from 'mobx';

class Message {
    @observable showChat = false;

    @action
    onShowChat = () => {
        this.showChat = !this.showChat
    }
}
export default new Message()