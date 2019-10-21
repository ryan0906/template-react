import axios from 'axios';

const client = axios.create({});

const request = (args: any) => {
    const onSuccess = function(res: any) {
        if (res && res !== undefined) {
            return res.data;
        }
    };
    return client(args).then(onSuccess);
  };
export default request;

