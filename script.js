function toggleSubcategories() {
    var subcategories = document.getElementById("subcategories");
    if (subcategories.style.display === "none" || subcategories.style.display === "") {
        subcategories.style.display = "block";
    } else {
        subcategories.style.display = "none";
    }
}