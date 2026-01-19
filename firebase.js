<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyCelzhmXi60Q9KoJfLxRIXVLEnc_8VMCSI",
  authDomain: "e-voting-sembagi-arutala.firebaseapp.com",
  projectId: "e-voting-sembagi-arutala",
  storageBucket: "e-voting-sembagi-arutala.firebasestorage.app",
  messagingSenderId: "43615823154",
  appId: "1:43615823154:web:666977567a07cf37ec632b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>

