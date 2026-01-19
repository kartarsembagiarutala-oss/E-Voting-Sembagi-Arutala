import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  doc,
  setDoc,
  addDoc,
  collection,
  getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// 🔐 CEK ADMIN
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    location.href = "login.html";
    return;
  }

  const snap = await getDoc(doc(db, "pemilih", user.uid));
  if (!snap.exists() || snap.data().role !== "admin") {
    alert("Bukan admin");
    await signOut(auth);
    location.href = "login.html";
  }
});

// 🚪 LOGOUT
document.getElementById("logout").onclick = async () => {
  await signOut(auth);
  location.href = "login.html";
};

// 👤 TAMBAH PEMILIH
window.tambahPemilih = async () => {
  const nama = pNama.value;
  const email = pEmail.value;
  const password = pPassword.value;

  if (!nama || !email || !password) {
    alert("Lengkapi data");
    return;
  }

  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "pemilih", userCred.user.uid), {
    nama,
    email,
    role: "pemilih",
    sudahMemilih: false
  });

  alert("Pemilih berhasil ditambahkan");
};

// 🧑‍💼 TAMBAH KANDIDAT
window.tambahKandidat = async () => {
  const nama = kNama.value;
  const visi = kVisi.value;

  if (!nama || !visi) {
    alert("Lengkapi data kandidat");
    return;
  }

  await addDoc(collection(db, "kandidat"), {
    nama,
    visi,
    suara: 0
  });

  alert("Kandidat berhasil ditambahkan");
};
