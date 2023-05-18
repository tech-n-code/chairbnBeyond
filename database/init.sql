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

CREATE TABLE listings (
    id serial PRIMARY KEY,
    title text,
    description text,
    price integer,
    location text,
    hostId integer NOT NULL,
    FOREIGN KEY (hostId) REFERENCES hosts(id)
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

INSERT INTO hosts(userId, about) VALUES (1, 'I am a host');
INSERT INTO hosts(userId, about) VALUES (2, 'I am a host');
INSERT INTO hosts(userId, about) VALUES (3, 'I am a host');
INSERT INTO hosts(userId, about) VALUES (4, 'I am a host');

INSERT INTO listings(title, description, price, location, hostId) VALUES ('Listing 1', 'Description 1', 100, 'Location 1', 1);
INSERT INTO listings(title, description, price, location, hostId) VALUES ('Listing 2', 'Description 2', 200, 'Location 2', 2);
INSERT INTO listings(title, description, price, location, hostId) VALUES ('Listing 3', 'Description 3', 300, 'Location 3', 3);
INSERT INTO listings(title, description, price, location, hostId) VALUES ('Listing 4', 'Description 4', 400, 'Location 4', 4);

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

INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value, bookingId) VALUES (1, 1, 'This Minot Chairbnb was almost perfect, but I could not find the remote control to pause the beautiful North Dakota sunset. Please send a pause button ASAP!', 4, 5, 5, 5, 5, 5,5, 1);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 2, 'Everything about this Chairbnb was fantastic, except for the lack of a time machine. I did not want my North Dakota adventure to end!', 5, 5, 5, 5, 5, 5,5, 2);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 3, 'I had a fantastic time at this Chairbnb, but my GPS got so confused by the sheer vastness of North Dakota that it started suggesting detours to the moon. Lost but entertained!', 5, 5, 5, 5, 5, 5,5, 3);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 4, 'This Minot Chairbnb should come with a warning: you will be smiling so much your face might get stuck in a permanent grin. Best risk I have ever taken!', 5, 5, 5, 5, 5, 5,5, 4);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 5, 'Who needs a theme park when you have this Chairbnb in Minot? The rollercoaster ride of comfort and laughter was simply unbeatable!', 5, 5, 5, 5, 5, 5,5, 5);
INSERT INTO reviews(listingId, userId, review, rating, cleanliness, communication, checkin, accuracy, location, value,bookingId) VALUES (1, 6, 'This should come with a warning sign: "Caution! Excessive comfort and delightful hospitality may cause severe addiction to the charm of North Dakota." Proceed at your own risk!', 5, 5, 5, 5, 5, 5,5, 6);


