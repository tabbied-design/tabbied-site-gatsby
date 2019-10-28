import firebaseConfig from "./config"

class Firebase {
  constructor(app) {
    if (!firebaseInstance) {
      app.initializeApp(firebaseConfig)

      this.auth = app.auth()
      this.db = app.firestore()
      this.functions = app.functions()
      this.storage = app.storage()
    }
  }

  async register({ username, email, password }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )

    console.log(newUser)

    const createProfileCallable = this.functions.httpsCallable(
      "createPublicProfile"
    )

    return createProfileCallable({
      username,
    })
  }

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }
}

let firebaseInstance

function getFirebaseInstance(app) {
  console.log("getFirebaseInstance")
  console.log(app)
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app)
    return firebaseInstance
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null
  }
}

export default getFirebaseInstance
