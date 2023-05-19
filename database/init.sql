DROP DATABASE IF EXISTS chairbnb;
CREATE DATABASE chairbnb;
\c chairbnb;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS listings CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS amenity_types CASCADE;
DROP TABLE IF EXISTS amenities CASCADE;
DROP TABLE IF EXISTS listing_amenities CASCADE;
DROP TABLE IF EXISTS hosts CASCADE;
DROP TABLE IF EXISTS listing_photos CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY,
    fname text NOT NULL,
    lname text NOT NULL,
    email text NOT NULL UNIQUE,
    password TEXT NOT NULL,
    photo_url text
);

CREATE TABLE hosts(
    id serial PRIMARY KEY,
    userId integer NOT NULL,
    about text NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE locations(
    id serial PRIMARY KEY,
    latitude float NOT NULL,
    longitude float NOT NULL
);

CREATE TABLE listings (
    id serial PRIMARY KEY,
    title text,
    description text,
    price integer,
    locationid integer NOT NULL,
    hostId integer NOT NULL,
    FOREIGN KEY (hostId) REFERENCES hosts(id),
    FOREIGN KEY (locationid) REFERENCES locations(id)
);

CREATE TABLE listing_photos(
    id serial PRIMARY KEY,
    listingId integer NOT NULL,
    photo_url text NOT NULL,
    FOREIGN KEY (listingId) REFERENCES listings(id)
);

CREATE TABLE bookings (
    id serial PRIMARY KEY,
    listingId integer NOT NULL,
    userId integer NOT NULL,
    startDate date NOT NULL,
    endDate date NOT NULL,
    numGuests integer NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (listingId) REFERENCES listings(id)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    listingId integer NOT NULL,
    userId integer NOT NULL,
    rating integer NOT NULL,
    cleanliness integer NOT NULL,
    communication integer NOT NULL,
    checkin integer NOT NULL,
    accuracy integer NOT NULL,
    location integer NOT NULL,
    value integer NOT NULL,
    review text,
    bookingId integer NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (listingId) REFERENCES listings(id),
    FOREIGN KEY (bookingId) REFERENCES bookings(id)
);

CREATE TABLE amenity_types(
    id serial PRIMARY KEY,
    amenity_type text NOT NULL
);

CREATE TABLE amenities(
    id serial PRIMARY KEY,
    amenity text NOT NULL,
    typeId integer NOT NULL,
    FOREIGN KEY (typeId) REFERENCES amenity_types(id)
);

CREATE TABLE listing_amenities(
    id serial PRIMARY KEY,
    listingId integer NOT NULL,
    amenityId integer NOT NULL,
    FOREIGN KEY (listingId) REFERENCES listings(id),
    FOREIGN KEY (amenityId) REFERENCES amenities(id)
);

INSERT INTO locations (latitude, longitude) VALUES (48.230164, -101.291199);
INSERT INTO locations (latitude, longitude) VALUES (40.7128, -74.0060);
INSERT INTO locations (latitude, longitude) VALUES (51.5074, -0.1278);
INSERT INTO locations (latitude, longitude) VALUES (35.6895, 139.6917);


INSERT INTO amenity_types (amenity_type) VALUES ('Not Included');
INSERT INTO amenity_types (amenity_type) VALUES ('Services');
INSERT INTO amenity_types (amenity_type) VALUES ('Parking and Facilities');
INSERT INTO amenity_types (amenity_type) VALUES ('Outdoor Features');
INSERT INTO amenity_types (amenity_type) VALUES ('Kitchen and Dining');
INSERT INTO amenity_types (amenity_type) VALUES ('Internet and Office');
INSERT INTO amenity_types (amenity_type) VALUES ('Privacy and Safety');
INSERT INTO amenity_types (amenity_type) VALUES ('Heating and Cooling');
INSERT INTO amenity_types (amenity_type) VALUES ('Entertainment');
INSERT INTO amenity_types (amenity_type) VALUES ('Bedroom and Laundry');
INSERT INTO amenity_types (amenity_type) VALUES ('Bathroom');
INSERT INTO amenity_types (amenity_type) VALUES ('Special Features');
INSERT INTO amenity_types (amenity_type) VALUES ('Accessibility');
INSERT INTO amenity_types (amenity_type) VALUES ('Miscellaneous');

INSERT INTO amenities (amenity, typeId) VALUES ('Air conditioning', 8);
INSERT INTO amenities (amenity, typeId) VALUES ('Heating', 8);
INSERT INTO amenities (amenity, typeId) VALUES ('Indoor fireplace', 8);
INSERT INTO amenities (amenity, typeId) VALUES ('Dryer', 10);
INSERT INTO amenities (amenity, typeId) VALUES ('Washer', 10);
INSERT INTO amenities (amenity, typeId) VALUES ('Iron', 10);
INSERT INTO amenities (amenity, typeId) VALUES ('Hair dryer', 10);
INSERT INTO amenities (amenity, typeId) VALUES ('Hangers', 10);
INSERT INTO amenities (amenity, typeId) VALUES ('Shampoo', 11);
INSERT INTO amenities (amenity, typeId) VALUES ('Bed linens', 11);
INSERT INTO amenities (amenity, typeId) VALUES ('Extra pillows and blankets', 11);
INSERT INTO amenities (amenity, typeId) VALUES ('Ethernet connection', 6);
INSERT INTO amenities (amenity, typeId) VALUES ('Pocket wifi', 6);
INSERT INTO amenities (amenity, typeId) VALUES ('TV', 9);
INSERT INTO amenities (amenity, typeId) VALUES ('Cable TV', 9);
INSERT INTO amenities (amenity, typeId) VALUES ('Fire extinguisher', 7);
INSERT INTO amenities (amenity, typeId) VALUES ('Carbon monoxide detector', 7);
INSERT INTO amenities (amenity, typeId) VALUES ('Smoke detector', 7);
INSERT INTO amenities (amenity, typeId) VALUES ('First aid kit', 7);
INSERT INTO amenities (amenity, typeId) VALUES ('Private entrance', 7);
INSERT INTO amenities (amenity, typeId) VALUES ('Free street parking', 3);
INSERT INTO amenities (amenity, typeId) VALUES ('Paid parking on premises', 3);
INSERT INTO amenities (amenity, typeId) VALUES ('Paid parking off premises', 3);
INSERT INTO amenities (amenity, typeId) VALUES ('Elevator', 3);
INSERT INTO amenities (amenity, typeId) VALUES ('Hot tub', 4);
INSERT INTO amenities (amenity, typeId) VALUES ('Pool', 4);
INSERT INTO amenities (amenity, typeId) VALUES ('Kitchen', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Breakfast', 2);
INSERT INTO amenities (amenity, typeId) VALUES ('Coffee maker', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Cooking basics', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Dishes and silverware', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Dishwasher', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Microwave', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Refrigerator', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Oven', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Stove', 5);
INSERT INTO amenities (amenity, typeId) VALUES ('Wifi', 6);
INSERT INTO amenities (amenity, typeId) VALUES ('Laptop friendly workspace', 6);
INSERT INTO amenities (amenity, typeId) VALUES ('Gym', 4);
INSERT INTO amenities (amenity, typeId) VALUES ('Pets allowed', 1);
INSERT INTO amenities (amenity, typeId) VALUES ('Smoking allowed', 1);
INSERT INTO amenities (amenity, typeId) VALUES ('Events allowed', 1);
INSERT INTO amenities (amenity, typeId) VALUES ('Long term stays allowed', 1);

INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Archibald', 'McTickleberry', 'bartholomew.mctickleberry@gmail.com', 'password', 'https://a0.muscache.com/im/pictures/user/cd1c0777-f3b3-40a3-8dab-c96a5cd2efef.jpg?im_w=240');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Hortense', 'Wigglesworth', 'hortense.wigglesworth@gmail.com', 'password', 'https://a0.muscache.com/im/pictures/user/c53ca4c0-af8f-4ba0-b82c-9711efc1cc68.jpg?im_w=240');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Cornelius', 'Snickerwhiskers', 'cornelius.snickerwhiskers@gmail.com', 'password', 'https://a0.muscache.com/im/pictures/user/e2d7271a-8691-41c3-931f-dc6592e12eb0.jpg?im_w=240');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Prudence', 'Bumbleberry', 'prudence.bumbleberry@gmail.com', 'password', 'https://a0.muscache.com/im/pictures/user/cc795c01-e0a1-4ac4-849c-85c2ca70afee.jpg?im_w=240');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Gertrude', 'Wobblepants', 'archibald.wobblepants@gmail.com', 'password','https://a0.muscache.com/im/pictures/user/b4a23251-d713-468d-840b-4081b9e6c615.jpg?im_w=240');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Clementine', 'Fluffernutter', 'clementine.fluffernutter@gmail.com', 'password','https://a0.muscache.com/im/pictures/user/de6eac7b-3b86-4e63-8841-a44296af3446.jpg?im_w=240');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Mortimer', 'Wigglebottom', 'mortimer.wigglebottom@gmail.com', 'password','https://marvel-b1-cdn.bc0a.com/f00000000166018/www.analysisgroup.com/globalassets/content/experts_and_staff/managing_principals/mortimer_richard.jpg');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Rick', 'Sanchez', 'rick.sanchez@gmail.com', 'password', 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NjQ2NjMyODQ1OTQ0MTg2/rick-sanchez-character-analysis-not-a-nihilist-but-a-cynic.webp');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Morty', 'Smith', 'morty.smith@gmail.com', 'password', 'https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Summer', 'Smith', 'summer.smith@gmail.com', 'password', 'https://static.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest/scale-to-width-down/328?cb=20160919183158');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Beth', 'Smith', 'beth.smith@gmail.com', 'password', 'https://static.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest/scale-to-width-down/350?cb=20191122063320');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Jerry', 'Smith', 'jerry.smith@gmail.com', 'password', 'https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest/scale-to-width-down/340?cb=20160923151111');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Mr.', 'Poopybutthole', 'mr.poopybutthole@gmail.com', 'password', 'https://static.wikia.nocookie.net/rickandmorty/images/3/37/Mr_poopy_butthole.png/revision/latest/scale-to-width-down/171?cb=20150819161234');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Bird', 'Person', 'bird.person@gmail.com', 'password', 'https://static.wikia.nocookie.net/rickandmorty/images/c/cb/NewBirdPerson.jpeg/revision/latest/scale-to-width-down/301?cb=20210810091013');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Squanchy', 'Smith', 'squanchy@gmail.com', 'password', 'https://static.wikia.nocookie.net/rickandmorty/images/1/16/Squanchy_.png/revision/latest/scale-to-width-down/276?cb=20160830140218');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Stan', 'Smith', 'stan.smith@cia.com', 'password', 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Stan-Smith.American-Dad.webp');
INSERT INTO users(fname, lname, email, password, photo_url) VALUES ('Homer', 'Simpson', 'homer.simpson@gmail.com', 'password', 'https://www.bodymedia.de/fileadmin/news_import/homer-simpson.jpg');

INSERT INTO hosts(userId, about) VALUES (1, 'Why not Minot. Freezins the reason.');
INSERT INTO hosts(userId, about) VALUES (2, 'I never sleep just like New York City.');
INSERT INTO hosts(userId, about) VALUES (3, 'I am a yoga teacher, healer and travel writer who loves Hackney, but especially Chatsworth Rd, the best place in the world to live or stay! I ran Hackney Homemade market and Hackney Heart cafe, have written many books about worldwide destinations and have a magazine, Eat Drink Travel. Having travelled solo a lot, I know how important a safe, happy, friendly place to stay is and hope I offer that to my lovely guests.');
INSERT INTO hosts(userId, about) VALUES (4, 'My hobby is posting high fantasy stories written by an AI chatbot, with AI-generated images as illustrations and AI-generated music as accompaniment. Additionally, I offer web skills through membership on my blog. My goal as an Airbnb host is to create a home away from home for my guests. From personalized recommendations to thoughtful touches, I aim to provide a comfortable and unforgettable stay that exceeds their expectations.');

INSERT INTO listings(title, description, price, locationid, hostId) VALUES ('2 Bedroom House near Minot AFB', 'Historic House in downtown Minot', 100, 1, 1);
INSERT INTO listings(title, description, price, locationid, hostId) VALUES ('1 Bedroom Apartment near Times Square', 'Conveniently located apartment', 200, 2, 2);
INSERT INTO listings(title, description, price, locationid, hostId) VALUES ('2 Bedroom flat near Kings Crossing', 'Quaint flat in the heart of London', 300, 3, 3);
INSERT INTO listings(title, description, price, locationid, hostId) VALUES ('2 Bedroom Apartment near Tokyo Disneyland', '5 min walk from trainstation to Tokyo Disneyland', 400, 4, 4);

INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 1);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 2);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 3);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 4);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 5);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 6);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 7);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 8);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 9);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 10);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 11);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 12);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 13);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 14);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 15);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 16);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 17);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 18);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 19);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 20);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 21);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 22);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 23);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 24);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 25);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 26);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 27);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 28);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 29);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 30);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 31);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 32);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 33);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 34);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 35);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 36);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (1, 37);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 1);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 2);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 3);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 4);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 5);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 6);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 7);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 8);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 9);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 10);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 11);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 12);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 13);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 14);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 15);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 16);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 17);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 18);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 19);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 20);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 21);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 22);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 23);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 24);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 25);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 26);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (2, 27);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 1);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 2);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 3);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 4);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 5);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 6);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 7);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 8);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 9);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 10);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 11);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 12);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 13);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 14);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 15);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 16);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 17);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 18);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 19);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 20);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 21);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 22);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 23);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 24);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (3, 25);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 1);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 2);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 3);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 4);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 5);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 6);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 7);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 8);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 9);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 10);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 11);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 12);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 13);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 14);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 15);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 16);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 17);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 18);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 19);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 20);
INSERT INTO listing_amenities(listingId, amenityId) VALUES (4, 21);

INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (1, 1, '2018-01-01', '2018-01-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (1, 2, '2018-02-05', '2018-02-09', 1);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (1, 3, '2018-03-07', '2018-03-12', 3);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (1, 4, '2018-04-01', '2018-04-05', 4);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (1, 5, '2018-05-01', '2018-05-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (1, 6, '2018-06-01', '2018-06-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (2, 7, '2020-11-01', '2020-11-06', 3);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (2, 8, '2021-02-05', '2021-02-09', 1);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (2, 9, '2021-03-07', '2021-03-12', 3);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (2, 10, '2021-04-01', '2021-04-05', 4);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (2, 11, '2021-04-10', '2021-04-13', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (2, 12, '2021-08-01', '2021-08-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (3, 17, '2022-01-01', '2022-01-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (3, 14, '2022-02-05', '2022-02-09', 1);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (3, 13, '2022-04-07', '2022-04-12', 3);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (3, 11, '2022-05-01', '2022-04-05', 4);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (3, 5, '2022-05-09', '2022-05-13', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (3, 16, '2022-06-01', '2022-06-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (4, 11, '2022-01-01', '2022-01-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (4, 15, '2022-01-05', '2022-01-09', 1);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (4, 13, '2022-03-07', '2022-03-12', 3);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (4, 5, '2022-04-01', '2022-04-05', 4);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (4, 8, '2022-05-01', '2022-05-03', 2);
INSERT INTO bookings(listingId, userId, startDate, endDate, numGuests) VALUES (4, 7, '2022-08-01', '2022-08-03', 2);

INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value, bookingId) VALUES (1, 1, 'This Minot Chairbnb was almost perfect, but I could not find the remote control to pause the beautiful North Dakota sunset. Please send a pause button ASAP!', 4, 5, 5, 5, 5, 5,5, 1);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 2, 'Everything about this Chairbnb was fantastic, except for the lack of a time machine. I did not want my North Dakota adventure to end!', 5, 5, 5, 5, 5, 5,5, 2);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 3, 'I had a fantastic time at this Chairbnb, but my GPS got so confused by the sheer vastness of North Dakota that it started suggesting detours to the moon. Lost but entertained!', 5, 5, 5, 5, 5, 5,5, 3);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 4, 'This Minot Chairbnb should come with a warning: you will be smiling so much your face might get stuck in a permanent grin. Best risk I have ever taken!', 5, 5, 5, 5, 5, 5,5, 4);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 5, 'Who needs a theme park when you have this Chairbnb in Minot? The rollercoaster ride of comfort and laughter was simply unbeatable!', 5, 5, 5, 5, 5, 5,5, 5);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 6, 'This should come with a warning sign: "Caution! Excessive comfort and delightful hospitality may cause severe addiction to the charm of North Dakota." Proceed at your own risk!', 5, 5, 5, 5, 5, 5,5, 6);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value, bookingId) VALUES (2, 7, 'Everything was perfect! The location is ideal', 4, 5, 5, 5, 5, 5,5, 7);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (2, 8, 'She is a great host. The place was perfect, the location was perfect. We didnt like that we can hear noises of people walking upstairs but it was a great place to stay.', 5, 5, 5, 5, 5, 5,5, 8);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (2, 9, 'Great location, great place, great host!', 5, 5, 5, 5, 5, 5,5, 9);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (2, 10, 'Very good host,always attentive to everything and the apartment is very clean and in a good location.', 5, 5, 5, 5, 5, 5,5, 10);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (2, 11, 'Excellent attention and clarity in the information. Always attentive.', 5, 5, 5, 5, 5, 5,5, 11);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (2, 12, 'A very clean, sufficient and cozy apartment. Also in a strategically well located area in the heart of Manhattan. Highly recommended for couples." Proceed at your own risk!', 5, 5, 5, 5, 5, 5,5, 12);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value, bookingId) VALUES (3, 11, 'Nice place to stay at Romford. Easy to find.Good locality.Amazing host', 4, 5, 5, 5, 5, 5,5, 13);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (3, 15, 'Great place. felt like home. thankyou', 5, 5, 5, 5, 5, 5,5, 14);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (3, 13, 'A lovely stay. Clean and tidy. There was a drive to park my car which was amazing, and the host was very courteous when I met him randomly. Would definitely stay again and recommend to anyone else too', 5, 5, 5, 5, 5, 5,5, 15);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (3, 5, 'The place was really really nice clean and worth the money. Ill surely book next time', 5, 5, 5, 5, 5, 5,5, 16);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (3, 8, 'A wonderful stay and an amazing host. I recommend this stay to anyone!', 5, 5, 5, 5, 5, 5,5, 17);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (3, 7, 'This should come with a warning sign: "Caution! Excessive comfort and delightful hospitality may cause severe addiction to the charm of North Dakota." Proceed at your own risk!', 5, 5, 5, 5, 5, 5,5, 18);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value, bookingId) VALUES (4, 17, 'We had a wonderful stay at Tanakas place. Tanaka was a great host, very helpful and friendly. The place itself has a unique design, is equipped with everything you need for your stay in Tokyo and the location couldnt be better by being right next to Shibuya.', 4, 5, 5, 5, 5, 5,5, 19);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (4, 14, 'This place is my favorite place to stay at ! I stayed at both places she has, this was the most wonderful stay Ive had in a long time :) beautiful neighborhood, greats walks from here to shibuya and harajuku', 5, 5, 5, 5, 5, 5,5, 20);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (4, 13, 'Great location on a quiet street with plenty of food options around the corner. 10 minutes to ebisu station. Well equipped apartment and very attentive host!', 5, 5, 5, 5, 5, 5,5, 21);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (4, 11, 'Great place to say. Located in a quiet neighborhood not far from JR or Tokyo metro. Highly recommend.', 5, 5, 5, 5, 5, 5,5, 22);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (4 ,5, 'Tanaka-San was a great host. She is always fast at response and she even helped us to move up our suitcases and also helped me to clean closes. The location is just between Ebisu and Hiroo, where there are a lot of nice restaurants and cafes.', 5, 5, 5, 5, 5, 5,5, 23);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (4, 16, 'Tanaka was a lovely host - thought of everything and was extremely helpful and prompt at resolving all our issues.', 5, 5, 5, 5, 5, 5,5, 24);

