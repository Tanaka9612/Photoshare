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
    const [list, setList] = useState(students);
    
    // console.log(list);
    if(!list){
        return(<p className="empty-message">No Posts Found</p>)
    }
    const [username, caption, status] = list; 
    return(
        <div>
            {
                list.map((card, index) => 
                    <PostCard key={index} studentCard={card}/>)
            }
        </div>
    );
}

function SearchBar(){
    return(
       <>
        <label>Search Here: </label>
        <input type="text" />
       </>
    );
}

function App() {
    return (
        <div className="app">
            <h1>PhotoShare Manager</h1>
            <SearchBar />
            <PostList students={posts}/>
        </div>
    );
}

// ==========================
// Render the Application
// Do not modify this section
// ==========================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);