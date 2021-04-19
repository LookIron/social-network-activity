import axios from 'axios';
import { ResponseRequest } from '../models/reponse';

const headers: any = { headers: { 'Content-Type': 'application/json' } };

export async function axiosPost(url: string, data: any): Promise<ResponseRequest> {
    const responseRequest: ResponseRequest = new ResponseRequest();

    await axios.post(url, data, headers).then((response: any) => {
        if (response.data != null) {
            responseRequest.data = response.data;
        } else {
            responseRequest.error = response.body.error;
        }
    }).catch((error: any) => {
        responseRequest.error = error;
    });
    return responseRequest;
}

export async function axiosGet(url: string): Promise<ResponseRequest> {
    const responseRequest: ResponseRequest = new ResponseRequest();
    await axios.get(url, headers).then((response: any) => {
        if (response.data != null) {
            responseRequest.data = response.data;
        }
        if (response.code != null) {
            responseRequest.error = response.code;
        }
    }).catch((error: any) => {
        responseRequest.error = error;
    });
    return responseRequest;
}


