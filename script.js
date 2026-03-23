// O'quvchilar ma'lumotlari - Rasmlar bilan
const students = [
    {
        id: 1,
        name: "Abdullayev Javohir",
        gender: "male",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        birthDate: "2007-05-15",
        address: "Toshkent, Chilonzor tumani",
        phone: "+998 90 123 45 67",
        email: "javohir.a@student.uz",
        average: 92.5,
        isExcellent: true,
        hobbies: ["Futbol", "Shaxmat", "Dasturlash"],
        fanlar: [
            { name: "Matematika", grade: 95 },
            { name: "Fizika", grade: 92 },
            { name: "Informatika", grade: 98 },
            { name: "Ingliz tili", grade: 90 },
            { name: "Tarix", grade: 88 }
        ]
    },
    {
        id: 2,
        name: "Karimova Madina",
        gender: "female",
        photo: "https://thumbs.dreamstime.com/b/photo-impressed-charming-cheerful-lady-hold-hands-cant-believe-pink-color-background-photo-impressed-charming-cheerful-256445149.jpg",
        birthDate: "2007-08-22",
        address: "Toshkent, Yunusobod tumani",
        phone: "+998 91 234 56 78",
        email: "madina.k@student.uz",
        average: 95.2,
        isExcellent: true,
        hobbies: ["Rasm chizish", "Kitob o'qish", "Musiqa"],
        fanlar: [
            { name: "Adabiyot", grade: 98 },
            { name: "Ingliz tili", grade: 97 },
            { name: "Tarix", grade: 95 },
            { name: "Biologiya", grade: 94 },
            { name: "Kimyo", grade: 92 }
        ]
    },
    {
        id: 3,
        name: "Sobirov Sardor",
        gender: "male",
        photo: "https://img.freepik.com/free-photo/young-hispanic-man-smiling-confident-make-selfie-by-camera-street_839833-31609.jpg",
        birthDate: "2007-03-10",
        address: "Toshkent, Mirzo Ulug'bek tumani",
        phone: "+998 93 345 67 89",
        email: "sardor.s@student.uz",
        average: 78.3,
        isExcellent: false,
        hobbies: ["Basketbol", "Kompyuter o'yinlari"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 95 },
            { name: "Matematika", grade: 72 },
            { name: "Fizika", grade: 68 },
            { name: "Ingliz tili", grade: 70 },
            { name: "Tarix", grade: 75 }
        ]
    },
    {
        id: 4,
        name: "Tursunova Aziza",
        gender: "female",
        photo: "https://thumbs.dreamstime.com/b/photo-suspicious-young-lady-hold-arms-folded-not-trust-news-wear-cardigan-jeans-isolated-pink-color-background-photo-299670063.jpg",
        birthDate: "2007-11-18",
        address: "Toshkent, Yakkasaroy tumani",
        phone: "+998 94 456 78 90",
        email: "aziza.t@student.uz",
        average: 88.9,
        isExcellent: false,
        hobbies: ["Raqs", "She'riyat", "Pishirish"],
        fanlar: [
            { name: "Adabiyot", grade: 96 },
            { name: "San'at", grade: 95 },
            { name: "Biologiya", grade: 88 },
            { name: "Kimyo", grade: 84 },
            { name: "Geografiya", grade: 82 }
        ]
    },
    {
        id: 5,
        name: "Raxmonov Behruz",
        gender: "male",
        photo: "https://png.pngtree.com/png-vector/20240108/ourmid/pngtree-3d-happy-corporate-business-professional-one-man-clipart-white-background-png-image_11428213.png",
        birthDate: "2007-07-25",
        address: "Toshkent, Olmazor tumani",
        phone: "+998 95 567 89 01",
        email: "behruz.r@student.uz",
        average: 91.2,
        isExcellent: true,
        hobbies: ["Shaxmat", "Fizika tajribalari", "Velosiped"],
        fanlar: [
            { name: "Fizika", grade: 97 },
            { name: "Matematika", grade: 95 },
            { name: "Informatika", grade: 93 },
            { name: "Kimyo", grade: 89 },
            { name: "Astronomiya", grade: 92 }
        ]
    },
    {
        id: 6,
        name: "Yusupova Dilnoza",
        gender: "female",
        photo: "https://thumbs.dreamstime.com/b/photo-young-happy-cheerful-excited-positive-good-mood-afro-girl-white-blouse-isolated-blue-color-background-223427564.jpg",
        birthDate: "2007-09-30",
        address: "Toshkent, Sergeli tumani",
        phone: "+998 97 678 90 12",
        email: "dilnoza.y@student.uz",
        average: 93.7,
        isExcellent: true,
        hobbies: ["Voleybol", "Tikuvchilik", "Ingliz tili"],
        fanlar: [
            { name: "Ingliz tili", grade: 99 },
            { name: "Adabiyot", grade: 96 },
            { name: "Geografiya", grade: 94 },
            { name: "Tarix", grade: 92 },
            { name: "Biologiya", grade: 90 }
        ]
    },
    {
        id: 7,
        name: "Xolmatov Farrux",
        gender: "male",
        photo: "https://png.pngtree.com/png-vector/20240518/ourmid/pngtree-happy-businessman-showing-thumbs-up-support-man-positive-png-image_12423787.png",
        birthDate: "2007-12-05",
        address: "Toshkent, Bektemir tumani",
        phone: "+998 98 789 01 23",
        email: "farrux.x@student.uz",
        average: 76.8,
        isExcellent: false,
        hobbies: ["Futbol", "Musiqa", "Turizm"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 92 },
            { name: "Geografiya", grade: 82 },
            { name: "Tarix", grade: 75 },
            { name: "Matematika", grade: 68 },
            { name: "Fizika", grade: 65 }
        ]
    },
    {
        id: 8,
        name: "Ismoilova Nodira",
        gender: "female",
        photo: "https://media.istockphoto.com/id/1156520580/photo/studio-portrait-of-young-caucasian-woman.jpg?s=612x612&w=0&k=20&c=9ThJ2ZTxwraWoR9NmIiCejXr359m-R_IwvxAXmUVk3U=",
        birthDate: "2007-04-17",
        address: "Toshkent, Uchtepa tumani",
        phone: "+998 99 890 12 34",
        email: "nodira.i@student.uz",
        average: 89.5,
        isExcellent: false,
        hobbies: ["Kitob o'qish", "Yozish", "Rasm chizish"],
        fanlar: [
            { name: "Adabiyot", grade: 97 },
            { name: "Tarix", grade: 94 },
            { name: "San'at", grade: 93 },
            { name: "Ingliz tili", grade: 86 },
            { name: "Biologiya", grade: 82 }
        ]
    },
    {
        id: 9,
        name: "Komilov Abror",
        gender: "male",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
        birthDate: "2007-06-28",
        address: "Toshkent, Shayxontohur tumani",
        phone: "+998 90 901 23 45",
        email: "abror.k@student.uz",
        average: 87.2,
        isExcellent: false,
        hobbies: ["Dasturlash", "Robototexnika", "Shaxmat"],
        fanlar: [
            { name: "Informatika", grade: 98 },
            { name: "Matematika", grade: 92 },
            { name: "Fizika", grade: 88 },
            { name: "Ingliz tili", grade: 82 },
            { name: "Kimyo", grade: 76 }
        ]
    },
    {
        id: 10,
        name: "Rasulova Malika",
        gender: "female",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        birthDate: "2007-02-14",
        address: "Toshkent, Chilonzor tumani",
        phone: "+998 91 012 34 56",
        email: "malika.r@student.uz",
        average: 94.8,
        isExcellent: true,
        hobbies: ["Pianino", "She'riyat", "Raqs"],
        fanlar: [
            { name: "Musiqa", grade: 99 },
            { name: "Adabiyot", grade: 98 },
            { name: "Ingliz tili", grade: 96 },
            { name: "San'at", grade: 95 },
            { name: "Tarix", grade: 92 }
        ]
    },
    {
        id: 11,
        name: "Usmonov Jahongir",
        gender: "male",
        photo: "https://cdn.pixabay.com/photo/2014/09/17/11/47/man-449406_640.jpg",
        birthDate: "2007-10-08",
        address: "Toshkent, Mirobod tumani",
        phone: "+998 93 123 45 67",
        email: "jahongir.u@student.uz",
        average: 82.3,
        isExcellent: false,
        hobbies: ["Sport", "Futbol", "Boks"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 96 },
            { name: "Biologiya", grade: 84 },
            { name: "Kimyo", grade: 80 },
            { name: "Fizika", grade: 78 },
            { name: "Matematika", grade: 74 }
        ]
    },
    {
        id: 12,
        name: "Xasanova Zilola",
        gender: "female",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        birthDate: "2007-01-19",
        address: "Toshkent, Yunusobod tumani",
        phone: "+998 94 234 56 78",
        email: "zilola.x@student.uz",
        average: 90.1,
        isExcellent: true,
        hobbies: ["Til o'rganish", "Sayohat", "Fotosurat"],
        fanlar: [
            { name: "Ingliz tili", grade: 97 },
            { name: "Nemis tili", grade: 95 },
            { name: "Geografiya", grade: 92 },
            { name: "Tarix", grade: 88 },
            { name: "Adabiyot", grade: 86 }
        ]
    },
    {
        id: 13,
        name: "G'ulomov Doston",
        gender: "male",
        photo: "https://png.pngtree.com/png-vector/20231122/ourmid/pngtree-standing-thoughtful-positive-contentment-png-image_10637536.png",
        birthDate: "2007-08-12",
        address: "Toshkent, Olmazor tumani",
        phone: "+998 95 345 67 89",
        email: "doston.g@student.uz",
        average: 79.6,
        isExcellent: false,
        hobbies: ["Futbol", "Kompyuter", "Kino"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 91 },
            { name: "Informatika", grade: 86 },
            { name: "Tarix", grade: 78 },
            { name: "Geografiya", grade: 76 },
            { name: "Matematika", grade: 70 }
        ]
    },
    {
        id: 14,
        name: "Nurmatova Sevara",
        gender: "female",
        photo: "https://randomuser.me/api/portraits/women/14.jpg",
        birthDate: "2007-03-25",
        address: "Toshkent, Yakkasaroy tumani",
        phone: "+998 97 456 78 90",
        email: "sevara.n@student.uz",
        average: 92.3,
        isExcellent: true,
        hobbies: ["Rasm chizish", "Dizayn", "Tikuvchilik"],
        fanlar: [
            { name: "San'at", grade: 98 },
            { name: "Texnologiya", grade: 96 },
            { name: "Adabiyot", grade: 94 },
            { name: "Ingliz tili", grade: 90 },
            { name: "Biologiya", grade: 88 }
        ]
    },
    {
        id: 15,
        name: "Toshpo'latov Sherzod",
        gender: "male",
        photo: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-smart-business-man-png-image_10275555.png",
        birthDate: "2007-11-30",
        address: "Toshkent, Bektemir tumani",
        phone: "+998 98 567 89 01",
        email: "sherzod.t@student.uz",
        average: 84.7,
        isExcellent: false,
        hobbies: ["Shaxmat", "Kitob o'qish", "Velosiped"],
        fanlar: [
            { name: "Matematika", grade: 91 },
            { name: "Fizika", grade: 88 },
            { name: "Informatika", grade: 86 },
            { name: "Ingliz tili", grade: 82 },
            { name: "Tarix", grade: 79 }
        ]
    },
    {
        id: 16,
        name: "Yo'ldosheva Mohira",
        gender: "female",
        photo: "https://static.vecteezy.com/system/resources/thumbnails/008/359/693/small/young-woman-making-namaste-gesture-isolated-on-beige-background-photo.JPG",
        birthDate: "2007-07-04",
        address: "Toshkent, Shayxontohur tumani",
        phone: "+998 99 678 90 12",
        email: "mohira.y@student.uz",
        average: 88.4,
        isExcellent: false,
        hobbies: ["Kitob o'qish", "Yozish", "She'riyat"],
        fanlar: [
            { name: "Adabiyot", grade: 97 },
            { name: "Tarix", grade: 92 },
            { name: "Ingliz tili", grade: 89 },
            { name: "Geografiya", grade: 85 },
            { name: "Biologiya", grade: 82 }
        ]
    },
    {
        id: 17,
        name: "Berdiyev Sanjar",
        gender: "male",
        photo: "https://img.freepik.com/premium-photo/close-up-portrait-confident-young-businessman_171337-38422.jpg",
        birthDate: "2007-09-15",
        address: "Toshkent, Chilonzor tumani",
        phone: "+998 90 789 01 23",
        email: "sanjar.b@student.uz",
        average: 81.2,
        isExcellent: false,
        hobbies: ["Futbol", "Basketbol", "Suzish"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 94 },
            { name: "Biologiya", grade: 86 },
            { name: "Kimyo", grade: 82 },
            { name: "Fizika", grade: 78 },
            { name: "Matematika", grade: 74 }
        ]
    },
    {
        id: 18,
        name: "Sultonova Dilafruz",
        gender: "female",
        photo: "https://img.freepik.com/free-photo/image-beautiful-girl-with-ginger-hair-blue-eyes-snap-fingers-dancing-smiling-camera-standing-against-white-background_176420-52360.jpg?semt=ais_hybrid&w=740&q=80",
        birthDate: "2007-12-20",
        address: "Toshkent, Mirzo Ulug'bek tumani",
        phone: "+998 91 890 12 34",
        email: "dilafruz.s@student.uz",
        average: 93.1,
        isExcellent: true,
        hobbies: ["Musiqa", "Raqs", "Teatr"],
        fanlar: [
            { name: "San'at", grade: 97 },
            { name: "Adabiyot", grade: 96 },
            { name: "Ingliz tili", grade: 94 },
            { name: "Tarix", grade: 92 },
            { name: "Musiqa", grade: 98 }
        ]
    },
    {
        id: 19,
        name: "Abdurahmonov Muhammad",
        gender: "male",
        photo: "https://img.freepik.com/premium-photo/business-man-suit-white-transparent-background_457222-4212.jpg",
        birthDate: "2007-04-08",
        address: "Toshkent, Uchtepa tumani",
        phone: "+998 93 901 23 45",
        email: "muhammad.a@student.uz",
        average: 89.8,
        isExcellent: false,
        hobbies: ["Dasturlash", "Matematika", "Fizika"],
        fanlar: [
            { name: "Informatika", grade: 97 },
            { name: "Matematika", grade: 95 },
            { name: "Fizika", grade: 92 },
            { name: "Ingliz tili", grade: 86 },
            { name: "Kimyo", grade: 82 }
        ]
    },
    {
        id: 20,
        name: "Rustamova Malohat",
        gender: "female",
        photo: "https://randomuser.me/api/portraits/women/20.jpg",
        birthDate: "2007-06-17",
        address: "Toshkent, Yakkasaroy tumani",
        phone: "+998 94 012 34 56",
        email: "malohat.r@student.uz",
        average: 86.5,
        isExcellent: false,
        hobbies: ["Tikuvchilik", "Pishirish", "Gulchilik"],
        fanlar: [
            { name: "Texnologiya", grade: 95 },
            { name: "Biologiya", grade: 90 },
            { name: "Kimyo", grade: 88 },
            { name: "Geografiya", grade: 84 },
            { name: "Adabiyot", grade: 82 }
        ]
    },
    {
        id: 21,
        name: "Hamidov Zafar",
        gender: "male",
        photo: "https://img.freepik.com/premium-photo/business-man-suit-white-transparent-background_457222-4127.jpg",
        birthDate: "2007-10-28",
        address: "Toshkent, Sergeli tumani",
        phone: "+998 95 123 45 67",
        email: "zafar.h@student.uz",
        average: 77.9,
        isExcellent: false,
        hobbies: ["Sport", "Futbol", "Kurash"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 93 },
            { name: "Tarix", grade: 80 },
            { name: "Geografiya", grade: 78 },
            { name: "Biologiya", grade: 75 },
            { name: "Fizika", grade: 72 }
        ]
    },
    {
        id: 22,
        name: "Karimova Sevinch",
        gender: "female",
        photo: "https://media.istockphoto.com/id/149734237/photo/victory.jpg?s=170667a&w=0&k=20&c=ckRs7u21Thf5mYFSueBUO7THz4q5JisbC-tBF_RLG7U=",
        birthDate: "2007-02-03",
        address: "Toshkent, Olmazor tumani",
        phone: "+998 97 234 56 78",
        email: "sevinch.k@student.uz",
        average: 91.7,
        isExcellent: true,
        hobbies: ["Rasm chizish", "Dizayn", "Fotosurat"],
        fanlar: [
            { name: "San'at", grade: 98 },
            { name: "Ingliz tili", grade: 95 },
            { name: "Adabiyot", grade: 93 },
            { name: "Texnologiya", grade: 91 },
            { name: "Geografiya", grade: 89 }
        ]
    },
    {
        id: 23,
        name: "Islomov Abdulloh",
        gender: "male",
        photo: "https://static.vecteezy.com/system/resources/thumbnails/029/321/564/small/ai-generative-business-man-in-a-suit-white-transparent-background-free-photo.jpg",
        birthDate: "2007-05-12",
        address: "Toshkent, Yunusobod tumani",
        phone: "+998 98 345 67 89",
        email: "abdulloh.i@student.uz",
        average: 88.2,
        isExcellent: false,
        hobbies: ["Shaxmat", "Tarix", "Kitob o'qish"],
        fanlar: [
            { name: "Tarix", grade: 96 },
            { name: "Adabiyot", grade: 92 },
            { name: "Geografiya", grade: 89 },
            { name: "Ingliz tili", grade: 85 },
            { name: "Huquq", grade: 92 }
        ]
    },
    {
        id: 24,
        name: "Tursunova Madina",
        gender: "female",
        photo: "https://media.istockphoto.com/id/142578024/photo/woman-resting-on-table.jpg?s=612x612&w=0&k=20&c=eGdHpCI5lkFoYu-GeYtPWAjLC4fzGffQLEgNBnylpYc=",
        birthDate: "2007-08-19",
        address: "Toshkent, Mirobod tumani",
        phone: "+998 99 456 78 90",
        email: "madina.t@student.uz",
        average: 92.8,
        isExcellent: true,
        hobbies: ["Ingliz tili", "Nemis tili", "Sayohat"],
        fanlar: [
            { name: "Ingliz tili", grade: 99 },
            { name: "Nemis tili", grade: 96 },
            { name: "Adabiyot", grade: 94 },
            { name: "Tarix", grade: 91 },
            { name: "Geografiya", grade: 89 }
        ]
    },
    {
        id: 25,
        name: "Abdullayev Nodir",
        gender: "male",
        photo: "https://static.vecteezy.com/system/resources/thumbnails/056/928/694/small/a-man-in-a-suit-and-tie-standing-with-his-arms-crossed-free-photo.jpg",
        birthDate: "2007-03-30",
        address: "Toshkent, Chilonzor tumani",
        phone: "+998 90 567 89 01",
        email: "nodir.a@student.uz",
        average: 83.6,
        isExcellent: false,
        hobbies: ["Futbol", "Kompyuter", "Musiqa"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 92 },
            { name: "Informatika", grade: 88 },
            { name: "Musiqa", grade: 86 },
            { name: "Matematika", grade: 80 },
            { name: "Fizika", grade: 76 }
        ]
    },
    {
        id: 26,
        name: "Rahimova Dilrabo",
        gender: "female",
        photo: "https://thumbs.dreamstime.com/b/call-me-please-portrait-young-cute-smiling-woman-white-t-shirt-gesturing-smart-phone-one-hand-pointing-110928717.jpg",
        birthDate: "2007-11-07",
        address: "Toshkent, Shayxontohur tumani",
        phone: "+998 91 678 90 12",
        email: "dilrabo.r@student.uz",
        average: 90.4,
        isExcellent: true,
        hobbies: ["Kitob o'qish", "She'riyat", "Yozish"],
        fanlar: [
            { name: "Adabiyot", grade: 98 },
            { name: "Tarix", grade: 94 },
            { name: "Ingliz tili", grade: 92 },
            { name: "Biologiya", grade: 89 },
            { name: "Kimyo", grade: 87 }
        ]
    },
    {
        id: 27,
        name: "Saidov Akmal",
        gender: "male",
        photo: "https://img.freepik.com/free-photo/serious-man-suit_23-2147574141.jpg?semt=ais_hybrid&w=740&q=80",
        birthDate: "2007-09-23",
        address: "Toshkent, Bektemir tumani",
        phone: "+998 93 789 01 23",
        email: "akmal.s@student.uz",
        average: 79.3,
        isExcellent: false,
        hobbies: ["Basketbol", "Velosiped", "Suzish"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 94 },
            { name: "Biologiya", grade: 82 },
            { name: "Geografiya", grade: 80 },
            { name: "Tarix", grade: 76 },
            { name: "Fizika", grade: 72 }
        ]
    },
    {
        id: 28,
        name: "Yusupova Nigora",
        gender: "female",
        photo: "https://thumbs.dreamstime.com/b/head-shot-close-up-portrait-happy-pleasant-young-woman-looking-camera-waving-hello-pretty-millennial-lady-communicating-164810528.jpg",
        birthDate: "2007-12-14",
        address: "Toshkent, Uchtepa tumani",
        phone: "+998 94 890 12 34",
        email: "nigora.y@student.uz",
        average: 87.9,
        isExcellent: false,
        hobbies: ["Rasm chizish", "Dizayn", "Fotosurat"],
        fanlar: [
            { name: "San'at", grade: 96 },
            { name: "Texnologiya", grade: 92 },
            { name: "Adabiyot", grade: 89 },
            { name: "Ingliz tili", grade: 86 },
            { name: "Geografiya", grade: 84 }
        ]
    },
    {
        id: 29,
        name: "Xolmatov Sherali",
        gender: "male",
        photo: "https://png.pngtree.com/thumb_back/fh260/background/20220601/pngtree-handsome-man-in-suit-and-glasses-smiling-and-thinking-photo-image_46493484.jpg",
        birthDate: "2007-05-05",
        address: "Toshkent, Sergeli tumani",
        phone: "+998 95 901 23 45",
        email: "sherali.x@student.uz",
        average: 82.1,
        isExcellent: false,
        hobbies: ["Futbol", "Shaxmat", "Kitob o'qish"],
        fanlar: [
            { name: "Jismoniy tarbiya", grade: 91 },
            { name: "Tarix", grade: 86 },
            { name: "Adabiyot", grade: 83 },
            { name: "Geografiya", grade: 80 },
            { name: "Matematika", grade: 77 }
        ]
    },
    {
        id: 30,
        name: "Karimova Nilufar",
        gender: "female",
        photo: "https://thumbs.dreamstime.com/b/asia-woman-making-call-me-gesture-isolated-white-39120623.jpg",
        birthDate: "2007-07-21",
        address: "Toshkent, Yakkasaroy tumani",
        phone: "+998 97 012 34 56",
        email: "nilufar.k@student.uz",
        average: 94.2,
        isExcellent: true,
        hobbies: ["Pianino", "Vokal", "Teatr"],
        fanlar: [
            { name: "Musiqa", grade: 99 },
            { name: "San'at", grade: 97 },
            { name: "Adabiyot", grade: 95 },
            { name: "Ingliz tili", grade: 93 },
            { name: "Tarix", grade: 91 }
        ]
    },
    {
        id: 31,
        name: "Toshmatov Otabek",
        gender: "male",
        photo: "https://png.pngtree.com/background/20250212/original/pngtree-portrait-of-a-serious-business-man-person-serious-alone-photo-picture-image_12699979.jpg",
        birthDate: "2007-10-10",
        address: "Toshkent, Mirzo Ulug'bek tumani",
        phone: "+998 98 123 45 67",
        email: "otabek.t@student.uz",
        average: 85.7,
        isExcellent: false,
        hobbies: ["Dasturlash", "Robototexnika", "Shaxmat"],
        fanlar: [
            { name: "Informatika", grade: 95 },
            { name: "Matematika", grade: 90 },
            { name: "Fizika", grade: 87 },
            { name: "Ingliz tili", grade: 83 },
            { name: "Kimyo", grade: 80 }
        ]
    },
    {
        id: 32,
        name: "Rasulova Mohigul",
        gender: "female",
        photo: "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg",
        birthDate: "2007-04-03",
        address: "Toshkent, Olmazor tumani",
        phone: "+998 99 234 56 78",
        email: "mohigul.r@student.uz",
        average: 89.3,
        isExcellent: false,
        hobbies: ["Kitob o'qish", "Yozish", "Til o'rganish"],
        fanlar: [
            { name: "Adabiyot", grade: 96 },
            { name: "Ingliz tili", grade: 94 },
            { name: "Tarix", grade: 91 },
            { name: "Biologiya", grade: 88 },
            { name: "Geografiya", grade: 85 }
        ]
    }
];

