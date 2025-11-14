import api from './api';
export const createBooking = (data) => api.post('/booking', data).then(r=>r.data);
export const listBookings = ()=> api.get('/booking').then(r=>r.data);
