INSERT INTO roles (title)
VALUES
('admin'),
('blogger');

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'mcoder@lavishweb.com', 'Miguel', 'Coder');

INSERT INTO permissions (action)
VALUES
('post'),
('manage-users');

INSERT INTO roles_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO blog_categories (label, description)
VALUES
('JavaScript', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'),
('React', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'),
('Vue', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'),
('Tech Culture', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'),
('Tech News', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'),
('Brain Health', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'),
('Cloud Services', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.');

INSERT INTO blog_posts (author_id, title, description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'Can anyone code?', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'bg1.jpg', 1, 'bg1.jpg', 'Image', 'gogo', 'gogo'),
(1, 'Using AWS S3 for storing blog images', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'bg2.jpg', 1,'bg2.jpg', 'Image', 'gogo', 'gogo'),
(1, 'Popular Porgramming Languages in 2020', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'bg3.jpg', 1,'bg3.jpg', 'Image', 'gogo', 'gogo'),
(1, 'Brain Hacks for Learning to Program', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'bg4.jpg', 1,'bg4.jpg', 'Image', 'gogo', 'gogo'),
(1, 'Software Engineer Salary in 2020', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'img01_b.png',  1,'img01_b.png', 'Image', 'gogo', 'gogo'),
(1, 'GraphQL vs REST', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'img02_b.png', 1,'img02_b.png', 'Image', 'gogo', 'gogo'),
(1, 'A Day in the Life of a Programming', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'img03_b.png', 1,'img03_b.png', 'Image', 'gogo', 'gogo'),
(1, 'Brain Hacks for Learning to Program', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'img04_b.png', 1,'img04_b.png', 'Image', 'gogo', 'gogo'),
(1, 'React vs Vue', 'Contrary to popular belief, Lorem Ipsum is not simply random text.', '', 'img05_b.png', 1,'img05_b.png', 'Image', 'gogo', 'gogo');

INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, 'Totally broooo!'),
(1, 1, 'Friggin owrsome');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1, 4),
(1, 5),
(2, 7),
(3, 4),
(3, 5),
(4, 6),
(5, 4),
(6, 1),
(6, 2),
(7, 4),
(8, 6),
(9, 2),
(9, 3);