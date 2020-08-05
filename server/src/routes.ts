import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: string;
    from: string;
    to: string;
}

routes.post('/classes', );

export default routes;