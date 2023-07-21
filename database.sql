CREATE EXTENSION if not EXISTS "uuid-ossp";
CREATE DATABASE FormDB;

CREATE TABLE Users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_password TEXT NOT NULL
);

SELECT * FROM Users;

INSERT INTO Users(user_name,user_email,user_password)VALUES('roka','roka@gimal.com','123rd');