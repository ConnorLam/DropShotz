# DropShotz

[Link to live site](https://dropshotz.herokuapp.com/)

### About DropShotz:

DropShotz is a website clone of YouTube. DropShotz's intentions are to be used as a badminton highlights YouTube for people to showcase their best clips

### Wiki Links

- [DataBase Schema](https://github.com/ConnorLam/DropShot/wiki/Database-Schema)
- [Features List](https://github.com/ConnorLam/DropShot/wiki/Features)
- [User Stories](https://github.com/ConnorLam/DropShot/wiki/User-Stories)
- [Wire Frames](https://github.com/ConnorLam/DropShot/wiki/WireFrames)


### This project is built with:

 ### Frontend
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Backend
- ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
- ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

### Hosting
- ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

### How to run locally:

 1. Clone the repo 
 2. Go into backend directory and run **pipenv install** to grab dependencies needed
 3. create a .env fileadd add values to variables listed
    * SECRET_KEY
    * DATABASE_URL
    * S3_BUCKET
    * S3_KEY
    * S3_SECRET
 4. Go into pip[env shell, Migrate and seed data in the backend **flask db:init, flask db:migrate, flask db upgrade, flask seed all**
 5. Run server using flask run in root directory npm start in front end (opens a broswer at localhost:3000)
 7. Look around app!

 ### Pages


#### Landing page
* All videos can be viewed by any user, log in if you want to use all features!
 ![image](./PreviewImages/Screen%20Shot%202022-10-06%20at%209.06.07%20AM.png)


#### Video Page
* If you click on a video you can view the video with its comments
* Write your own comment only if you're logged in
 ![image](./PreviewImages/Screen%20Shot%202022-10-06%20at%209.21.04%20AM.png)


#### Create video form
* Fill in info and post your best clips
 ![image](./PreviewImages/Screen%20Shot%202022-10-06%20at%209.21.55%20AM.png)
 
#### Comment edit and delete
* If you have a comment you want to change or delete click buttons on the right
 ![image](./PreviewImages/Screen%20Shot%202022-10-06%20at%209.22.29%20AM.png)