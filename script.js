function groupSort() {
    const nameInput = document.getElementById("name").value.toLowerCase().split(' ');

    const groups = {
        "rama": ["alief daffa zuhairi", "hafizhuddin ahmad zuhdi al azzam", "kenzie ibastian hanif", "ryu revanda islamay cahyono", "nawra ramadhana", "azka shaula latifa", "micha anargya haryoko"],
        "sinta": ["arfa yudistira waskito", "arya pramono jati nugroho", "ganendra hakim mahardika", "m hafizh febriansyah", "arumi rastika zahra", "aurora putri herisa", "neldarain shabira", "adheputri syifa sahasika"],
        "antareja": ["aji aliffendri anan viky", "archi emir radityo", "galanga addin islami", "muhammad aqila reswara irawan", "nayla felicia putri", "quinsha justitia ramadhani", "sharah almaira ramadhani"],
        "bisma": ["muhammad fardad abdillah dermawan", "putra abimanyu", "shaman arundaya", "zhafran maulana firdaus", "dyora quinsa cahyono", "ameera nindita ayu ramadhani", "azka rana zahidah"],
        "srikandi": ["arkan attaya romadhon", "kyle christopher davis", "rafaa kenzie athaariq hamiseno", "wiratama azhka anwarsyah", "aiko aisyah mazaya", "naila tsabita tamimy", "saarah mohammad ashiblie"],
        "kresna": ["abiyasa ari hanggoro", "achmad mirza afandi", "azka satriatama priambodo", "zathalarezel alexander brahman susetya", "zara aaqilla assadiya", "azallea athaya zahvazeta", "asy syifa amatullah al bahri"]
    };

    let groupFound = false;

    for (const group in groups) {
        for (const fullName of groups[group]) {
            const fullNameWords = fullName.toLowerCase().split(' ');
            if (nameInput.every(word => fullNameWords.includes(word))) {
                window.location.href = group + "-group.html";
                groupFound = true;
                break;
            }
        }
        if (groupFound) {
            break;
        }
    }

    if (!groupFound) {
        window.location.href = "retry.html";
    }
}
