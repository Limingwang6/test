SET NAMES UTF8;
DROP DATABASE IF EXISTS furniture;
CREATE DATABASE furniture CHARSET=UTF8;
USE furniture;
CREATE TABLE user(
 uid int PRIMARY KEY AUTO_INCREMENT,
 uname varchar(32)  DEFAULT"匿名用户",
 upwd varchar(32) ,
 email varchar(64) ,
 phone char(16) ,
 avatar varchar(128) default NULL,
 user_name varchar(32) ,
 gender int(11) default NULL,
 isOnline BOOL
);

INSERT INTO user VALUES
(1,"jack","123456","jack@qq.com","13588888888","image/autumn_01.jpg","窦志强","1",TRUE);
INSERT INTO user VALUES
(2,"mary","321654","mary@qq.com","15032564002","image/autumn_02.jpg","丁春秋","1",TRUE);
INSERT INTO user VALUES
(3,"rose","135790","rose@qq.com","13235487258","image/autumn_03.jpg","秦小雅","0",FALSE);
INSERT INTO user VALUES
(4,"doudou","512457","doudou@qq.com","18826450879","image/autumn_04.jpg","海贼王","1",TRUE);
INSERT INTO user VALUES
(5,"xiaobai","546515","xiaobai@qq.com","13512312312","image/autumn_05.jpg","金豆豆","0",FALSE);


CREATE TABLE furnitures(
 fid int PRIMARY KEY AUTO_INCREMENT,
 pid int default null ,
 title varchar(32) NOT NULL,
 prev_price decimal(8,2) default null,
 current_price decimal(8,2) default null,
  new_sale varchar(32) default null,
  quality varchar(32),
  spec varchar(64),
  style varchar(32),
  series varchar(16),
   sold_count int,
   count int default NULL
);

