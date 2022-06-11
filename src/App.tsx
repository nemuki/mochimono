import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

const googleAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      GoogleAuthProvider.credentialFromResult(result)
      // const token = credential?.accessToken;
      // The signed-in user info.
      // const { user } = result;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const { email } = error.customData;
      // The AuthCredential type that was used.
      GoogleAuthProvider.credentialFromError(error)
      // ...
    })
}

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mochimono
          </Typography>
          <Button color="inherit" onClick={() => googleAuth()}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default App
