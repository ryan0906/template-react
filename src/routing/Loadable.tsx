import ReactLoadable from 'react-loadable';

const Loadable = (loader: any) => ReactLoadable({
    loader: loader,
    // loading: () => null
    loading() {
        return null;
    }
});

export default Loadable;