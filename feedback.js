function sortFeedback(order) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("feedbackTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[2];
            y = rows[i + 1].getElementsByTagName("td")[2];

            if (order === "asc") {
                if (Number(x.textContent) > Number(y.textContent)) {
                    shouldSwitch = true;
                    break;
                }
            } else if (order === "desc") {
                if (Number(x.textContent) < Number(y.textContent)) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
