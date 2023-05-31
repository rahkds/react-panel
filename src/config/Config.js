/*
Created by : Rahul Saini
Date : 28-Dec-2022
Purpose : Created to use .env add verify their values
(c) Copyright by Rahul Technologies Pvt Ltd.
*/
import Joi from 'joi';

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        PORT: Joi.number().default(3000),
        // PUBLIC_URL: Joi.string().allow(''),
        REACT_APP_ADMIN_URL: Joi.string(),
        // REACT_APP_GOOGLE_CALLBACK: Joi.string(),
        // REACT_APP_CMS_URL: Joi.string(),
        // REACT_APP_BONUS_MS_BASEURL : Joi.string().required(),
        // REACT_APP_PROMOTION_URL: Joi.string()
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export default {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    ADMIN_URL: envVars.REACT_APP_ADMIN_URL,
};
/*End of file*/
