function insert_navigation_bar(root_relative_path)
{

    //////////////////////////////////////////////
    // LINKS 
    //////////////////////////////////////////////

    // Logo
    let IMG_LOGO = root_relative_path + "assets/imgs/shared/typorium_logo.png";

    // Home
    let HOME = root_relative_path + "index.htm";
    

    return (
    `<div class='navigation-bar'>` +
        `<img class='navigation-bar-item' id='navigation-bar-logo' src=${IMG_LOGO} alt='X(' >` +
        `<a class='navigation-bar-item' href=${HOME} >Home</a>` +
    `</div>`
    );
}