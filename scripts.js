document.addEventListener('DOMContentLoaded', function(){

  // ---------- SIGNUP ----------
  const signup = document.getElementById('signupForm');
  if(signup){
    signup.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const pw = document.getElementById('password').value;
      const pwc = document.getElementById('passwordConfirm').value;
      const err = document.getElementById('signupError');
      const msg = document.getElementById('signupMsg');
      err.textContent = '';
      msg.textContent = '';

      // Validation rules
      if(name.length < 2){ err.textContent = 'Please enter your full name.'; return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ err.textContent = 'Enter a valid email address.'; return; }
      if(pw.length < 8){ err.textContent = 'Password must be at least 8 characters.'; return; }
      if(pw !== pwc){ err.textContent = 'Passwords do not match.'; return; }

      // Simulate success (replace with real server call)
      msg.textContent = 'Account created — check your email for confirmation.';
      signup.reset();
    });
  }

  // ---------- LOGIN ----------
  const login = document.getElementById('loginForm');
  if(login){
    login.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pw = document.getElementById('loginPassword').value;
      const err = document.getElementById('loginError');
      const msg = document.getElementById('loginMsg');
      err.textContent = '';
      msg.textContent = '';

      if(!email){ err.textContent = 'Please enter your email.'; return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ err.textContent = 'Enter a valid email address.'; return; }
      if(!pw || pw.length < 6){ err.textContent = 'Please enter your password.'; return; }

      // Demo success — in production, POST to your server and handle response
      msg.textContent = 'Logged in (demo). Redirecting...';
      // window.location.href = "dashboard.html"; // enable when you have a destination
      login.reset();
    });
  }
});













