DROP DATABASE IF EXISTS bitr_db;
CREATE DATABASE bitr_db;

\c bitr_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS dislikes;
DROP TABLE IF EXISTS haters;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name TEXT,
    username TEXT not null UNIQUE,
    age INTEGER,
    email TEXT not null UNIQUE,
    photo_url VARCHAR
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_post_id INTEGER REFERENCES users(id),
    body TEXT,
    created TIMESTAMP
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_comments_id INTEGER REFERENCES users(id),
    post_comment_id INTEGER REFERENCES posts(id),
    body TEXT,
    created TIMESTAMP
);

CREATE TABLE dislikes
(
    id SERIAL PRIMARY KEY,
    dislike_user INTEGER REFERENCES users(id),
    dislike_post INTEGER REFERENCES posts(id)
);

CREATE TABLE haters
(
    id SERIAL PRIMARY KEY,
    curr_user INTEGER REFERENCES users(id),
    hater_id INTEGER REFERENCES users(id)
);
INSERT INTO users
    (name, username,age,email,photo_url)
VALUES('brutus', 'leoBrut', '27', 'brutus@pursuit.org', 'https://thumbs.dreamstime.com/z/funny-lemon-sun-glasses-14155485.jpg' ),
    ('dani', 'danidani', '26', 'danielle@pursuit.org', 'https://previews.123rf.com/images/maxsheb/maxsheb1707/maxsheb170700797/82194753-funny-lemon.jpg'),
    ('deja', 'sunshine', '50', 'deja@pursuit.org', 'https://i.pinimg.com/originals/90/8e/2e/908e2e02b27e4b02550e6e2f8c623b9a.jpg'),
    ('nilber', 'sharky', '24', 'nilber@pursuit.org', 'https://4.bp.blogspot.com/-d4U4_9VYnr0/T3CZEAYeCLI/AAAAAAAABVs/FgpS-ileFOo/s1600/Funny+Lemon+Wallpapers+4.jpg' );

INSERT INTO posts
    ( user_post_id, body,created)
VALUES(1, 'sup world', '01/12/2018'),
    (2, 'hey earth', '02/24/2019'),
    (3, 'fuuuutuuurrre', '12/25/2017'),
    (4, 'hi stars', '07/05/2018');

INSERT INTO comments
    (user_comments_id, post_comment_id, body, created )
VALUES(2, 1, 'just horrible', '01/10/2020'),
    (3, 4, 'waaaacckkkkk', '01/11/2020'),
    (4, 2, 'I just cant', '01/12/2020'),
    (1, 3, 'blaaahhh over it', '01/13/2020');
INSERT INTO dislikes
    (dislike_user,dislike_post)
VALUES(1, 1),
    (2, 1),
    (3, 1),
    (4, 1);
INSERT INTO haters
    ( curr_user, hater_id)
VALUES(1, 1),
    (2, 2),
    (3, 3),
    (4, 4);