INSERT INTO furnitures VALUES('1','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','50',1);
INSERT INTO furnitures VALUES('2','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','100',1);
INSERT INTO furnitures VALUES('3','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','80',1);
INSERT INTO furnitures VALUES('4','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','60',1);
INSERT INTO furnitures VALUES('5','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('6','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('7','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('8','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('9','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('10','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('11','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('12','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('13','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('14','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('15','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('16','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('17','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('18','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('19','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('20','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('21','6','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);
INSERT INTO furnitures VALUES('22','6','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','90',1);

CREATE TABLE furniture_pic(
  pid int PRIMARY KEY AUTO_INCREMENT,
  furniture_id int(11),
  lg varchar(128 ),
  md varchar(128),
  sm varchar(128)
);

INSERT INTO furniture_pic VALUES
('1','1','../img/111554-6.jpg','../img/111551.jpg','../img/sm/111552.jpg');
INSERT INTO furniture_pic VALUES
('2','1','../img/sm/111555-6-2.jpg','../img/111555-6.jpg','../img/sm/111554-3.jpg');
INSERT INTO furniture_pic VALUES
('3','1','../img/sm/111556-1.jpg','../img/111555.jpg','../img/sm/111554-1.jpg');
INSERT INTO furniture_pic VALUES
('4','1','../img/sm/111554-2-1.jpg','../img/111555-1.jpg','../img/sm/111554-2.jpg');
INSERT INTO furniture_pic VALUES
('5','2','../img/sm/104300-5.jpg','../img/sm/104300-4.jpg','../img/sm/104300-1.jpg');
INSERT INTO furniture_pic VALUES
('6','2','../img/sm/104300-9.jpg','../img/sm/104300-7.jpg','../img/sm/104300-3.jpg');
INSERT INTO furniture_pic VALUES
('7','2','../img/sm/104300-8.jpg','../img/sm/104300-6.jpg','../img/sm/104300-2.jpg');
INSERT INTO furniture_pic VALUES
('8','2','../img/sm/104300-5.jpg','../img/sm/104300-4.jpg','../img/sm/104300-1.jpg');
INSERT INTO furniture_pic VALUES
('9','3','../img/105227-01-1.jpg','../img/105227-01.jpg','../img/105227-04-1.jpg');
INSERT INTO furniture_pic VALUES
('10','3','../img/105227-02.jpg','../img/105227-02-1.jpg','../img/105227-02-2.jpg');
INSERT INTO furniture_pic VALUES
('11','3','../img/105227-03.jpg','../img/105227-03-1.jpg','../img/105227-03-2.jpg');
INSERT INTO furniture_pic VALUES
('12','3','../img/105227-1.jpg','../img/105227-2.jpg','../img/105227-4.jpg');
INSERT INTO furniture_pic VALUES
('13','4','../img/102948-1-2.jpg','../img/102948-1-1.jpg','../img/102948-1-3.jpg');
INSERT INTO furniture_pic VALUES
('14','4','../img/102948-3-2.jpg','../img/102948-3-1.jpg','../img/102948-3-3.jpg');
INSERT INTO furniture_pic VALUES
('15','4','../img/102948-7.jpg','../img/102948-8.jpg','../img/102948-10.jpg');
INSERT INTO furniture_pic VALUES
('16','4','../img/102948-11.jpg','../img/102948-12.jpg','../img/102948-13.jpg');
INSERT INTO furniture_pic VALUES
('17','5','../img/110908-2-3.jpg','../img/110908-5.jpg','../img/110908-4.jpg');
INSERT INTO furniture_pic VALUES
('18','5','../img/110908-6.jpg','../img/110908-1-1.jpg','../img/110908-3.jpg');
INSERT INTO furniture_pic VALUES
('19','5','../img/102948-2-2.jpg','../img/110908-1.jpg','../img/110908-2-1.jpg');
INSERT INTO furniture_pic VALUES
('20','5','../img/110908-3-2.jpg','../img/110908-2.jpg','../img/110908-3-1.jpg');
INSERT INTO furniture_pic VALUES
('21','6','../img/105224-01-3.jpg','../img/105224-01-1.jpg','../img/105224-01.jpg');
INSERT INTO furniture_pic VALUES
('22','6','../img/105224-02-3.jpg','../img/105224-02-2.jpg','../img/105224-02-1.jpg');




CREATE TABLE furniture_carousel(
 cid int,
 img varchar(128)
);

INSERT INTO furniture_carousel VALUES("1","../image/autumn_01.jpg");
INSERT INTO furniture_carousel VALUES("2","../image/banner.jpg");
INSERT INTO furniture_carousel VALUES("3","../image/index.jpg");
INSERT INTO furniture_carousel VALUES("4","../image/index01.jpg");

CREATE TABLE furniture_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  furniture_id int default NULL,
  title varchar(32) NOT NULL,
  prev_price decimal(8,2) default null,
  current_price decimal(8,2) default null,
  new_sale varchar(32) default null,
  quality varchar(32),
  spec varchar(64),
  style varchar(32),
  series varchar(16),
  md varchar(128) default NULL,
  md2 varchar(128) default NULL,
  sm varchar(128) default NULL,
  expire int default NULL
);

INSERT INTO furniture_product VALUES('1','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/111554.jpg','../image/111551.jpg','../image/111550.jpg',1);
INSERT INTO furniture_product VALUES('2','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/111554.jpg','../image/111551.jpg','../image/111550.jpg',1);
INSERT INTO furniture_product VALUES('3','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/111554.jpg','../image/111551.jpg','../image/111550.jpg',0);
INSERT INTO furniture_product VALUES('4','1','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/111554.jpg','../image/111551.jpg','../image/111550.jpg',1);
INSERT INTO furniture_product VALUES('5','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/104300.jpg','../image/110191.jpg','../img/104300.jpg',1);
INSERT INTO furniture_product VALUES('6','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/104300.jpg','../image/110191.jpg','../img/104300.jpg',0);
INSERT INTO furniture_product VALUES('7','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/104300.jpg','../image/110191.jpg','../img/104300.jpg',1);
INSERT INTO furniture_product VALUES('8','2','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/104300.jpg','../image/110191.jpg','../img/104300.jpg',0);
INSERT INTO furniture_product VALUES('9','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/105227.jpg','../img/105227(1).jpg','../img/105227.jpg',1);
INSERT INTO furniture_product VALUES('10','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/105227.jpg','../img/105227(1).jpg','../img/105227.jpg',1);
INSERT INTO furniture_product VALUES('11','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/105227.jpg','../img/105227(1).jpg','../img/105227.jpg',0);
INSERT INTO furniture_product VALUES('12','3','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/105227.jpg','../img/105227(1).jpg','../img/105227.jpg',1);
INSERT INTO furniture_product VALUES('13','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/102948.jpg','../image/102948(1).jpg','../img/102948.jpg',0);
INSERT INTO furniture_product VALUES('14','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/102948.jpg','../image/102948(1).jpg','../img/102948.jpg',1);
INSERT INTO furniture_product VALUES('15','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/102948.jpg','../image/102948(1).jpg','../img/102948.jpg',1);
INSERT INTO furniture_product VALUES('16','4','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../image/102948.jpg','../image/102948(1).jpg','../img/102948.jpg',0);
INSERT INTO furniture_product VALUES('17','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/110908.jpg','../image/110908.jpg','../img/sm/110908-1.jpg',1);
INSERT INTO furniture_product VALUES('18','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/110908.jpg','../image/110908.jpg','../img/sm/110908-1.jpg',0);
INSERT INTO furniture_product VALUES('19','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/110908.jpg','../image/110908.jpg','../img/sm/110908-1.jpg',1);
INSERT INTO furniture_product VALUES('20','5','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/110908.jpg','../image/110908.jpg','../img/sm/110908-1.jpg',0);
INSERT INTO furniture_product VALUES('21','6','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/105224.jpg','../img/105224.jpg','../img/105224.jpg',1);
INSERT INTO furniture_product VALUES('22','6','Weldon 餐椅','1680','1344','New_Sale','东北桦木/平绒布/海绵/聚酯纤维','长120X宽25X高30X','自然乡村,传统经典','Tampa','../img/105224.jpg','../img/105224.jpg','../img/105224.jpg',1);

CREATE TABLE furniture_shoppingcart(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id int(11) default NULL,
  product_id int(11) default NULL,
  is_checked tinyint(1) default NULL,
  count int default NULL
);

INSERT INTO furniture_shoppingcart VALUES (1,1,1,1,1);
INSERT INTO furniture_shoppingcart VALUES (2,2,2,1,1);
INSERT INTO furniture_shoppingcart VALUES (3,3,3,0,1);
INSERT INTO furniture_shoppingcart VALUES (4,4,4,1,1);
INSERT INTO furniture_shoppingcart VALUES (5,5,5,0,1);
INSERT INTO furniture_shoppingcart VALUES (6,6,6,1,1);
INSERT INTO furniture_shoppingcart VALUES (7,7,7,0,1);
INSERT INTO furniture_shoppingcart VALUES (8,8,8,1,1);
INSERT INTO furniture_shoppingcart VALUES (9,9,9,1,1);
INSERT INTO furniture_shoppingcart VALUES (10,10,10,0,1);
INSERT INTO furniture_shoppingcart VALUES (11,11,11,1,1);
INSERT INTO furniture_shoppingcart VALUES (12,12,12,0,1);
INSERT INTO furniture_shoppingcart VALUES (13,13,13,1,1);
INSERT INTO furniture_shoppingcart VALUES (14,14,14,0,1);
INSERT INTO furniture_shoppingcart VALUES (15,15,15,1,1);
INSERT INTO furniture_shoppingcart VALUES (16,16,16,1,1);
INSERT INTO furniture_shoppingcart VALUES (17,17,17,1,1);
INSERT INTO furniture_shoppingcart VALUES (18,18,18,0,1);
INSERT INTO furniture_shoppingcart VALUES (19,19,19,1,1);
INSERT INTO furniture_shoppingcart VALUES (20,20,20,0,1);
INSERT INTO furniture_shoppingcart VALUES (21,21,21,1,1);
INSERT INTO furniture_shoppingcart VALUES (22,22,22,0,1);