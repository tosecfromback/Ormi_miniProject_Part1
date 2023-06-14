export function footer_maker(){
    const $footer = document.querySelector("#footer_Area");

    const refer = document.createElement("h2")
    const refer_a = document.createElement("a")
    const refer_p = document.createElement("p")
    
    // const git_self = document.createElement("h2")
    const git_self_a = document.createElement("a")
    const git_self_p = document.createElement("p")
    
    refer.setAttribute("id", "footer_tap")

    $footer.appendChild(refer_a)
    refer_a.setAttribute("id", "refer_link")
    refer_a.setAttribute("href", "https://www.nl.go.kr/")
    refer_a.appendChild(refer_p)
    refer_p.setAttribute("id", "refer_logo")
    
    $footer.appendChild(git_self_a)
    git_self_a.setAttribute("id", "Git_link")
    git_self_a.setAttribute("href", "https://github.com/tosecfromback/Ormi_miniProject_Part1")
    git_self_a.appendChild(git_self_p)
    git_self_p.setAttribute("id", "git_logo")

}