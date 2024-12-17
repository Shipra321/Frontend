function postDiscussion() {
    const newPost = document.getElementById('new-post').value;
    if (newPost.trim() === '') {
        alert('Please write something before posting.');
        return;
    }
    const postList = document.getElementById('post-list');
    const post = document.createElement('div');
    post.classList.add('post');
    post.textContent = newPost;
    postList.appendChild(post);
    document.getElementById('new-post').value = '';
}

// JavaScript for showing the alumni list
function showAlumniList() {
    const alumniList = document.getElementById('alumni-list');
    alumniList.classList.toggle('hidden');
}

// JavaScript for chat functionality
function startChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    if (chatInput.value.trim() === '') {
        alert('Please type a message before sending.');
        return;
    }
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = chatInput.value;
    chatMessages.appendChild(message);
    chatInput.value = '';
}