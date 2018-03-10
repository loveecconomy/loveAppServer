require('dotenv').config();//instatiate environment variables

CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'postgres';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'test1';
CONFIG.db_user      = process.env.DB_USER       || 'local_admin';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'Cisco_980';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

CONFIG.database_url = 'postgres://bzxgxsdsqtevki:b38eda6834dbef855bd58c63b83b78147da87faff1885c890bbe7adfdf3f5a2b@ec2-50-16-217-122.compute-1.amazonaws.com:5432/d3shb3oc95cbml'
