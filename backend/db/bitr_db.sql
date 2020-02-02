DROP DATABASE IF EXISTS bitr_db;
CREATE DATABASE bitr_db;

\c bitr_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS dislikes;
DROP TABLE IF EXISTS haters;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    username TEXT not null UNIQUE,
    age INTEGER,
    email TEXT not null UNIQUE,
    photo_url TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_post_id INTEGER REFERENCES users(id),
    body TEXT,
    created TIMESTAMP
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_comments_id INTEGER REFERENCES users(id),
    post_comment_id INTEGER REFERENCES posts(id),
    body TEXT,
    created TIMESTAMP
);

CREATE TABLE dislikes (
    id SERIAL PRIMARY KEY,
    dislike_user INTEGER REFERENCES users(id),
    dislike_post INTEGER REFERENCES posts(id)
);

CREATE TABLE haters (
  id SERIAL PRIMARY KEY, 
  curr_user INTEGER REFERENCES users(id), 
  hater_id INTEGER REFERENCES users(id) 
);
