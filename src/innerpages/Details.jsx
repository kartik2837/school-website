import React from 'react';

const classData = [
    {
        id: 1,
        className: 'Class 1',
        image: 'https://placehold.co/300x200/FFDDC1/000000?text=Class+1',
        timing: '9:00 AM - 12:00 PM',
        strength: 35,
        medium: 'English',
        subjects: ['English', 'Mathematics', 'EVS', 'Hindi'],
        topics: ['Alphabets', 'Numbers up to 100', 'Plants & Animals', 'Myself'],
        facilities: ['Smart Class', 'Play Area', 'Audio-Visual Learning'],
        activities: ['Rhymes', 'Drawing', 'Storytelling'],
        description:
            'Class 1 serves as the foundation of formal education where children are introduced to basic concepts of reading, writing, and numbers in a joyful and engaging environment.',
    },
    {
        id: 2,
        className: 'Class 2',
        image: 'https://placehold.co/300x200/FFD3B6/000000?text=Class+2',
        timing: '9:00 AM - 12:30 PM',
        strength: 32,
        medium: 'English',
        subjects: ['English', 'Math', 'EVS', 'Hindi'],
        topics: ['2-digit addition/subtraction', 'Nouns & Verbs', 'Seasons', 'Family'],
        facilities: ['Smart Boards', 'Activity Sheets'],
        activities: ['Crafts', 'Clay modeling', 'Games'],
        description:
            'Class 2 enhances foundational learning by strengthening concepts introduced in Class 1 with fun-based activities.',
    },
    {
        id: 3,
        className: 'Class 3',
        image: 'https://placehold.co/300x200/DCEDC1/000000?text=Class+3',
        timing: '8:30 AM - 12:30 PM',
        strength: 30,
        medium: 'English',
        subjects: ['English', 'Math', 'Science', 'Hindi'],
        topics: ['Multiplication', 'Sentence Formation', 'Plants', 'Festivals'],
        facilities: ['Science Kits', 'Library Visits'],
        activities: ['Role Play', 'Group Work'],
        description:
            'In Class 3, students dive deeper into academic subjects with an emphasis on comprehension and group learning.',
    },
    {
        id: 4,
        className: 'Class 4',
        image: 'https://placehold.co/300x200/C1E1FF/000000?text=Class+4',
        timing: '8:30 AM - 12:45 PM',
        strength: 34,
        medium: 'English',
        subjects: ['English', 'Math', 'Science', 'Social Studies', 'Hindi'],
        topics: ['Long Division', 'Paragraph Writing', 'Earth & Solar System', 'Indian States'],
        facilities: ['Map Room', 'Quiz Sessions'],
        activities: ['Debate', 'Painting', 'Science Experiments'],
        description:
            'Focus on practical knowledge, geography, and general awareness makes Class 4 fun and analytical.',
    },
    {
        id: 5,
        className: 'Class 5',
        image: 'https://placehold.co/300x200/C1FFC1/000000?text=Class+5',
        timing: '8:30 AM - 1:00 PM',
        strength: 33,
        medium: 'English',
        subjects: ['English', 'Math', 'Science', 'Social Studies', 'Computer'],
        topics: ['Fractions & Decimals', 'Computer Basics', 'History & Geography', 'Grammar'],
        facilities: ['Computer Lab', 'Library Access'],
        activities: ['Quiz Competitions', 'Drama', 'Typing Practice'],
        description:
            'Builds digital and academic literacy to prepare students for middle school.',
    },
    {
        id: 6,
        className: 'Class 6',
        image: 'https://placehold.co/300x200/FFFFC1/000000?text=Class+6',
        timing: '8:00 AM - 1:15 PM',
        strength: 36,
        medium: 'English',
        subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Sanskrit'],
        topics: ['Algebra', 'Human Body', 'Ancient History', 'Weather & Climate'],
        facilities: ['Science Lab', 'Language Lab'],
        activities: ['Model Making', 'Essay Writing', 'Science Fair'],
        description:
            'Introduces subject-specific concepts and lab learning. Transition to middle school begins.',
    },
    {
        id: 7,
        className: 'Class 7',
        image: 'https://placehold.co/300x200/F0C1FF/000000?text=Class+7',
        timing: '8:00 AM - 1:15 PM',
        strength: 38,
        medium: 'English',
        subjects: ['English', 'Math', 'Science', 'History/Civics', 'Sanskrit'],
        topics: ['Linear Equations', 'Photosynthesis', 'Medieval History', 'Constitution'],
        facilities: ['E-Learning', 'Digital Notes'],
        activities: ['Poster Making', 'Speech', 'Vedic Math Workshop'],
        description:
            'Academic rigor increases with a focus on logic, memory, and foundational civics.',
    },
    {
        id: 8,
        className: 'Class 8',
        image: 'https://placehold.co/300x200/C1FFF0/000000?text=Class+8',
        timing: '8:00 AM - 1:30 PM',
        strength: 40,
        medium: 'English',
        subjects: ['English', 'Math', 'Science', 'Social Science', 'Sanskrit'],
        topics: ['Mensuration', 'Electricity & Magnetism', 'Revolutions', 'Population'],
        facilities: ['Math Lab', 'Smart Classes'],
        activities: ['Group Discussions', 'Science Drama'],
        description:
            'Strong emphasis on analytical ability, public speaking, and scientific reasoning.',
    },
    {
        id: 9,
        className: 'Class 9',
        image: 'https://placehold.co/300x200/FFC1C1/000000?text=Class+9',
        timing: '8:00 AM - 2:00 PM',
        strength: 42,
        medium: 'English',
        subjects: ['English', 'Maths', 'Science', 'Social Science', 'IT'],
        topics: ['Polynomials', 'Cell Structure', 'Nazism & World Wars', 'Climate'],
        facilities: ['Computer Lab', 'Physics/Chemistry Lab'],
        activities: ['Lab Experiments', 'Mock Parliament'],
        description:
            'Foundation year for CBSE board. Focus on practical and theoretical learning.',
    },
    {
        id: 10,
        className: 'Class 10',
        image: 'https://placehold.co/300x200/C1D4FF/000000?text=Class+10',
        timing: '8:00 AM - 2:00 PM',
        strength: 39,
        medium: 'English',
        subjects: ['English', 'Maths', 'Science', 'Social Science', 'Hindi'],
        topics: ['Trigonometry', 'Light & Reflection', 'Democracy', 'Nationalism'],
        facilities: ['Exam Cell', 'Board Practice Sets'],
        activities: ['Pre-Board Exams', 'Career Orientation'],
        description:
            'Crucial year for Board exam preparation with full academic and career support.',
    },
    {
        id: 11,
        className: 'Class 11',
        image: 'https://placehold.co/300x200/E1C1FF/000000?text=Class+11',
        timing: '8:00 AM - 2:00 PM',
        strength: 34,
        medium: 'English',
        subjects: ['Physics', 'Chemistry', 'Maths/Biology', 'English', 'Physical Education/CS'],
        topics: ['Kinematics', 'Organic Chemistry', 'Genetics', 'Calculus'],
        facilities: ['Subject Labs', 'Counselling Cell'],
        activities: ['Science Olympiad', 'Research Projects'],
        description:
            'Preparation for NEET/JEE begins here with conceptual clarity and mentorship.',
    },
    {
        id: 12,
        className: 'Class 12',
        image: 'https://placehold.co/300x200/D1FFC1/000000?text=Class+12',
        timing: '8:00 AM - 2:00 PM',
        strength: 28,
        medium: 'English',
        subjects: ['Physics', 'Chemistry', 'Maths/Biology', 'English', 'Computer Science'],
        topics: ['Boards Preparation', 'Competitive Exams (JEE/NEET)', 'Lab Practicals'],
        facilities: ['Physics/Chemistry Labs', 'Counselling', 'Digital Resources'],
        activities: ['Seminars', 'Mock Tests', 'Project Work'],
        description:
            'Final academic stage to build exam confidence and future college readiness.',
    },
];