INSERT INTO listing_photos (listingId, photo_url) VALUES (1, 'https://na.rdcpix.com/625946635/a545dc497c1d4e1385851ca5e12f5a14w-c0rd-w832_h468_r4_q80.jpg');
INSERT INTO listing_photos (listingId, photo_url) VALUES (1, 'https://cdn.abcotvs.com/dip/images/895569_073115-cc-Breaking-Bad-Jesse-3.jpg');
INSERT INTO listing_photos (listingId, photo_url) VALUES (1, 'https://i.ytimg.com/vi/ZkuUC995PSw/maxresdefault.jpg');
INSERT INTO listing_photos (listingId, photo_url) VALUES (1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPZkX8EqX-UGLOK2yVqvSgDGvNBdOsPFmgA&usqp=CAU');
INSERT INTO listing_photos (listingId, photo_url) VALUES (1, 'https://apriljulia.files.wordpress.com/2012/12/screen-shot-2013-06-07-at-9-37-47-pm.png');
INSERT INTO listing_photos (listingId, photo_url) VALUES (2, 'https://a0.muscache.com/im/pictures/131b3b1e-e478-4818-aae9-a0b515676965.jpg?im_w=1200');
INSERT INTO listing_photos (listingId, photo_url) VALUES (2, 'https://a0.muscache.com/im/pictures/e33f2152-f88e-402e-a532-24bafe7c144f.jpg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (2, 'https://a0.muscache.com/im/pictures/7447c233-63d6-4218-8502-d0f87d33a873.jpg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (2, 'https://a0.muscache.com/im/pictures/6d1597c7-db26-47a5-ba0d-5b17ac195f9c.jpg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (2, 'https://a0.muscache.com/im/pictures/6dc9fdb2-1bb5-4bb8-bfd4-63923598e36f.jpg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (3, 'https://a0.muscache.com/im/pictures/miso/Hosting-754903853624638358/original/f04250f8-5169-4217-a531-6285875edfd6.jpeg?im_w=1200');
INSERT INTO listing_photos (listingId, photo_url) VALUES (3, 'https://a0.muscache.com/im/pictures/miso/Hosting-754903853624638358/original/eb7db360-fed1-4d30-96ff-db8f75a5bf14.jpeg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (3, 'https://a0.muscache.com/im/pictures/miso/Hosting-754903853624638358/original/c9a5d3ce-f88e-4d6f-96d6-6876736fd53d.jpeg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (3, 'https://a0.muscache.com/im/pictures/miso/Hosting-754903853624638358/original/ad2b0f34-5617-4a22-bf30-9fe0197ed437.jpeg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (3, 'https://a0.muscache.com/im/pictures/miso/Hosting-754903853624638358/original/5cfbe028-a4ef-401d-9778-48d25fe1091d.jpeg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (4, 'https://a0.muscache.com/im/pictures/miso/Hosting-52708981/original/f9ab4b1e-b352-4c35-8ee8-cfc265a34587.jpeg?im_w=1200');
INSERT INTO listing_photos (listingId, photo_url) VALUES (4, 'https://a0.muscache.com/im/pictures/miso/Hosting-52708981/original/a79de2fd-99b2-4bb3-b8c0-cc433317f42d.jpeg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (4, 'https://a0.muscache.com/im/pictures/miso/Hosting-52708981/original/41cfff93-ee31-417b-9763-15b3a2f42c3f.jpeg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (4, 'https://a0.muscache.com/im/pictures/miso/Hosting-52708981/original/4fb0351d-7e66-4b96-a8ab-0be2485d2529.jpeg?im_w=720');
INSERT INTO listing_photos (listingId, photo_url) VALUES (4, 'https://a0.muscache.com/im/pictures/miso/Hosting-52708981/original/cd49cfde-5457-4907-9f9c-2f27b0666415.jpeg?im_w=720');




