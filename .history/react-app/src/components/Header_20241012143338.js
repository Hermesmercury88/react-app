import LogoutButton from "../Logout";

function Header() {
    return (
        <header className="bg-red-500 shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">Management</h1> {/* แก้จาก text-x1 เป็น text-xl */}
        <div>
            <LogoutButton />
        </div>
        </header>
    
    );

}


export default Header;