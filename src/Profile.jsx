function Profile() {
    const name = "kavya"
    const age = 18
    const isStudent = true
    return (
        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>{isStudent === true ? "i am a student" : "i am not a student"}</p>
        </div>
    )
}
export default Profile
