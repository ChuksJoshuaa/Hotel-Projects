"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeHotels1670487401008 = void 0;
class FakeHotels1670487401008 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
               insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Keeling-Beier', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 626, 'Cerrito', 'Colombia', 'http://dummyimage.com/384x390.png/5fa2dd/ffffff', 'Sundown', 'low', 2, '2022-04-24T03:52:09Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Lakin, MacGyver and Jacobi', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 784, 'Erie', 'United States', 'http://dummyimage.com/357x412.png/cc0000/ffffff', 'Russell', 'low', 1, '2022-05-13T09:15:29Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('O''Kon-Daniel', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 995, 'Muaralabuh', 'Indonesia', 'http://dummyimage.com/370x378.png/5fa2dd/ffffff', 'Spenser', 'low', 2, '2022-06-26T17:15:00Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('D''Amore and Sons', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 379, 'Kaindy', 'Kyrgyzstan', 'http://dummyimage.com/409x443.png/cc0000/ffffff', 'Packers', 'standard', 1, '2022-10-12T05:40:10Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Howe, Leffler and Streich', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 746, 'Azua', 'Dominican Republic', 'http://dummyimage.com/398x450.png/dddddd/000000', 'Knutson', 'classic', 1, '2022-02-17T14:49:04Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('White-Lubowitz', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 852, 'Seidu', 'Sierra Leone', 'http://dummyimage.com/410x444.png/dddddd/000000', 'Transport', 'standard', 1, '2022-05-05T01:33:03Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Klein-Gibson', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 465, 'Futian', 'China', 'http://dummyimage.com/422x400.png/cc0000/ffffff', 'Vermont', 'classic', 1, '2022-02-02T09:26:57Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Gerhold Group', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 271, 'Longonjo', 'Angola', 'http://dummyimage.com/393x375.png/5fa2dd/ffffff', 'Maywood', 'classic', 2, '2022-05-02T00:41:08Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Dach, Berge and Connelly', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 317, 'Itarana', 'Brazil', 'http://dummyimage.com/361x390.png/5fa2dd/ffffff', 'Twin Pines', 'low', 1, '2022-03-28T11:23:59Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kertzmann-Leuschke', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 908, 'Stylída', 'Greece', 'http://dummyimage.com/354x356.png/dddddd/000000', 'Service', 'standard', 1, '2022-05-19T12:30:16Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Schulist, O''Connell and Erdman', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 427, 'Nila Dua', 'Indonesia', 'http://dummyimage.com/438x374.png/dddddd/000000', 'Cherokee', 'low', 2, '2022-09-16T10:31:19Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Homenick Inc', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 807, 'Fresno', 'United States', 'http://dummyimage.com/352x433.png/dddddd/000000', 'Farwell', 'standard', 2, '2022-11-28T21:56:33Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Hagenes Inc', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 745, 'Santa Rita', 'Bolivia', 'http://dummyimage.com/353x441.png/dddddd/000000', 'Division', 'standard', 1, '2022-06-15T08:53:26Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Abshire-Nader', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 223, 'Skhodnya', 'Russia', 'http://dummyimage.com/422x351.png/cc0000/ffffff', 'Jackson', 'standard', 2, '2022-06-27T07:47:40Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kunde, Koepp and Jacobs', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 646, 'Reggada', 'Morocco', 'http://dummyimage.com/370x440.png/dddddd/000000', 'Eggendart', 'classic', 2, '2022-08-11T00:24:53Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Emmerich-Hand', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 857, 'Ilandža', 'Serbia', 'http://dummyimage.com/356x357.png/5fa2dd/ffffff', 'Union', 'standard', 2, '2022-07-26T15:35:02Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Homenick Group', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 912, 'Barreiros', 'Brazil', 'http://dummyimage.com/441x388.png/cc0000/ffffff', 'Roxbury', 'low', 2, '2022-09-07T03:23:02Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Mills LLC', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 593, 'Biljača', 'Serbia', 'http://dummyimage.com/446x357.png/dddddd/000000', 'Golf Course', 'standard', 2, '2022-12-02T16:23:11Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Fritsch-Lockman', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 261, 'Jatisari', 'Indonesia', 'http://dummyimage.com/415x408.png/cc0000/ffffff', 'American', 'low', 2, '2022-07-10T02:14:31Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kuhn-Weber', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 929, 'Sungi Liput', 'Indonesia', 'http://dummyimage.com/364x403.png/ff4444/ffffff', 'Moland', 'classic', 2, '2022-08-01T21:35:59Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Wolff and Sons', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 942, 'Tupã', 'Brazil', 'http://dummyimage.com/390x410.png/dddddd/000000', '6th', 'low', 2, '2022-01-24T03:53:11Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Block, Schulist and Barton', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 311, 'Sawin', 'Poland', 'http://dummyimage.com/355x420.png/dddddd/000000', 'Elgar', 'standard', 1, '2022-02-01T23:27:36Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kovacek-Witting', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 895, 'Galtek', 'Indonesia', 'http://dummyimage.com/432x355.png/dddddd/000000', 'Thompson', 'classic', 1, '2022-11-12T06:12:00Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Bechtelar Group', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 255, 'Tha Tako', 'Thailand', 'http://dummyimage.com/379x381.png/cc0000/ffffff', 'Schmedeman', 'standard', 2, '2022-04-12T12:12:23Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Wilderman-Stracke', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 797, 'Lutou', 'China', 'http://dummyimage.com/375x427.png/dddddd/000000', 'Prentice', 'low', 1, '2022-09-04T19:38:25Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Grimes, Dooley and Moore', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 862, 'Tanjung Palas', 'Indonesia', 'http://dummyimage.com/361x443.png/ff4444/ffffff', 'Macpherson', 'standard', 2, '2022-09-10T15:45:56Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('O''Keefe and Sons', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 326, 'Peterhof', 'Russia', 'http://dummyimage.com/379x445.png/dddddd/000000', 'Ohio', 'standard', 1, '2022-08-30T14:52:08Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Nienow and Sons', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 722, 'Orlando', 'United States', 'http://dummyimage.com/403x360.png/dddddd/000000', 'Crownhardt', 'classic', 2, '2022-06-15T23:51:45Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Morissette-Bauch', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 838, 'Lalig', 'Philippines', 'http://dummyimage.com/374x417.png/ff4444/ffffff', '7th', 'low', 2, '2022-07-18T20:51:33Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Leannon-Gottlieb', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 326, 'Toledo', 'Philippines', 'http://dummyimage.com/356x371.png/5fa2dd/ffffff', 'Mesta', 'low', 2, '2022-07-06T20:26:39Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Bosco-Marquardt', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 559, 'Shenwan', 'China', 'http://dummyimage.com/445x380.png/dddddd/000000', 'Bashford', 'classic', 2, '2022-01-27T01:01:35Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Thompson-Bartoletti', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 510, 'Cheban', 'China', 'http://dummyimage.com/361x422.png/5fa2dd/ffffff', 'Anthes', 'standard', 2, '2022-05-20T12:51:00Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Glover and Sons', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 934, 'Bijaepasu', 'Indonesia', 'http://dummyimage.com/439x440.png/ff4444/ffffff', 'Hermina', 'classic', 2, '2022-09-17T10:32:38Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Heaney-Murazik', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 878, 'General San Martín', 'Argentina', 'http://dummyimage.com/421x429.png/cc0000/ffffff', 'Carberry', 'standard', 1, '2022-06-17T23:06:18Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Wehner, Wisoky and Senger', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 326, 'Fortaleza', 'Brazil', 'http://dummyimage.com/414x355.png/ff4444/ffffff', 'Eliot', 'low', 1, '2022-02-12T16:42:03Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Miller and Sons', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 668, 'Firminy', 'France', 'http://dummyimage.com/375x443.png/cc0000/ffffff', 'Laurel', 'classic', 1, '2022-05-26T13:39:23Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Lindgren, Yundt and Carroll', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 395, 'Caluya', 'Philippines', 'http://dummyimage.com/352x436.png/dddddd/000000', 'Dayton', 'low', 1, '2022-11-02T17:40:36Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Klein, Ward and Dietrich', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 714, 'Bājitpur', 'Bangladesh', 'http://dummyimage.com/365x394.png/cc0000/ffffff', 'Atwood', 'standard', 2, '2022-02-07T16:28:17Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Rempel and Sons', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 604, 'Sonzacate', 'El Salvador', 'http://dummyimage.com/410x418.png/ff4444/ffffff', 'Ridgeway', 'standard', 1, '2022-08-25T17:21:19Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Davis-Towne', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 999, 'Starcevica', 'Bosnia and Herzegovina', 'http://dummyimage.com/434x356.png/cc0000/ffffff', 'Mayer', 'standard', 2, '2022-03-21T01:04:52Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kilback, Mosciski and Schowalter', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 676, 'Toulouse', 'France', 'http://dummyimage.com/420x434.png/cc0000/ffffff', 'Walton', 'low', 1, '2022-01-20T03:45:48Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Durgan-Miller', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 347, 'Rabak', 'Sudan', 'http://dummyimage.com/439x392.png/cc0000/ffffff', 'Sugar', 'low', 2, '2022-04-27T02:47:47Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Bernhard LLC', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 397, 'Dijon', 'France', 'http://dummyimage.com/389x361.png/cc0000/ffffff', 'Goodland', 'standard', 1, '2022-09-21T02:15:46Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Simonis-Price', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 241, 'Skhirat', 'Morocco', 'http://dummyimage.com/449x401.png/dddddd/000000', 'Sherman', 'classic', 1, '2022-08-04T20:28:10Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Jenkins-Crona', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 712, 'Kamensk-Ural’skiy', 'Russia', 'http://dummyimage.com/375x397.png/dddddd/000000', 'Trailsway', 'classic', 1, '2022-11-26T06:17:20Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Jakubowski-Doyle', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 757, 'Sabunçu', 'Azerbaijan', 'http://dummyimage.com/361x407.png/dddddd/000000', 'Ludington', 'low', 2, '2022-04-24T20:49:47Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kohler-Mueller', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 597, 'Caiyuan', 'China', 'http://dummyimage.com/392x411.png/dddddd/000000', 'Iowa', 'standard', 2, '2022-08-02T01:31:50Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Johns-Sauer', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 460, 'Shakhun’ya', 'Russia', 'http://dummyimage.com/441x405.png/5fa2dd/ffffff', 'Eliot', 'classic', 1, '2022-01-10T22:35:24Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Lowe-Zieme', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 637, 'Saraburi', 'Thailand', 'http://dummyimage.com/422x375.png/ff4444/ffffff', 'Burning Wood', 'standard', 2, '2022-04-08T16:59:21Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Shanahan Inc', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 210, 'Saint-Priest', 'France', 'http://dummyimage.com/445x450.png/5fa2dd/ffffff', 'Jenna', 'low', 2, '2022-10-04T08:31:57Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Schmitt-Macejkovic', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 372, 'Jamaica', 'United States', 'http://dummyimage.com/374x392.png/cc0000/ffffff', 'Schiller', 'low', 1, '2022-08-11T01:04:31Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Herzog-Parker', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 359, 'Bordeaux', 'France', 'http://dummyimage.com/399x434.png/ff4444/ffffff', 'Grasskamp', 'standard', 2, '2022-06-29T03:23:09Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Lindgren, Brakus and Bradtke', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 526, 'Esmeraldas', 'Ecuador', 'http://dummyimage.com/420x400.png/cc0000/ffffff', 'Golf Course', 'low', 2, '2022-02-09T16:50:06Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Feest-Durgan', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 273, 'Baćkowice', 'Poland', 'http://dummyimage.com/396x377.png/ff4444/ffffff', 'Schlimgen', 'low', 1, '2022-07-16T03:28:13Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kohler LLC', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 618, 'Wuyahe', 'China', 'http://dummyimage.com/431x380.png/ff4444/ffffff', 'Cardinal', 'low', 2, '2022-06-06T12:35:04Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Torp LLC', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 544, 'Jetis', 'Indonesia', 'http://dummyimage.com/444x356.png/ff4444/ffffff', 'Sutteridge', 'classic', 1, '2022-06-06T04:00:43Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Feeney and Sons', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 409, 'Eusebio Ayala', 'Paraguay', 'http://dummyimage.com/370x410.png/5fa2dd/ffffff', 'Fair Oaks', 'standard', 2, '2022-11-03T20:09:20Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Gerhold-Kovacek', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 774, 'Krajan Jabungcandi', 'Indonesia', 'http://dummyimage.com/351x418.png/dddddd/000000', 'Cody', 'standard', 2, '2022-03-26T02:22:33Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Green-Ziemann', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 530, 'Crépy-en-Valois', 'France', 'http://dummyimage.com/449x385.png/ff4444/ffffff', 'Northport', 'standard', 2, '2022-01-24T12:15:04Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Pouros, Blanda and Kohler', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 989, 'Banjar Sebual', 'Indonesia', 'http://dummyimage.com/421x365.png/dddddd/000000', 'Sherman', 'low', 2, '2022-05-30T06:21:37Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Spencer-Turcotte', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 233, 'Revava', 'Israel', 'http://dummyimage.com/354x392.png/5fa2dd/ffffff', 'Nelson', 'low', 1, '2022-08-15T17:35:55Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kassulke-McKenzie', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 602, 'Changmao', 'China', 'http://dummyimage.com/373x435.png/dddddd/000000', 'Dovetail', 'classic', 2, '2021-12-13T06:57:28Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kunde, Dare and Veum', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 915, 'General Martín Miguel de Güemes', 'Argentina', 'http://dummyimage.com/413x380.png/5fa2dd/ffffff', 'Boyd', 'low', 2, '2022-02-03T19:19:32Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('O''Connell and Sons', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 454, 'Grenoble', 'France', 'http://dummyimage.com/444x387.png/ff4444/ffffff', 'Kinsman', 'classic', 1, '2022-03-30T18:32:01Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Bins, Strosin and Gutkowski', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 336, 'Xiaojin', 'China', 'http://dummyimage.com/414x386.png/cc0000/ffffff', 'Stang', 'standard', 2, '2022-01-01T20:17:05Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Kohler, Lowe and Kovacek', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 749, 'Bolyarovo', 'Bulgaria', 'http://dummyimage.com/358x391.png/dddddd/000000', 'Hovde', 'classic', 2, '2022-07-12T11:30:36Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Schinner, Cartwright and Waelchi', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 982, 'Kotabaru', 'Indonesia', 'http://dummyimage.com/410x408.png/cc0000/ffffff', 'Muir', 'standard', 1, '2022-03-24T07:51:25Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Gerhold, Balistreri and Reynolds', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 381, 'Beausejour', 'Canada', 'http://dummyimage.com/446x445.png/ff4444/ffffff', 'Nelson', 'low', 2, '2021-12-15T07:30:06Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Monahan Group', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 335, 'Lengji', 'China', 'http://dummyimage.com/355x373.png/dddddd/000000', 'Northport', 'classic', 2, '2022-10-19T15:56:11Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Donnelly-Wisozk', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 924, 'Štitar', 'Croatia', 'http://dummyimage.com/365x360.png/ff4444/ffffff', 'Pankratz', 'low', 2, '2022-01-29T05:04:32Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Becker Group', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 353, 'Saint Louis', 'United States', 'http://dummyimage.com/359x370.png/5fa2dd/ffffff', 'Schmedeman', 'classic', 1, '2022-04-28T20:22:03Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Wunsch LLC', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 338, 'Xiaoshi', 'China', 'http://dummyimage.com/362x388.png/dddddd/000000', 'Warner', 'classic', 1, '2022-03-21T09:33:03Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Bergnaum and Sons', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 393, 'Zhaxirabdain', 'China', 'http://dummyimage.com/405x387.png/dddddd/000000', 'Portage', 'standard', 2, '2022-07-06T05:09:54Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Jones, Brekke and Hane', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 343, 'Pasirpengarayan', 'Indonesia', 'http://dummyimage.com/355x381.png/5fa2dd/ffffff', 'Buena Vista', 'standard', 2, '2022-03-07T09:37:36Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Schaden LLC', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 743, 'Demak', 'Indonesia', 'http://dummyimage.com/402x399.png/cc0000/ffffff', 'Norway Maple', 'low', 1, '2021-12-26T11:06:32Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Nolan Group', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 208, 'Jdaidet el Matn', 'Lebanon', 'http://dummyimage.com/369x404.png/cc0000/ffffff', 'Shopko', 'low', 1, '2022-10-04T10:20:58Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Nicolas, Windler and Homenick', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 457, 'Raman', 'Thailand', 'http://dummyimage.com/367x439.png/5fa2dd/ffffff', 'Corben', 'classic', 1, '2022-05-20T06:31:57Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Roob and Sons', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 320, 'Pedregal', 'Panama', 'http://dummyimage.com/376x382.png/ff4444/ffffff', 'Johnson', 'classic', 2, '2022-12-06T06:00:11Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Wehner, Wunsch and Emmerich', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 204, 'Timur', 'Indonesia', 'http://dummyimage.com/373x414.png/cc0000/ffffff', 'North', 'classic', 2, '2022-12-04T03:18:12Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Johns Group', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 484, 'Oktyabr’sk', 'Kazakhstan', 'http://dummyimage.com/434x356.png/5fa2dd/ffffff', 'Kedzie', 'standard', 2, '2022-09-13T22:43:40Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Donnelly-Cole', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 654, 'Fuyo', 'South Korea', 'http://dummyimage.com/365x370.png/cc0000/ffffff', 'Sage', 'standard', 2, '2022-11-03T21:39:32Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Schultz-McKenzie', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 255, 'Mari', 'Indonesia', 'http://dummyimage.com/410x413.png/5fa2dd/ffffff', 'Twin Pines', 'low', 2, '2022-02-10T18:29:27Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Rohan LLC', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 376, 'Marumori', 'Japan', 'http://dummyimage.com/404x438.png/cc0000/ffffff', 'Springs', 'standard', 2, '2022-02-01T20:40:15Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Cummerata, Wunsch and Murphy', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 596, 'Tupiza', 'Bolivia', 'http://dummyimage.com/358x408.png/5fa2dd/ffffff', 'Gerald', 'standard', 1, '2022-05-25T09:55:53Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Paucek LLC', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 582, 'Wang Sombun', 'Thailand', 'http://dummyimage.com/381x402.png/dddddd/000000', 'Ridgeview', 'low', 1, '2022-01-14T18:18:12Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Spencer, Boyle and Stark', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 412, 'Manhiça', 'Mozambique', 'http://dummyimage.com/403x361.png/dddddd/000000', 'Bartillon', 'standard', 1, '2021-12-18T04:14:07Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Veum, Fritsch and Halvorson', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 633, 'Santa Lucía', 'Honduras', 'http://dummyimage.com/423x361.png/dddddd/000000', 'Dovetail', 'classic', 2, '2021-12-18T04:43:24Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Wehner and Sons', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 375, 'Beranci', 'Macedonia', 'http://dummyimage.com/404x406.png/cc0000/ffffff', 'Carey', 'low', 1, '2021-12-29T14:39:29Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Sanford-Grady', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 491, 'Soledar', 'Ukraine', 'http://dummyimage.com/433x375.png/5fa2dd/ffffff', 'Sloan', 'standard', 2, '2022-05-10T12:14:40Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Goodwin Inc', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 618, 'Saint-Gaudens', 'France', 'http://dummyimage.com/379x365.png/cc0000/ffffff', 'Killdeer', 'standard', 2, '2022-01-30T17:37:28Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Rowe-Herzog', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 710, 'Luanshya', 'Zambia', 'http://dummyimage.com/391x392.png/dddddd/000000', 'Washington', 'classic', 1, '2022-07-17T23:18:34Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Macejkovic Inc', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 745, 'Lyakhovtsy', 'Ukraine', 'http://dummyimage.com/354x435.png/5fa2dd/ffffff', 'Manley', 'low', 2, '2022-10-12T00:35:06Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Nikolaus, Marvin and Reynolds', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 230, 'Masis', 'Armenia', 'http://dummyimage.com/431x410.png/dddddd/000000', 'Hanover', 'standard', 2, '2022-08-27T15:31:29Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('O''Reilly-Halvorson', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 772, 'Lodwar', 'Kenya', 'http://dummyimage.com/372x411.png/dddddd/000000', 'Merrick', 'classic', 1, '2022-09-03T10:20:19Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('McCullough Inc', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 214, 'Medenine', 'Tunisia', 'http://dummyimage.com/350x405.png/dddddd/000000', 'Nova', 'low', 1, '2022-03-23T12:13:28Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Sawayn-Stracke', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 829, 'Gandajika', 'Democratic Republic of the Congo', 'http://dummyimage.com/358x352.png/dddddd/000000', 'Porter', 'classic', 2, '2022-11-27T18:07:05Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Grady LLC', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 536, 'Pengshi', 'China', 'http://dummyimage.com/382x380.png/dddddd/000000', 'Kenwood', 'classic', 2, '2022-10-30T20:03:27Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Wintheiser-Gibson', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 690, 'Youngstown', 'United States', 'http://dummyimage.com/423x352.png/ff4444/ffffff', 'Southridge', 'low', 1, '2022-09-28T23:48:42Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Carter LLC', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 983, 'Kineshma', 'Russia', 'http://dummyimage.com/362x395.png/dddddd/000000', 'Pepper Wood', 'low', 1, '2022-06-22T10:43:43Z');
insert into hotel (name, description, price, city, country, image, address, "brandName", "authorId", "createdAt") values ('Conn-Champlin', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 555, 'Angol', 'Chile', 'http://dummyimage.com/397x411.png/cc0000/ffffff', 'Del Mar', 'standard', 2, '2022-08-02T06:40:12Z');
   
        `);
        });
    }
    down(_queryRunner) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.FakeHotels1670487401008 = FakeHotels1670487401008;
//# sourceMappingURL=1670487401008-FakeHotels.js.map