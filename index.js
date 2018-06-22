const app = "I don't do much.";

const token = '9f89a7dd3fd5d8c7f0487cebbedb15a7ba7be8bd';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
