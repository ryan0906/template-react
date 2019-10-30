import { push } from 'connected-react-router';
import configStore from '../store/config';

const { store } = configStore();

const NavigateService = (url: string) => {
    store.dispatch(push(url));
}

export default NavigateService;