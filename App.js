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
        <div>
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
function AddPostForm(){
    return (
        <div className="form">
            <form >
                <label>Username</label>
                <input type="text" id="username"/>
                <label>Caption</label>
                <input type="text" id="caption"/>
                <button>Add Post</button>
            </form>
        </div>
    )
}
function SearchBar(){
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState();
    const filteredPosts = posts.filter(user =>
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
        <>
            <label>Search Here: </label>

            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <SortControl sortBy={sortBy} setSortBy={setSortBy}/>
            <PostList students={filteredPosts} />
        </>
    );
   
}

function App() {
    return (
        <div className="app">
            <h1>PhotoShare Manager</h1>
            <SearchBar />
        </div>
    );
}

// ==========================
// Render the Application
// Do not modify this section
// ==========================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);