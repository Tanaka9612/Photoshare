// Student Number: u15057420

const { useState } = React;

// ==========================
// Supplied Data
// Do not modify this section
// ==========================

const posts = [
    {
        id: 1,
        username: "@sarah",
        caption: "Studying React today!",
        status: "Published"
    },
    {
        id: 2,
        username: "@john",
        caption: "Finished Practical 3.",
        status: "Draft"
    },
    {
        id: 3,
        username: "@amy",
        caption: "Coffee before coding.",
        status: "Published"
    },
    {
        id: 4,
        username: "@michael",
        caption: "Working on Assignment 2.",
        status: "Archived"
    },
    {
        id: 5,
        username: "@leanne",
        caption: "Sunset over campus.",
        status: "Published"
    }
];

// ==========================
// React Components
// Write your components below
// ==========================

function PostCard(props){

    return(
        <div className="post-card">
            <h2>{props.studentCard.username}</h2>
            <p>{props.studentCard.caption}</p>
            <p>{props.studentCard.status}</p>
            <button >Delete Post</button>
            <button >Change Post Status</button>
        </div>
    );
}

function PostList({students}){
    if(!students){
        return(<p className="empty-message">No Posts Found</p>)
    }
    const [username, caption, status] = students; 
    return(
        <div>
            {
                students.map((card, index) => 
                    <PostCard key={index} studentCard={card}/>)
            }
        </div>
    );
}
function SortControl({sortBy, setSortBy}){
    return(
        <div className="sort-group">
            <label> Sort By: </label>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="none">None</option>
                <option value="username-a-z">
                    Username A-Z
                </option>
                <option value="caption-a-z">
                    Caption A-Z
                </option>
            </select>
        </div>
    )
}
// function AddPostForm({SetAddPost}){
//         const[username, setUsername] = useState("");
//         const[caption, setCaption] = useState("");
//         const[status, setStatus] = useState("Draft");
//         const[id, SetID] = useState(addPost.length + 1);  //current size + 1
//     function handleSubmit(e) {
//         e.preventDefault();
        
//         setCaption(e.target.caption);
//         setUsername("@"+e.target.username);
//         // SetAddPost(addPost.push({id,username, caption, status}));
//         const user = {id,username, caption, status};
//         const addNewUser=(user)=>{
//             SetAddPost([...addPost, user]);
//         }
//     }
//     return (
//         <div className="form-group">
//             <form className="add-post-form" onSubmit={handleSubmit}>
//                 <label>Username</label>
//                 <input type="text" id="username"/>
//                 <label>Caption</label>
//                 <input type="text" id="caption"/>
//                 <button>Add Post</button>
//             </form>
//         </div>
//     )
// }

function AddPostForm({addPost, SetAddPost }) {

    const [username, setUsername] = useState("");
    const [caption, setCaption] = useState("");
    const [status, setStatus] = useState("Draft");

    function handleSubmit(e) {
        e.preventDefault();

        const newPost = {
            id: addPost.length+1,
            username: "@" + username,
            caption: caption,
            status: status
        };

        SetAddPost(prevPosts => [...prevPosts,newPost]);

        setUsername("");
        setCaption("");
        setStatus("Draft");
    }

    return (
        <div className="form-group">
            <form
                className="add-post-form"
                onSubmit={handleSubmit}
            >
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />
                <label>Caption</label>
                <input
                    type="text"
                    value={caption}
                    onChange={(e) =>
                        setCaption(e.target.value)
                    }
                />
                <button type="submit">
                    Add Post
                </button>
            </form>

        </div>
    );
}
function SearchBar({addPost}){
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState();
    const filteredPosts = addPost.filter(user =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.caption.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => {
            if (sortBy === 'username-a-z') {
                return a.username.localeCompare(b.username);
            }
            if (sortBy === 'caption-a-z') {
                return a.caption.localeCompare(b.caption);
            }
            return 0;
        });

    // debug 
    // console.log(filteredPosts);
    // console.log(posts);
    return (
        <div className="search-box">
            <div className="search-bar">
                <label>Search Here: </label>
                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <SortControl sortBy={sortBy} setSortBy={setSortBy}/>
            <PostList students={filteredPosts} />
        </div>
    );
   
}

function App() {
    const [addPost, SetAddPost] = useState(posts);
    return (
        <div className="app">
            <h1>PhotoShare Manager</h1>
            <AddPostForm addPost={addPost} SetAddPost={SetAddPost}/>
            <SearchBar addPost={addPost}/>
        </div>
    );
}

// ==========================
// Render the Application
// Do not modify this section
// ==========================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);