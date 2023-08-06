import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify';

const awsmobile = {
    "aws_project_region": "us-east-2",
    "aws_cloud_logic_custom": [
        {
            "name": "animals",
            "endpoint": "https://d5zvjwth47.execute-api.us-east-2.amazonaws.com/main",
            "region": "us-east-2"
        },
        {
            "name": "api9813d66c",
            "endpoint": "https://8lqy3gani8.execute-api.us-east-2.amazonaws.com/main",
            "region": "us-east-2"
        }
    ],
    "aws_cognito_identity_pool_id": "us-east-2:be9c4cab-2e6c-4dec-8878-3cc6c8eb2e71",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_EZlvR877U",
    "aws_user_pools_web_client_id": "6jsb8502fnl6vqrs83n6fns3mg",
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};
Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
