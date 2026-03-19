let userId = 1;
let department = "KBP";
let name = "Никита";

let postId = 101;
let postTitle = "Мой первый пост";
let postLikes = 42;
let posts = {
    id: postId,
    title: postTitle,
    likes: postLikes
};

let LoadTimeNumber = 5;

function fetchUserWithPosts(userId, name, department, posts, LoadTimeNumber)
{
    if(userId <= 0)
    {
        console.log("Айди пользователя не может быть меньше 0, либо равен нулю!");
    }
    else
    {
        setTimeout(function() {
            console.log("Id пользователя - " + userId + ", имя пользователя - " + name + ", Место обучения - " + department);
        }, 800);
        
        setTimeout(function() {
            console.log("Айди поста: " + posts.id + ", Название: " + posts.title + ", кол-во лайков: " + posts.likes);
        }, 600);
        
        console.log("user: {" + name + "}, posts: [id: " + posts.id + ", title: " + posts.title + ", likes: " + posts.likes + "], Кол-во загрузок: " + LoadTimeNumber);
    }
}

fetchUserWithPosts(userId, name, department, posts, LoadTimeNumber);