const Details = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen py-12 px-4 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12 tracking-wide uppercase">
                Maharishi Vidya Mandir - Class Details
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {classData.map((cls) => (
                    <div
                        key={cls.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={cls.image}
                            alt={cls.className}
                            className="w-full md:w-1/3 object-cover h-56 md:h-auto"
                        />
                        <div className="p-6 flex-1 space-y-3 text-sm sm:text-base md:text-lg text-gray-800 text-center">
                            <h3 className="text-2xl font-extrabold text-blue-700">{cls.className}</h3>
                            <p><strong>⏰ Timing:</strong> <span className="font-semibold">{cls.timing}</span></p>
                            <p><strong>🗣 Medium:</strong> <span className="font-semibold">{cls.medium}</span></p>
                            <p><strong>👥 Strength:</strong> <span className="font-semibold">{cls.strength} students</span></p>
                            <p><strong>📘 Subjects:</strong> <span className="font-semibold">{cls.subjects.join(', ')}</span></p>
                            <p><strong>📖 Topics:</strong> <span className="font-semibold">{cls.topics.join(', ')}</span></p>
                            <p><strong>🏫 Facilities:</strong> <span className="font-semibold">{cls.facilities.join(', ')}</span></p>
                            <p><strong>🎯 Activities:</strong> <span className="font-semibold">{cls.activities.join(', ')}</span></p>
                            <p><strong>📝 Description:</strong> <span className="font-medium text-gray-700">{cls.description}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
