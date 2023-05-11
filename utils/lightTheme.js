export const addListenersTheme = () => {
  const lightTheme = document.getElementById("icon");
  lightTheme.addEventListener("click", () => {
    const toggleTheme = document.querySelector("main");
    toggleTheme.classList.toggle("light-theme");
    if (!toggleTheme.classList.contains("light-theme")) {
      icon.src =
        "https://res.cloudinary.com/djglk3cso/image/upload/v1683708171/sun_g8mrfj.png";
    } else {
      icon.src =
        "https://res.cloudinary.com/djglk3cso/image/upload/v1683708172/moon_odl9o5.png";
    }
  });
};

//hacer por clases "dark-theme"
