// Vérification du mot de passe
function verifyPassword() {
  const password = document.getElementById('password').value;
  if (password === 'darkaccess') {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('decrypt-page').style.display = 'flex';
    startDecrypt();
  } else {
    alert('Access Denied: Incorrect Password');
  }
}

// Simulation de décryptage
function startDecrypt() {
  const decryptLog = document.getElementById('decrypt-log');
  const phrases = [
    'Initializing bypass protocol...',
    'Accessing encrypted nodes...',
    'Bypassing firewall...',
    'Decrypting SHA-256 hashes...',
    'Establishing secure backdoor...',
    'Gaining admin privileges...',
    'Root access granted...'
  ];

  let index = 0;

  const interval = setInterval(() => {
    if (index < phrases.length) {
      decryptLog.innerHTML += phrases[index] + "<br>";
      index++;
    } else {
      clearInterval(interval);
      decryptLog.innerHTML += "<strong>Access Granted. Welcome!</strong>";
    }
  }, 1500);
}
