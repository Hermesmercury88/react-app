function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-500 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
                <img
                    src="https://i.pinimg.com/736x/01/c6/de/01c6de5d709c15eae33adcd66ece2d4e.jpg"  
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">นางสาว ภัคจิรา อุดมนา</h1>
                <p className="text-gray-600 mb-4">เรียนที่ วิศวะคอมพิวเตอร์ มหาวิทยาลัยกาฬสินธุ์</p>
                <p className="text-gray-600">
                    You have to fight to reach your dream. You have to sacrifice and work hard for it.
                </p>
                <div className="mt-6">
                <a
                href="https://example.com/projects"
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                    View Projects
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

