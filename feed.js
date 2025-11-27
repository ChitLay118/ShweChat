import { auth, db, storage } from './firebase-config.js';
import { collection, addDoc, onSnapshot, query, orderBy, updateDoc, doc, arrayUnion, deleteDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");
const postsDiv = document.getElementById("posts");
const postImage = document.getElementById("postImage");

const postsCol = collection(db, "posts");
const postsQuery = query(postsCol, orderBy("timestamp", "desc"));

postBtn.addEventListener("click", async () => {
    if(postInput.value.trim() === "") return;

    let imageUrl = "";
    if(postImage.files[0]){
        const imageRef = ref(storage, `posts/${Date.now()}_${postImage.files[0].name}`);
        await uploadBytes(imageRef, postImage.files[0]);
        imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(postsCol, {
        user: auth.currentUser.email,
        text: postInput.value,
        image: imageUrl,
        timestamp: new Date(),
        likes: 0,
        comments: []
    });

    postInput.value = "";
    postImage.value = "";
});

onSnapshot(postsQuery, (snapshot) => {
    postsDiv.innerHTML = "";
    snapshot.forEach(docSnap => {
        const data = docSnap.data();
        const docId = docSnap.id;
        postsDiv.innerHTML += `
        <div class="post-card" id="${docId}">
            <div class="post-header">
                <img src="https://www.gravatar.com/avatar/${data.user}?d=identicon" class="profile-img">
                <strong>${data.user}</strong>
            </div>
            <p>${data.text}</p>
            ${data.image ? `<img src="${data.image}">` : ""}
            <div class="post-actions">
              <button class="likeBtn" data-id="${docId}">Like (${data.likes})</button>
              <button class="commentBtn" data-id="${docId}">Comment (${data.comments.length})</button>
              <button class="shareBtn" data-id="${docId}">Share</button>
              ${data.user === auth.currentUser.email ? `<button class="deleteBtn" data-id="${docId}">Delete</button>` : ""}
            </div>
        </div>`;
    });

    document.querySelectorAll('.likeBtn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const postRef = doc(db, "posts", e.target.dataset.id);
            const currentLikes = parseInt(e.target.textContent.match(/\d+/)[0]);
            await updateDoc(postRef, { likes: currentLikes + 1 });
        });
    });

    document.querySelectorAll('.commentBtn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const comment = prompt("Enter your comment:");
            if(comment){
                const postRef = doc(db, "posts", e.target.dataset.id);
                await updateDoc(postRef, { comments: arrayUnion({user: auth.currentUser.email, text: comment}) });
            }
        });
    });

    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            if(confirm("Are you sure to delete this post?")){
                await deleteDoc(doc(db, "posts", e.target.dataset.id));
            }
        });
    });

    document.querySelectorAll('.shareBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            alert("Share feature coming soon!");
        });
    });
});
