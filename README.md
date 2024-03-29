<!-- omit in toc -->
# P-Cat Projesi
---
Bu proje, siteye resim upload edebileceğiniz bir web uygulamasıdır. Uygulama içinde yapabileceğiniz işlemler şunlardır:
- Siteye resim upload etme
- Siteye upload edilen resimleri görüntüleme
- Siteye upload edilen resimleri silme
---
# Kullanılan Teknolojiler
- [Node.js](https://nodejs.org/tr/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Mongoose](https://mongoosejs.com/)
- [Docker](https://www.docker.com/)
---
# Kurulum

Bilgisayarınızda [Docker](https://www.docker.com/) **kurulu olmalıdır**. Docker kurulumu için [Docker Desktop](https://www.docker.com/products/docker-desktop) adresini ziyaret edebilirsiniz.

1-İlk olarak projeyi klonlayın.
```sh
git clone https://github.com/TahaMuslu/PCAT.git
```

2-Daha sonra projenin bulunduğu dizine girin.
```sh
cd PCAT
```

3-Projeyi build edin.
```sh
docker build -t p-cat .
```

4-Projeyi çalıştırın.
```sh
docker run -d --rm --name p-cat -p 5000:5000 p-cat
```
5-Uygulamayı çalıştırdıktan sonra `http://localhost:5000` adresine giderek uygulamayı kullanabilirsiniz.
>Uygulama default olarak 5000 portunda çalışmaktadır. Portu değiştirmek için `Dockerfile` dosyasını düzenleyin.


Uygulamayı Sonlandırmak İçin
```sh
docker stop p-cat
```

#LİSANS
[MIT © Taha Yasin Muslu](https://mit-license.org/)

