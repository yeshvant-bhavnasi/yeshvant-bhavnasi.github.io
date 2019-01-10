create database IF NOT EXISTS blog;

ues blog;

CREATE TABLE `post` (
  `post_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `post_date` datetime NOT NULL,
  `post_content` longtext NOT NULL,
  `post_url` varchar(512) DEFAULT NULL,
  `post_thumbnail_url` varchar(512) DEFAULT NULL,
  `post_title` varchar(512) NOT NULL,
  `coments` mediumtext CHARACTER SET hp8,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='used to save each post for the blog';

INSERT INTO `blog`.`post`
(
`post_id`,
`post_date`,
`post_content`,
`post_url`,
`post_thumbnail_url`,
`post_title`,
`coments`)
VALUES
(
1,
'2018-04-20',
"When working on long running processes you have to make sure you are maintaining a data structure to save the status of the application so that on cases of exception of failures you can resolves the issue and start the process again and you can start from the same point where you have stopped reducing the redundant sub tasks i.e you have to use a resilient design pattern.",
"https://medium.com/@yeshvantbhavnas/way-to-handle-long-running-processes-86e36f15857a",
"https://cdn-images-1.medium.com/max/1000/1*_uX9L-b0WCwN9gN9jeUbGg.png",
"Way to handle long Running processes"
"no comments",
"");
INSERT INTO `blog`.`post`
(
`post_id`,
`post_date`,
`post_content`,
`post_url`,
`post_thumbnail_url`,
`post_title`,
`coments`)
VALUES
(
2,
'2017-09-28',
"Fingerprints matching have a prominent role in person identification; finding out gender from fingerprints can reduce the search space to half.",
"https://medium.com/@yeshvantbhavnas/gender-estimation-from-fingerprints-70672ff9216b",
"https://cdn-images-1.medium.com/max/1000/1*OrvdFFRfRjMjPvg7rqQgvw.jpeg",
"Gender Estimation from Fingerprints"
"no comments",
"");

