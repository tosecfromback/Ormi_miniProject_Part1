export function footer_maker(){
    const $footer = document.querySelector("#footer_page");

    const refer = document.createElement("h2")
    const refer_a = document.createElement("a")
    const refer_p = document.createElement("p")
    
    const git_self = document.createElement("h2")
    const git_self_a = document.createElement("a")
    const git_self_p = document.createElement("p")

    refer.appendChild(refer_a)
    refer_a.setAttribute("href", "https://www.nl.go.kr/")
    refer_a.appendChild(refer_p)
    refer_p.setAttribute("id", "refer_logo")
    refer_p.textContent = "국립중앙도서관"
    
    git_self.appendChild(git_self_a)
    git_self_a.setAttribute("href", "https://github.com/tosecfromback/Ormi_miniProject_Part1")
    git_self_a.appendChild(git_self_p)
    git_self_p.setAttribute("id", "git_logo")
    git_self_p.textContent = "GitHub Link"


    $footer.appendChild(refer)
    $footer.appendChild(git_self)
    
}