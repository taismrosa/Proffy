/**
 * Get the button and, when clicking, duplicate the element and fields
 */
var addField = function() {
    var btn = document.querySelector("#add-time");
    btn.addEventListener("click", function() {
        const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
        const fields = newFieldContainer.querySelectorAll("input");

        fields.forEach(function(field) {
            field.value = "";
        });
        
        document.querySelector("#schedule-items").appendChild(newFieldContainer);
    });
};
addField();