import { getUser } from '/bl.js';

async function loadUsers(){
    const users = await getUser();
    const usersContainer = document.getElementById('users-container');

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = user.id;
        
        const contentElement = document.createElement('p');
        contentElement.textContent = user.name;
        
        userElement.appendChild(titleElement);
        userElement.appendChild(contentElement);
        
        usersContainer.appendChild(userElement);
        
    });
}

loadUsers();