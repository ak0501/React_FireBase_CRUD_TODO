const Dotenv = require('dotenv-webpack');
module.exports = () => {
    return {
        
    ...
        plugins: [
            new Dotenv({
                'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
                'process.env.REACT_APP_AUTH_DOMAIN': JSON.stringify(process.env.REACT_APP_AUTHDOMAIN),
                'process.env.REACT_APP_DATABASE_URL': JSON.stringify(process.env.REACT_APP_DATABASEURL),
                'process.env.REACT_APP_PROJECT_ID': JSON.stringify(process.env.REACT_APP_PROJECT_ID),
                'process.env.REACT_APP_STORAGE_BUCKET': JSON.stringify(process.env.REACT_APP_STORAGE_BUCKET),
                'process.env.REACT_APP_MESSAGING_SENDER_ID': JSON.stringify(process.env.REACT_APP_SENDER_ID),
                'process.env.REACT_APP_APP_ID': JSON.stringify(process.env.REACT_APP_APP_ID),
                'process.env.REACT_APP_MEASUREMENT_ID': JSON.stringify(process.env.REACT_APP_MEASUREMENT_ID)
                
            })
        ],
    ...  
    };
        
  };