// Auth funksiyalari
function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Demo login
    if (email === 'demo@sinf.uz' && password === 'demo123') {
        // Muvaffaqiyatli login
        document.getElementById('authSection').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        // Foydalanuvchi ma'lumotlarini ko'rsatish
        document.getElementById('userName').textContent = 'Demo Foydalanuvchi';
        document.getElementById('userRole').textContent = 'O\'quvchi';
        
        // Sahifani yangilamasdan o'quvchilarni render qilish
        renderStudents();
        
        showNotification('Muvaffaqiyatli kirdingiz!', 'success');
    } else {
        showNotification('Email yoki parol noto\'g\'ri!', 'error');
    }
}

function handleRegister() {
    const firstName = document.getElementById('regFirstName').value;
    const lastName = document.getElementById('regLastName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const role = document.getElementById('regRole').value;
    
    // Validatsiya
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        showNotification('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Parollar mos kelmadi!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Parol kamida 6 belgidan iborat bo\'lishi kerak!', 'error');
        return;
    }
    
    // Muvaffaqiyatli ro'yxatdan o'tish
    showNotification('Ro\'yxatdan muvaffaqiyatli o\'tdingiz! Endi tizimga kirishingiz mumkin.', 'success');
    
    // Avtomatik login tabiga o'tish
    document.getElementById('loginTab').click();
    
    // Formani tozalash
    document.getElementById('regFirstName').value = '';
    document.getElementById('regLastName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('regConfirmPassword').value = '';
}

function handleLogout() {
    document.getElementById('authSection').style.display = 'flex';
    document.getElementById('mainContent').style.display = 'none';
    showNotification('Tizimdan chiqdingiz!', 'info');
}

// Bildirishnoma ko'rsatish
function showNotification(message, type) {
    // Mavjud notificationni o'chirish
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yangi notification yaratish
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#4ecdc4' : type === 'error' ? '#ff6b6b' : '#667eea'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // 3 sekunddan keyin o'chirish
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Tab o'zgartirish
document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    loginTab.addEventListener('click', function() {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });
    
    registerTab.addEventListener('click', function() {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    });
    
    // Enter tugmasini bosganda login qilish
    document.getElementById('loginPassword').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
    
    // Register formada Enter tugmasi
    document.getElementById('regConfirmPassword').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleRegister();
        }
    });
});

