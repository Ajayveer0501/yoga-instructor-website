import api from './api';
export const createOrder = (payload)=> api.post('/payment/create-order', payload).then(r=>r.data);
export const verifyPayment = (payload)=> api.post('/payment/verify', payload).then(r=>r.data);
