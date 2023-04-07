// dumb component
function UserItem({ user }) {
    return (
        <div className="mb-3" key={user.login}>
            <img className="rounded-full" src={user.avatar_url} width={100} height={100} alt="user" />
            <h3 className="ml-4">{user.login}</h3>
            <hr />
        </div>
    );
}


export default UserItem;
