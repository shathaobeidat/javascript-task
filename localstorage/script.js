
let users = JSON.parse(localStorage.getItem('users')) || [];
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!users.some(u => u.role === 'admin')) {
    users.push({ username: 'Admin', email: 'admin@admin.com', password: 'admin123', role: 'admin' });
    localStorage.setItem('users', JSON.stringify(users));
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const signupBtn = document.querySelector('.sign-btn');
if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const username = document.getElementById('user-name').value.trim();
        const email = document.getElementById('Email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('conform-pass').value;

        if (!username || !email || !password || !confirmPassword) return alert('Please fill all fields');
        if (username.length < 3) return alert('Username must be at least 3 characters');
        if (!emailRegex.test(email)) return alert('Invalid email format');
        if (password.length < 6) return alert('Password must be at least 6 characters');
        if (password !== confirmPassword) return alert('Passwords do not match!');
        if (users.some(u => u.email === email)) return alert('This email already exists!');

        // push keeps old users, we only add the new one
        users.push({ username, email, password, role: 'user' });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Your account has been created successfully!');
        window.location.href = 'login.html';
    });
}

const loginBtn = document.getElementById('submit-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (!email || !password) return alert('Please fill all fields');
        if (!emailRegex.test(email)) return alert('Invalid email format');

        const user = users.find(u => u.email === email && u.password === password);
        if (!user) return alert('Your email or password is not correct!');

        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = user.role === 'admin' ? 'admin.html' : 'dashboard.html';
    });
}

const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
}

if (document.getElementById('user-dashboard')) {
    if (!currentUser) {
        window.location.href = 'login.html';         
    } else if (currentUser.role === 'admin') {
        window.location.href = 'admin.html';         
    } else {
        document.getElementById('d-username').textContent = currentUser.username;
        document.getElementById('d-email').textContent = currentUser.email;
        document.getElementById('d-role').textContent = currentUser.role;
    }
}

if (document.getElementById('admin-dashboard')) {
    if (!currentUser) {
        window.location.href = 'login.html';         
    } else if (currentUser.role !== 'admin') {
        window.location.href = 'dashboard.html';    
    } else {
        const tbody = document.getElementById('users-table');
        users.forEach((u, i) => {
            const tr = document.createElement('tr');
            [i + 1, u.username, u.email, u.role].forEach(val => {
                const td = document.createElement('td');
                td.textContent = val;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }
}