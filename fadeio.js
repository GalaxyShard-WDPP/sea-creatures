function handle_exit()
{
    let contents = document.getElementsByClassName("content");
    for (let i = 0; i < contents.length; i++)
    {
        contents[i].classList.add("contentOut");
    }
}
window.addEventListener("beforeunload", handle_exit);