// Global o'zgaruvchilar
let currentFilter = 'all';
let searchTerm = '';

// DOM elementlari
const studentsGrid = document.getElementById('studentsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('studentModal');
const modalName = document.getElementById('modalName');
const modalInfo = document.getElementById('modalInfo');

// O'quvchilarni render qilish
function renderStudents() {
    if (!studentsGrid) return;
    
    let filteredStudents = students;

    // Filter bo'yicha
    if (currentFilter === 'boys') {
        filteredStudents = filteredStudents.filter(s => s.gender === 'male');
    } else if (currentFilter === 'girls') {
        filteredStudents = filteredStudents.filter(s => s.gender === 'female');
    } else if (currentFilter === 'excellent') {
        filteredStudents = filteredStudents.filter(s => s.isExcellent);
    }

    // Qidiruv bo'yicha
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(s =>
            s.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    let html = '';
    filteredStudents.forEach(student => {
        const avgColor = student.average >= 90 ? '#4ecdc4' : student.average >= 80 ? '#ff9f43' : '#ff6b6b';

        html += `
            <div class="oquvchi-card" onclick="showStudentModal(${student.id})">
                <div class="card-header">
                    <div class="avatar">
                        ${student.photo ?
                            `<img src="${student.photo}" alt="${student.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` :
                            student.name.charAt(0)
                        }
                    </div>
                    <div class="card-header-info">
                        <h3>${student.name}</h3>
                        <p>${student.gender === 'male' ? '👦' : '👧'} ${student.birthDate}</p>
                    </div>
                </div>
                <div class="card-body">
                    <div class="info-row">
                        <span>📞 Telefon</span>
                        <span>${student.phone}</span>
                    </div>
                    <div class="info-row">
                        <span>📧 Email</span>
                        <span>${student.email}</span>
                    </div>
                    <div class="info-row">
                        <span>🏠 Manzil</span>
                        <span>${student.address}</span>
                    </div>
                    <div class="progress-bar-mini">
                        <div class="progress-fill-mini" style="width: ${student.average}%; background: ${avgColor};"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                        <span style="font-weight: bold;">O'rtacha ball:</span>
                        <span style="font-weight: bold; color: ${avgColor};">${student.average}</span>
                    </div>
                    <div style="margin-top: 15px;">
                        ${student.isExcellent ? '<span class="badge badge-success">🏆 A\'lochi</span>' : ''}
                        <span class="badge badge-info">❤️ ${student.hobbies.slice(0, 2).join(', ')}</span>
                    </div>
                </div>
            </div>
        `;
    });

    studentsGrid.innerHTML = html;
}

// Modal oynada o'quvchi ma'lumotlarini ko'rsatish
window.showStudentModal = function(studentId) {
    const student = students.find(s => s.id === studentId);
    if (!student) return;

    modalName.textContent = student.name;

    // Avatar uchun CSS qo'shamiz (agar mavjud bo'lmasa)
    const style = document.createElement('style');
    style.textContent = `
        .modal-avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 0 auto 25px;
            overflow: hidden;
            border: 5px solid #4ecdc4;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .modal-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .modal-avatar-placeholder {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4em;
            color: white;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    let infoHtml = `
        <div class="modal-avatar">
            ${student.photo ?
                `<img src="${student.photo}" alt="${student.name}">` :
                `<div class="modal-avatar-placeholder">${student.name.charAt(0)}</div>`
            }
        </div>
        <div class="modal-info-item">
            <span>👤 Jinsi</span>
            <span>${student.gender === 'male' ? 'O\'g\'il bola' : 'Qiz bola'}</span>
        </div>
        <div class="modal-info-item">
            <span>📅 Tug'ilgan sana</span>
            <span>${student.birthDate}</span>
        </div>
        <div class="modal-info-item">
            <span>📞 Telefon</span>
            <span>${student.phone}</span>
        </div>
        <div class="modal-info-item">
            <span>📧 Email</span>
            <span>${student.email}</span>
        </div>
        <div class="modal-info-item">
            <span>🏠 Manzil</span>
            <span>${student.address}</span>
        </div>
        <div class="modal-info-item">
            <span>📊 O'rtacha ball</span>
            <span style="color: ${student.average >= 90 ? '#4ecdc4' : student.average >= 80 ? '#ff9f43' : '#ff6b6b'}; font-weight: bold;">${student.average}</span>
        </div>
        <div class="modal-info-item">
            <span>❤️ Qiziqishlari</span>
            <span>${student.hobbies.join(', ')}</span>
        </div>
        <div style="margin-top: 25px;">
            <h3 style="color: #333; margin-bottom: 15px; text-align: center; border-bottom: 2px solid #4ecdc4; padding-bottom: 10px;">📚 Fanlardagi baholari</h3>
    `;

    student.fanlar.forEach(fan => {
        const gradeColor = fan.grade >= 90 ? '#4ecdc4' : fan.grade >= 80 ? '#ff9f43' : '#ff6b6b';
        infoHtml += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 10px 15px; background: #f8f9fa; border-radius: 10px; border-left: 4px solid ${gradeColor};">
                <span style="font-weight: 500;">${fan.name}</span>
                <span style="font-weight: bold; color: ${gradeColor}; font-size: 1.1em;">${fan.grade}</span>
            </div>
        `;
    });

    infoHtml += `</div>`;

    modalInfo.innerHTML = infoHtml;
    modal.classList.add('active');
}

// Modal oynani yopish
window.closeModal = function() {
    modal.classList.remove('active');
}

// Filtr tugmalariga event listener qo'shish
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderStudents();
    });
});

// Qidiruv
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderStudents();
    });
}

// Modal oynani background bosilganda yopish
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC bosilganda modalni yopish
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Animationlar uchun CSS qo'shish
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);